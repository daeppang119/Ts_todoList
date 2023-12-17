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
    getTodo: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload;
    },

    postTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item: TodoType): boolean => {
        return item.id !== action.payload;
      });
    },

    patchTodo: (state, action: PayloadAction<number>) => {
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

export const { getTodo, postTodo, deleteTodo, patchTodo } = todosSlice.actions;
// export const selectCount = (state: RootState) => state.counter.value

export default todosSlice.reducer;
