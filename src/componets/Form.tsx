import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "../types/todoType";
import TodoInput from "./TodoInput";

type FormProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const id = uuidv4();

export default function Form({ todos, setTodos }: FormProps) {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTodo: TodoType = {
          id,
          title,
          contents,
          isDone: false,
        };

        setTodos((prevTodos) => [...prevTodos, newTodo]);
      }}
    >
      <TodoInput input={title} setInput={setTitle} />
      <TodoInput input={contents} setInput={setContents} />
      <button>등록</button>
    </form>
  );
}
