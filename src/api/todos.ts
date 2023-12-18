import axios from "axios";
import { TodoType } from "../types/todoType";

export const getTodos = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_JSON_SERVER}/todos`
  );

  return response.data;
};

export const postTodo = async (newTodo: TodoType) => {
  await axios.post(`${process.env.REACT_APP_JSON_SERVER}/todos`, newTodo);
};

export const deleteTodo = async (id: number) => {
  await axios.delete(`${process.env.REACT_APP_JSON_SERVER}/todos/${id}`);
};

export const patchTodo = async (todo: TodoType) => {
  await axios.patch(`${process.env.REACT_APP_JSON_SERVER}/todos/${todo.id}`, {
    isDone: !todo.isDone,
  });
};
