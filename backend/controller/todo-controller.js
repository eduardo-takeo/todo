import TodoDB from "../model/todo-schema.js";

export const create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Message body cannot be empty" });
    return;
  }

  try {
    const { task, status } = req.body;
    const todo = new TodoDB({
      task,
      status,
    });

    const response = await todo.save();
    res.send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error has occurred while saving task",
    });
  }
};

export const remove = (req, res) => {};

export const get = (req, res) => {
  return res.json();
};
