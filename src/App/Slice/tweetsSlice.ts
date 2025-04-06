import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface PostItem {
  id: string;
  tweet: {
    fullName: string;
    lastName: string;
    avatarUrl: string;
    post: string;
  };
}

export interface PostsItems {
  tweets?: PostItem[];
}

const initialState: PostsItems = {};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setItemsPost(state, action: PayloadAction<PostItem[] | undefined>) {
      state.tweets = action.payload;
    },
  },
});

export const { setItemsPost } = tweetsSlice.actions;

export const selectTweets = (state: RootState) => state.tweets.tweets;

export default tweetsSlice.reducer;
