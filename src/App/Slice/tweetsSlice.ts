import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { axios } from "../../core/axios";

export interface PostItem {
  _id: string;
  user: {
    _id: string;
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
}

export interface PostsItems {
  tweets?: PostItem[];
}

const initialState: PostsItems = {};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setItemsPost(state, action: PayloadAction<PostItem[]>) {
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
    const data = await axios.get("/tweet").then((responce) => responce.data);

    dispatch(setItemsPost(data.data));
  };
};

export const setAddNewPost = (newPost: string) => {
  return async (dispatch: any) => {
    const data = await axios
      .post("/tweet", {
        text: newPost,
      })
      .then((responce) => responce.data);
    dispatch(setInputTweet(data.data));
  };
};

export default tweetsSlice.reducer;
