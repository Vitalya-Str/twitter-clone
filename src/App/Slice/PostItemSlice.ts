import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface PostItem {
  _id: string;
  item: {
    fullName: string;
    lastName: string;
    avatarUrl: string;
    post: string;
  };
}

export interface PostsItems {
  items: PostItem[];
}

const initialState: PostsItems = {
  items: [],
};

export const postsItemSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setItemsPost(state, action: PayloadAction<PostItem[]>) {
      state.items = action.payload;
    },
  },
});

export const { setItemsPost } = postsItemSlice.actions;

export const selectPosts = (state: RootState) => state.posts.items;

export default postsItemSlice.reducer;
