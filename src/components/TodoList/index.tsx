import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import TaskItem from "../TaskItem";

// TODO: Move to .env
const API = "http://localhost:3001/api/todos";
interface TodoItem {
  _id: string;
  task: string;
  status: string;
}

export default function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetchTodoItems();
  }, []);

  const fetchTodoItems = async () => {
    const response = await fetch(API)
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((error) => console.error(error));

    return response;
  };

  return (
    <Container>
      {todos &&
        todos.map(({ _id, task, status }) => (
          <TaskItem key={_id} taskId={_id} description={task} status={status} />
        ))}
    </Container>
  );
}
