import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postTodo } from "../api/todos";
// import { postTodo } from "../redux/modules/todosSlice";
import { TodoType } from "../types/todoType";
import TodoInput from "./TodoInput";

export default function Form() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation("todos", postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onSubmitHandler = async () => {
    try {
      const newTodo: TodoType = {
        id: Date.now(),
        title,
        contents,
        isDone: false,
      };
      mutate(newTodo);

      setTitle("");
      setContents("");
    } catch (error) {
      console.log(error);
    }
  };

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
