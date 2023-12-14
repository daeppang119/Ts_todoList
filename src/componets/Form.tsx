import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/modules/todosSlice";
import { TodoType } from "../types/todoType";
import TodoInput from "./TodoInput";

export default function Form() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTodo: TodoType = {
          id: uuidv4(),
          title,
          contents,
          isDone: false,
        };

        // setTodos((prevTodos) => [...prevTodos, newTodo]);
        dispatch(addTodo(newTodo));
      }}
    >
      <TodoInput input={title} setInput={setTitle} />
      <TodoInput input={contents} setInput={setContents} />
      <button type="submit">등록</button>
    </form>
  );
}
