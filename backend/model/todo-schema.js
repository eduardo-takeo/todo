import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  task: String,
  status: String,
});

export default todoSchema;
