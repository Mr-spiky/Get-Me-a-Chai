"use server"

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";


export const initiate = async (amount, to_username, paymentform) => {
    try {
        await connectDB();

        // Validate inputs
        if (!amount || !to_username || !paymentform.name) {
            throw new Error("Missing required fields");
        }

        //fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: to_username });
    const secret = user.razorpaySecret;

        // Initialize Razorpay instance
        var instance = new Razorpay({
            key_id: user.razorpayId,
            key_secret: secret
        });

        // Create order options
        let options = {
            amount: Number.parseInt(amount) * 100, // amount in paise
            currency: "INR",
        };

        // Create Razorpay order
        let order = await instance.orders.create(options);
        console.log("✅ Razorpay order created:", order);

        if (!order || !order.id) {
            throw new Error("Failed to create Razorpay order");
        }

        // Create a payment record in database (pending status)
        const payment = await Payment.create({
            oid: order.id,
            amount: amount,
            to_user: to_username,
            name: paymentform.name,
            message: paymentform.message || "",
            done: false
        });

        console.log("✅ Payment record created in DB:", payment._id);

        return order;
    } catch (error) {
        console.error("❌ Error in initiate:", error);
        throw error;
    }
}


export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username }).lean();
    if (!u) return null;

    // Convert ObjectId to string for serialization
    return {
        ...u,
        _id: u._id.toString()
    };
}

export const fetchpayments = async (username) => {
    await connectDB();
    // Find all completed payments sorted by amount in descending order
    let payments = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .limit(10)
        .lean();

    // Convert ObjectIds to strings for serialization
    return payments.map(payment => ({
        ...payment,
        _id: payment._id.toString()
    }));
}

export const updateProfile = async (data, oldusername) => {
    await connectDB();
    
    //If the the username is being changed, check if the new username already exists
    if (oldusername !== data.username) {
        let updatedUser = await User.findOne({ username: data.username });
        if (updatedUser) {
            return { error: "Username already exists" };
        }
        
        // Update all payments with the new username
        await Payment.updateMany(
            { to_user: oldusername },
            { $set: { to_user: data.username } }
        );
        console.log("✅ Updated payments for username change:", oldusername, "->", data.username);
    }

    // Extract only allowed fields to prevent updating immutable fields like _id, __v
    const updateData = {
        name: data.name,
        email: data.email,
        username: data.username,
        profilePic: data.profilePic,
        coverPic: data.coverPic,
        razorpayId: data.razorpayId,
        razorpaySecret: data.razorpaySecret,
        bio: data.bio,
        updatedAt: new Date()
    };

    await User.updateOne(
        { username: oldusername }, 
        { $set: updateData }
    );
    
    console.log("✅ Profile updated successfully for:", oldusername);
    return { success: true };
}