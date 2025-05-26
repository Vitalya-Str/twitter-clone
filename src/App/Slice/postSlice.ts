import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { PostItem } from "./tweetsSlice";
import { axios } from "../../core/axios";

export interface PostDetails {
  post?: PostItem;
}

const initialState: PostDetails = {
  post: {
    _id: "",
    user: {
      _id: "",
      fullname: "",
      username: "",
      avatarUrl: "",
    },
    text: "",
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

export const selectPostId = (state: RootState) => state.post.post;

export const getPostDetails = (id: string) => {
  return async (dispatch: any) => {
    const data = await axios.get("/tweet/" + id).then((responce) => {
      return responce.data;
    });
    dispatch(setPostDetails(data.data));
  };
};

export default postSlice.reducer;
