import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
  title: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: String,
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
  },
  label: String,
});
const TodoModel = mongoose.model("Todo", TodoSchema);
export { TodoModel };
