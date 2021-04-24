import React, { useContext, useState } from "react";
import { Item, Title, IconContainer } from "./styles";

import { ReactComponent as CheckIcon } from "../../assets/checked.svg";
import { ReactComponent as RemoveIcon } from "../../assets/delete.svg";
import { api } from "../../services/api";
import { TodosContext } from "../../contexts/TodosContext";
interface Props {
  taskId: string;
  description: string;
  status: string;
}

const Status = {
  active: "active",
  completed: "completed",
};

export default function TaskItem({
  taskId,
  description,
  status,
}: Props): JSX.Element {
  const { fetchTasks } = useContext(TodosContext);
  const [currentStatus, setCurrentStatus] = useState(status);

  function toggleTaskStatus() {
    const { active, completed } = Status;

    setCurrentStatus(currentStatus === active ? completed : active);
  }

  async function removeTask() {
    try {
      await api.delete(`/todos/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Item>
      <Title status={currentStatus}>{description}</Title>
      <IconContainer>
        <CheckIcon
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          onClick={() => toggleTaskStatus()}
        />
        <RemoveIcon
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          onClick={removeTask}
        />
      </IconContainer>
    </Item>
  );
}
