import { configureStore } from "@reduxjs/toolkit";
import tweetsSlice from "./Slice/tweetsSlice";
import { postSlice } from "./Slice/postSlice";

export const store = configureStore({
  reducer: {
    tweets: tweetsSlice,
    post: postSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
