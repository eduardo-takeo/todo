import React from "react";
import { Container } from "./styles";
import TaskItem from "../TaskItem";

interface Props {
  list: { id: number; task: string; status: string }[];
}

export default function TodoList({ list }: Props): JSX.Element {
  return (
    <Container>
      {list &&
        list.map(({ id, task, status }) => (
          <TaskItem key={id} description={task} status={status} />
        ))}
    </Container>
  );
}
