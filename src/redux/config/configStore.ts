import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/todosSlice";

const store = configureStore({
  reducer: {
    todo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;