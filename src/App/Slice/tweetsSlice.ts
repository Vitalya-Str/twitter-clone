import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import axios from "axios";

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
    setInputTweet(state, action: PayloadAction<PostItem>) {
      if (state.tweets) {
        state.tweets = [...state.tweets, action.payload];
      } else {
        state.tweets = [action.payload];
      }
    },
  },
});

export const { setItemsPost, setInputTweet } = tweetsSlice.actions;

export const selectTweets = (state: RootState) => state.tweets.tweets;

export const getPostItem = () => {
  return async (dispatch: any) => {
    const data = await axios.get("https://6783e7b58b6c7a1316f60805.mockapi.io/twitterClone/").then((responce) => responce.data);
    dispatch(setItemsPost(data));
  };
};

export const setAddNewPost = (newPost: PostItem) => {
  return async (dispatch: any) => {
    const data = await axios.post("https://6783e7b58b6c7a1316f60805.mockapi.io/twitterClone/", newPost).then((responce) => responce.data);
    dispatch(setInputTweet(data));
  };
};

export default tweetsSlice.reducer;
