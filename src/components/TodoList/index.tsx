import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import TaskItem from "../TaskItem";
import { useDispatch } from "react-redux";
import { setTasks } from "../../redux/ducks/todoList";
interface TodoItem {
  _id: string;
  task: string;
  status: string;
}

export default function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTodoItems();
  }, []);

  useEffect(() => {
    dispatch(setTasks(todos));
  }, [todos, dispatch]);

  const fetchTodoItems = async () => {
    await fetch("http://localhost:3001/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      {todos.length > 0 &&
        todos.map(({ _id, task, status }) => (
          <TaskItem key={_id} taskId={_id} description={task} status={status} />
        ))}
    </Container>
  );
}
