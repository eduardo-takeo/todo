import React, { useEffect } from "react";
import { Container } from "./styles";
import TaskItem from "../TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/ducks/todoList";

interface TodoState {
  todoList: TodoItem[];
}
interface TodoItem {
  _id: string;
  task: string;
  status: string;
}

export default function TodoList(): JSX.Element {
  const todoList = useSelector((state: TodoState) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <Container>
      {todoList.length > 0 &&
        todoList.map(({ _id, task, status }) => (
          <TaskItem key={_id} taskId={_id} description={task} status={status} />
        ))}
    </Container>
  );
}
