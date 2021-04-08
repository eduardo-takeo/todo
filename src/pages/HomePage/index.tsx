import React from "react";
import { Main } from "./styles";
import TodoList from "../../components/TodoList";

import AddTask from "../../components/AddTask";

export default function HomePage(): JSX.Element {
  return (
    <Main>
      <AddTask />
      <TodoList />
    </Main>
  );
}
