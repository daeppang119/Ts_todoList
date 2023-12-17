import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteTodo, getTodos, patchTodo } from "../api/todos";
import { TodoType } from "../types/todoType";

type TodoListProps = {
  isDone: boolean;
};

export default function TodoList({ isDone }: TodoListProps) {
  const queryClient = useQueryClient();

  const { isLoading, isError, data } = useQuery("todos", getTodos, {
    staleTime: Infinity,
  });

  // update mutation~~
  const { mutate: updateMutate } = useMutation("todos", patchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  // delete mutation~~
  const { mutate: deleteMutate } = useMutation("todos", deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  // 지금 ToDo
  // 1. update -> isDone 바꿀꺼야!
  const isDoneBtn = async (todo: TodoType) => {
    updateMutate(todo);
  };

  // 2. delete -> todo 하나를 지울꺼야!
  const deletBtn = async (id: number) => {
    deleteMutate(id);
  };

  return (
    <ul>
      {data
        ?.filter((todo: TodoType) => {
          return todo.isDone === isDone;
        })
        .map((todo: TodoType) => {
          return (
            <div key={todo.id}>
              <li>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <button onClick={() => isDoneBtn(todo)}>
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
