import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "../types/todoType";

function Home() {
  const initalState: TodoType[] = [
    {
      id: "1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: "2",
      contents: "내용2",
      isDone: true,
    },
    {
      id: "3",
      contents: "내용3",
      isDone: false,
    },
    {
      id: "4",
      contents: "내용4",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState<TodoType[]>(initalState);
  const [contents, setContents] = useState<string>("");

  const id = uuidv4();

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
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          const newTodo: TodoType = {
            id,
            contents,
            isDone: false,
          };

          setTodos((prevTodos) => [...prevTodos, newTodo]);
        }}
      >
        <input
          type="text"
          value={contents}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setContents(e.target.value);
          }}
        />
        <button>등록</button>
      </form>
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
      </div>
    </>
  );
}

export default Home;
