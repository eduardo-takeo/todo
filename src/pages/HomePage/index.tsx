import React from "react";
import { Main } from "./styles";
import TodoList from "../../components/TodoList";

import data from "../../mock/todoList";
import AddTask from "../../components/AddTask";

export default function HomePage(): JSX.Element {
  return (
    <Main>
      <AddTask />
      <TodoList list={data} />
    </Main>
  );
}
