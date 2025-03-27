import { configureStore } from "@reduxjs/toolkit";
import postsItemSlice from "./Slice/PostItemSlice";

export const store = configureStore({
  reducer: {
    posts: postsItemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
