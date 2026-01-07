import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import crypto from "crypto";
import User from "@/models/User";

export const POST = async (req) => {
    await connectDB();
    
    let body = await req.formData();
    body = Object.fromEntries(body);

    // Check if razorpay_order_id exists in the database
    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json({ success: false, message: "Order ID not found" });
    }


    //fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: p.to_user });
    const secret = user.razorpaySecret;

    // Verify the payment signature
    let xx = body.razorpay_order_id + "|" + body.razorpay_payment_id;
    
    const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(xx.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === body.razorpay_signature;

    if (isAuthentic) {
        // Update the payment status to done
        const updatedPayment = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id }, 
            { done: true }, 
            { new: true }
        );
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`);
    } else {
        return NextResponse.json({ success: false, message: "Invalid signature" });
    }
}