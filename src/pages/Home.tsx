import { useState } from "react";

import Form from "../componets/Form";
import TodoList from "../componets/TodoList";
import { TodoType } from "../types/todoType";

function Home() {
  const initalState: TodoType[] = [
    {
      id: "1",
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: "2",
      title: "제목1",
      contents: "내용2",
      isDone: true,
    },
    {
      id: "3",
      title: "제목1",
      contents: "내용3",
      isDone: false,
    },
    {
      id: "4",
      title: "제목1",
      contents: "내용4",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState<TodoType[]>(initalState);

  return (
    <>
      <Form setTodos={setTodos} />
      <div>
        ToDo
        <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        Done
        <TodoList todos={todos} setTodos={setTodos} isDone={true} />
      </div>
    </>
  );
}

export default Home;
