import mongoose from "mongoose";
import todoSchema from "../model/todo-schema.js";

const Todo = mongoose.model("Todo", todoSchema);

const newTask = new Todo({
  task: "Cortar o cabelo",
  status: "active",
});

export default newTask;
