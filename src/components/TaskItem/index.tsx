import React from "react";
import { Item, Title } from "./styles";

interface Props {
  description: string;
  status: string;
}

export default function TaskItem({ description, status }: Props): JSX.Element {
  return (
    <Item>
      <Title>{description}</Title>
      <p>{status}</p>
    </Item>
  );
}
