import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { PostItem } from "./tweetsSlice";

export interface PostDetails {
  post?: PostItem
}

const initialState: PostDetails = {};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostId(state, action: PayloadAction<PostDetails["post"]>) {
      state.post = action.payload;
    },
  },
});

export const { setPostId } = postSlice.actions;

export const selectPostId = (state: RootState) => state.post;

export default postSlice.reducer;
