import Form from "../componets/Form";
import TodoList from "../componets/TodoList";
import { useAppSelector } from "../redux/hooks";

function Home() {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <>
      <Form />
      <div>
        ToDo
        <TodoList todos={todos} isDone={false} />
        <hr />
        Done
        <TodoList todos={todos} isDone={true} />
      </div>
    </>
  );
}

export default Home;
