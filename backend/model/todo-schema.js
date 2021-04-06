import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const TodoDB = mongoose.model("todoDB", todoSchema);

export default TodoDB;
