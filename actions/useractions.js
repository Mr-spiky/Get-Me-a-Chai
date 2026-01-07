"use server"
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";


export const initiate = async (amount, to_username, paymentform) => {
    try {
        // Import Razorpay only when needed to avoid bundling it
        // into routes/actions that don't require it (Edge-incompatible)
        const Razorpay = (await import("razorpay")).default;
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
    try {
        await connectDB();
        let u = await User.findOne({ username: username }).lean();
        if (!u) return null;

        // Convert ObjectId to string for serialization
        return {
            ...u,
            _id: u._id.toString()
        };
    } catch (error) {
        console.error("❌ Error in fetchuser:", error);
        console.error("❌ Username:", username);
        console.error("❌ MongoDB URI exists:", !!process.env.MONGODB_URI);
        throw error;
    }
}

export const fetchpayments = async (username) => {
    try {
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
    } catch (error) {
        console.error("❌ Error in fetchpayments:", error);
        return [];
    }
}

export const updateProfile = async (data, oldusername) => {
    await connectDB();

    // Normalize inputs
    const newUsername = (data.username || '').trim();
    const currentUsername = (oldusername || '').trim();
    const email = (data.email || '').trim().toLowerCase();

    // If the username is being changed, ensure the new username isn't taken by another user
    if (currentUsername && newUsername && currentUsername !== newUsername) {
        const existing = await User.findOne({ username: newUsername }).lean();
        if (existing && existing.email !== email) {
            return { error: "Username already exists" };
        }
    }

    // Update payments if username changed
    if (currentUsername && newUsername && currentUsername !== newUsername) {
        await Payment.updateMany(
            { to_user: currentUsername },
            { $set: { to_user: newUsername } }
        );
        console.log("✅ Updated payments for username change:", currentUsername, "->", newUsername);
    }

    // Prepare upsert data (create if not exists)
    const updateData = {
        name: data.name,
        email: email,
        username: newUsername,
        profilePic: data.profilePic,
        coverPic: data.coverPic,
        razorpayId: data.razorpayId,
        razorpaySecret: data.razorpaySecret,
        bio: data.bio,
        updatedAt: new Date()
    };

    // Find the user by current username or email and update, creating if missing
    const updated = await User.findOneAndUpdate(
        { $or: [ { username: currentUsername }, { email } ] },
        { 
            $set: updateData,
            $setOnInsert: { createdAt: new Date() }
        },
        { new: true, upsert: true }
    );

    console.log("✅ Profile upserted for:", updated?.username, "(email:", updated?.email, ")");
    return { success: true, user: { id: updated._id.toString(), username: updated.username, email: updated.email } };
}