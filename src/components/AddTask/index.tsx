import React, { useContext, useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { api } from "../../services/api";
import Button from "../Button";
import Input from "../Input";

import { Container, Title, InputContainer } from "./styles";

export default function AddTask(): JSX.Element {
  const { fetchTasks } = useContext(TodosContext);
  const [task, setTask] = useState<string>("");

  const addNewTask = async () => {
    const body = {
      task,
      status: "active",
    };

    try {
      await api.post("/todos", body);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
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
