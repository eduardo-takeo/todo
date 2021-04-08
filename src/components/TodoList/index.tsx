import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import TaskItem from "../TaskItem";

// TODO: Move to axios
const GET_URL = "http://localhost:3001/api/todos";
interface TodoItem {
  _id: number;
  task: string;
  status: string;
}

export default function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetchTodoItems();
  }, []);

  const fetchTodoItems = async () => {
    const response = await fetch(GET_URL)
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((error) => console.error(error));

    return response;
  };

  return (
    <Container>
      {todos &&
        todos.map(({ _id, task, status }) => (
          <TaskItem key={_id} description={task} status={status} />
        ))}
    </Container>
  );
}
