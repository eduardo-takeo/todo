import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";

import { Container, Title, InputContainer } from "./styles";

// TODO: Move to .env
const API = "http://localhost:3001/api/todos";

export default function AddTask(): JSX.Element {
  const [task, setTask] = useState<string>();

  const addNewTask = async () => {
    const body = {
      task,
      status: "active",
    };

    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };

    await fetch(API, options)
      .then((res) => res.json())
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Title>Add task</Title>
      <InputContainer>
        <Input
          value={task}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTask(e.target.value)
          }
        />
        <Button title="Add" onClick={addNewTask} />
      </InputContainer>
    </Container>
  );
}
