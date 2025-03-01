import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoDB_URI = process.env.URL;
    
    if (!mongoDB_URI) {
      console.error("❌ MONGO_URI environment variable is not defined. Check your .env file.");
      process.exit(1);
    }

    await mongoose.connect(mongoDB_URI);
    console.log("✅ MongoDB Connected!");

  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
