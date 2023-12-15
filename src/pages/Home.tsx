import axios from "axios";
import { useEffect } from "react";
import Form from "../componets/Form";
import TodoList from "../componets/TodoList";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getTodo } from "../redux/modules/todosSlice";

function Home() {
  const todos = useAppSelector((state) => state.todo.todos);

  const dispatch = useAppDispatch();

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

  useEffect(() => {
    fetchData();
  }, []);

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
