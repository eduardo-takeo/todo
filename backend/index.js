import express from "express";
import mongoose from "mongoose";
import newTask from "./controller/todo-controller.js";

const PORT = process.env.PORT || 3000;
const MONGO_USER = "admin";
const MONGO_PASSWORD = "admin";
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@firstcluster.e1avw.mongodb.net/todo-list?retryWrites=true&w=majority`;

const app = express();

// Route
app.get("/", (req, res) => {
  res.send(newTask);
});

// MongoDB connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

app.listen(PORT, () => {
  console.log(`Server listening to ${PORT} port`);
});
