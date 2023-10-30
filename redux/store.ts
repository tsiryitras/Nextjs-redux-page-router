import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../module/counterSlice";
import userReducer from "../module/userSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
