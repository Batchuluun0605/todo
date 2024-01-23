import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    const MONGODB_URI =
      "mongodb+srv://batchuluun:04260517@cluster0.xjjyrsg.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(MONGODB_URI);
    console.log("connect");
  } catch (error: unknown) {
    throw new Error("Database cannot connect");
  }
};
export { connectDatabase };
