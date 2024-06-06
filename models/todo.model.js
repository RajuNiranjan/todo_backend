import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: String,
  isCompleted: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
