import React from "react";
import Button from "../Button";
import Input from "../Input";

import { Container, Title, InputContainer } from "./styles";

export default function AddTask(): JSX.Element {
  return (
    <Container>
      <Title>Add task</Title>
      <InputContainer>
        <Input />
        <Button title="Add" />
      </InputContainer>
    </Container>
  );
}
