import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    const MONGODB_URI = "mongodb://localhost:27017/todo";
    await mongoose.connect(MONGODB_URI);
    console.log("connect");
  } catch (error: unknown) {
    throw new Error("Database cannot connect");
  }
};
export { connectDatabase };
