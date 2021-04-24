import React, { useContext } from "react";
import { Container } from "./styles";
import TaskItem from "../TaskItem";
import { TodosContext } from "../../contexts/TodosContext";

export default function TodoList() {
  const { todoList } = useContext(TodosContext);

  return (
    <Container>
      {todoList.length > 0 &&
        todoList.map(({ _id, task, status }) => (
          <TaskItem key={_id} taskId={_id} description={task} status={status} />
        ))}
    </Container>
  );
}
