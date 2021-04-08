import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { create, remove, get } from "./controller/todo-controller.js";

// TODO: Estudar sobre .env e jogar isso lá
const PORT = process.env.PORT || 3001;
const MONGO_USER = "admin";
const MONGO_PASSWORD = "admin";
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@firstcluster.e1avw.mongodb.net/todo-list?retryWrites=true&w=majority`;

const app = express();

// TODO: Ver o que isso faz
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Todos API");
});

// API
app.post("/api/todos", create);
app.delete("/api/todos/:id", remove);
app.get("/api/todos", get);

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
