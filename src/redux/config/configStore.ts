import { configureStore } from "@reduxjs/toolkit";
import customModal from "../modules/customModalSlice";
import todo from "../modules/todosSlice";

const store = configureStore({
  reducer: {
    todo,
    customModal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
