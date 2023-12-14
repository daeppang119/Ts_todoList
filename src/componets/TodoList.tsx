import { TodoType } from "../types/todoType";

type TodoListProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  isDone: boolean;
};

export default function TodoList({ todos, setTodos, isDone }: TodoListProps) {
  const isDoneBtn = (id: string) => {
    // const newToDos = todos?.map((item: TodoType) => {
    //   if (item.id !== id) {
    //     return item;
    //   } else {
    //     return { ...item, isDone: !item.isDone };
    //   }
    // }) as TodoType[];

    // setTodos(newToDos);
    /**
     * 아래는 참고
     */
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  const deletBtn = (id: string) => {
    return setTodos(
      todos.filter((item: TodoType) => {
        return item.id !== id;
      })
    );
  };

  return (
    <ul>
      {todos
        .filter((todo: TodoType) => {
          return todo.isDone === isDone;
        })
        .map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.contents}</p>
              <button onClick={() => isDoneBtn(todo.id)}>
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
  );
}
