import { useState } from "react";

import Form from "../componets/Form";
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

  const isDoneBtn = (id: string) => {
    const newToDos = todos?.map((item: TodoType) => {
      if (item.id !== id) {
        return {
          ...item,
        };
      }
    }) as TodoType[];

    setTodos(newToDos);
  };

  const deletBtn = (id: string) => {
    return setTodos(
      todos.filter((item: TodoType) => {
        return item.id !== id;
      })
    );
  };

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <div>
        ToDo
        <ul>
          {todos
            .filter((todo) => {
              return todo.isDone === false;
            })
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <p>{todo.contents}</p>
                  <button
                    onClick={() => {
                      isDoneBtn(todo.id);
                    }}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                  <button
                    onClick={() => {
                      deletBtn(todo.id);
                    }}
                  >
                    삭제
                  </button>
                </li>
              );
            })}
        </ul>
        Done
        <ul>
          {todos
            .filter((todo) => {
              return todo.isDone === true;
            })
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <p>{todo.contents}</p>
                  <button
                    onClick={() => {
                      isDoneBtn(todo.id);
                    }}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                  <button
                    onClick={() => {
                      deletBtn(todo.id);
                    }}
                  >
                    삭제
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default Home;
