import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    username: { type: String, required: true, unique: true },
    profilePic: { type: String },
    coverPic: { type: String },
    razorpayId: { type: String },
    razorpaySecret: { type: String },
    bio: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Export existing model or create new one
export default mongoose.models.User || model('User', userSchema);
