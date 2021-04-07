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

export const remove = async (req, res) => {
  const { id } = req.params;
  await TodoDB.deleteOne({ _id: id }, (error, { deletedCount }) => {
    if (error) return res.status(500).send(error);
    if (deletedCount === 0) return res.status(404).send(`${id} not found`);

    const response = {
      message: "Task removed successfully",
      id,
    };
    return res.status(200).send(response);
  });
};

export const get = async (req, res) => {
  await TodoDB.find({}, (error, allTasks) => {
    if (error) return res.status(500).res.send(error);

    return res.status(200).send(allTasks);
  });
};
