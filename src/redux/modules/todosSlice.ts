import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoType } from "../../types/todoType";

type TodoState = {
  todos: TodoType[];
};

const initialState: TodoState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      // setTodos((prevTodos) => [...prevTodos, newTodo]);
      state.todos.push(action.payload);
    },

    deletTodo: (state, action: PayloadAction<string>) => {
      // setTodos(
      //     todos.filter((item: TodoType) => {
      //       return item.id !== id;
      //     })
      //   );
      state.todos = state.todos.filter((item: TodoType): boolean => {
        return item.id !== action.payload;
      });
    },

    isDoneTodo: (state, action: PayloadAction<string>) => {
      //     setTodos((prevTodos) =>
      //   prevTodos.map((todo) =>
      //     todo.id === id ? { ...todo, isDone: true } : todo
      //   )
      // );
      state.todos = state.todos.map((todo: TodoType): TodoType => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    },
  },
});

export const { addTodo, deletTodo, isDoneTodo } = todosSlice.actions;
// export const selectCount = (state: RootState) => state.counter.value

export default todosSlice.reducer;
