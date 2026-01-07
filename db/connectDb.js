import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Check if already connected
    if (mongoose.connections[0].readyState) {
      console.log("✅ Already connected to MongoDB");
      console.log(`📊 Database: ${mongoose.connections[0].name}`);
      return;
    }

    const mongoURI = process.env.MONGODB_URI || `mongodb://localhost:27017/chai`;
    console.log(`🔗 Connecting to MongoDB...`);
    console.log(`📍 URI: ${mongoURI}`);

    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database Name: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw error;
  }
}

export default connectDB;
