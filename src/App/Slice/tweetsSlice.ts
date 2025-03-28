import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface PostItem {
  _id: string;
  tweet: {
    fullName: string;
    lastName: string;
    avatarUrl: string;
    post: string;
  };
}

export interface PostsItems {
  tweets: PostItem[];
}

const initialState: PostsItems = {
  tweets: [],
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setItemsPost(state, action: PayloadAction<PostItem[]>) {
      state.tweets = action.payload;
    },
  },
});

export const { setItemsPost } = tweetsSlice.actions;

export const selectPosts = (state: RootState) => state.tweets.tweets;

export default tweetsSlice.reducer;
