import React from "react";
import { Item, Title } from "./styles";

interface AppProps {
  description: string;
  status: string;
}

export default function TaskItem({
  description,
  status,
}: AppProps): JSX.Element {
  return (
    <Item>
      <Title>{description}</Title>
      <p>{status}</p>
    </Item>
  );
}
