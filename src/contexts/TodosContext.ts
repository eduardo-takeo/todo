import { createContext } from "react";

type TodoItem = {
  _id: string;
  task: string;
  status: string;
};

type TodosContextData = {
  todoList: TodoItem[];
  fetchTasks: () => void;
};

export const TodosContext = createContext({} as TodosContextData);
