import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DataBase...");
    
  } catch (error) {

    console.log("Failed to connect DataBase:",error.message);
    process.exit(1)
    
  }
};
