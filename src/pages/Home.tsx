import Form from "../componets/Form";
import TodoList from "../componets/TodoList";

function Home() {
  return (
    <>
      <Form />
      <div>
        ToDo
        <TodoList isDone={false} />
        <hr />
        Done
        <TodoList isDone={true} />
      </div>
    </>
  );
}

export default Home;
