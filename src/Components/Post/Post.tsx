import { Link, useParams } from "react-router-dom";
import s from "./Post.module.css";
import { useEffect } from "react";
import axios from "axios";
import { getPostDetails, selectPostId, setPostDetails } from "../../App/Slice/postSlice";
import { useSelector } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowIcon from "@mui/icons-material/ArrowBackOutlined";
import { Tweet } from "../Tweets/Tweet";
import { useDispatch } from "react-redux";

export const Post = () => {
  const item = useSelector(selectPostId);
  const dispatch = useDispatch();

  const params: { id?: string } = useParams();
  const id = params.id;

  useEffect(() => {
    if (id) {
      //@ts-ignore
      dispatch(getPostDetails(id));
    }
    return () => {
      dispatch(setPostDetails(undefined));
    };
  }, [id]);

  if (!item.post) {
    return null;
  }

  return (
    <>
      <header className={s.headerWrapper}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <div>
            <Link to="/">
              <IconButton sx={{ color: "white", paddingLeft: "20px" }}>
                <ArrowIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Link>
          </div>
          <Typography variant="h2" sx={{ paddingLeft: "40px" }}>
            Post
          </Typography>
        </Box>
      </header>

      <Tweet id={item.post.id} tweet={item.post.tweet} />
    </>
  );
};
