import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { PostItem } from "./tweetsSlice";
import axios from "axios";

export interface PostDetails {
  post?: PostItem;
}

const initialState: PostDetails = {
  post: {
    id: "",
    tweet: {
      fullName: "",
      lastName: "",
      avatarUrl: "",
      post: "",
    },
  },
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostDetails(state, action: PayloadAction<PostDetails["post"] | undefined>) {
      state.post = action.payload;
    },
  },
});

export const { setPostDetails } = postSlice.actions;

export const selectPostId = (state: RootState) => state.post;

export const getPostDetails = (id: string) => {
  return async (dispatch: any) => {
    const data = await axios.get(`https://6783e7b58b6c7a1316f60805.mockapi.io/twitterClone/${id}`).then((responce) => {
      return responce.data;
    });
    dispatch(setPostDetails(data));
  };
};

export default postSlice.reducer;
