import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../redux/hooks";
import { getTodo, postTodo } from "../redux/modules/todosSlice";
import { TodoType } from "../types/todoType";
import TodoInput from "./TodoInput";

export default function Form() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const dispatch = useAppDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_SERVER}/todos`
      );
      dispatch(getTodo(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = async () => {
    const newTodo: TodoType = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };

    await axios.post(`${process.env.REACT_APP_JSON_SERVER}/todos`, newTodo);

    dispatch(postTodo(newTodo));

    setTitle("");
    setContents("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form
      onSubmit={(e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();

        onSubmitHandler();
      }}
    >
      <TodoInput input={title} setInput={setTitle} />
      <TodoInput input={contents} setInput={setContents} />
      <button type="submit">등록</button>
    </form>
  );
}
