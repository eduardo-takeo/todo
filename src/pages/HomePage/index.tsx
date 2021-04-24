import React, { useEffect, useState } from "react";
import { Main } from "./styles";
import TodoList from "../../components/TodoList";

import AddTask from "../../components/AddTask";
import { TodosContext } from "../../contexts/TodosContext";
import { api } from "../../services/api";

export default function HomePage() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/todos");
      setTodoList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TodosContext.Provider value={{ todoList, fetchTasks }}>
      <Main>
        <AddTask />
        <TodoList />
      </Main>
    </TodosContext.Provider>
  );
}
