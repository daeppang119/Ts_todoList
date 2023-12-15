import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, getTodo, patchTodo } from "../redux/modules/todosSlice";
import { TodoType } from "../types/todoType";

type TodoListProps = {
  todos: TodoType[];
  isDone: boolean;
};

export default function TodoList({ todos, isDone }: TodoListProps) {
  const dispatch = useDispatch();

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

  const isDoneBtn = async (id: string) => {
    axios.patch(`${process.env.REACT_APP_JSON_SERVER}/todos/${id}`, {
      isDone: !isDone,
    });

    dispatch(patchTodo(id));
  };

  const deletBtn = async (id: string) => {
    axios.delete(`${process.env.REACT_APP_JSON_SERVER}/todos/${id}`);

    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {todos
        .filter((todo: TodoType) => {
          return todo.isDone === isDone;
        })
        .map((todo) => {
          return (
            <div key={todo.id}>
              <li>
                <p>{todo.title}</p>
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
              <br />
            </div>
          );
        })}
    </ul>
  );
}
