import { useDispatch } from "react-redux";
import { deletTodo, isDoneTodo } from "../redux/modules/todosSlice";
import { TodoType } from "../types/todoType";

type TodoListProps = {
  todos: TodoType[];

  isDone: boolean;
};

export default function TodoList({ todos, isDone }: TodoListProps) {
  const dispatch = useDispatch();

  const isDoneBtn = (id: string) => {
    // setTodos((prevTodos) =>
    //   prevTodos.map((todo) =>
    //     todo.id === id ? { ...todo, isDone: true } : todo
    //   )
    // );
    dispatch(isDoneTodo(id));
  };

  const deletBtn = (id: string) => {
    // return setTodos(
    //   todos.filter((item: TodoType) => {
    //     return item.id !== id;
    //   })
    // );
    dispatch(deletTodo(id));
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
