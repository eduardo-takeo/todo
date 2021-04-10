import React, { useState } from "react";
import { Item, Title, IconContainer } from "./styles";

import { ReactComponent as CheckIcon } from "../../assets/checked.svg";
import { ReactComponent as RemoveIcon } from "../../assets/delete.svg";

// TODO: passar para o .env
const API = "http://localhost:3001/api/todos";
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
  const [currentStatus, setCurrentStatus] = useState(status);

  function toggleTaskStatus() {
    setCurrentStatus(
      currentStatus === Status.active ? Status.completed : Status.active
    );
  }

  async function removeTask() {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    await fetch(`${API}/${taskId}`, options)
      // TODO: Dispatch action to update list of tasks
      .then((res) => console.log(`res`, res))
      .catch((error) => console.error(error));
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
