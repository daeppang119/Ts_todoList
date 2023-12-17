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
  // 이부분은 json-server에게 내가 보내는 todo.id를 가진 애를 찾아라
  //1702814089975 1702814098450
  //`${process.env.REACT_APP_JSON_SERVER}/todos/1702814098450`
  // json-server id가 1702814098450인 이놈을 찾아온다!
  // 찾아온 id가 1702814098450인  이놈의 내용중에 { isDone: todo.isDone, } 이거 안에 내용을 덮어쓴다.
  await axios.patch(`${process.env.REACT_APP_JSON_SERVER}/todos/${todo.id}`, {
    isDone: !todo.isDone,
  });
};
