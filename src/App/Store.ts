import { configureStore } from "@reduxjs/toolkit";
import tweetsSlice from "./Slice/tweetsSlice";

export const store = configureStore({
  reducer: {
    tweets: tweetsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
