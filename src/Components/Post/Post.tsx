import { Link, useParams } from "react-router-dom";
import s from "./Post.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { selectPostId, setPostId } from "../../App/Slice/postSlice";
import { useSelector } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowIcon from "@mui/icons-material/ArrowBackOutlined";

export const Post = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectPostId);

  const params = useParams();

  useEffect(() => {
    const id = params.id;

    axios.get(`https://6783e7b58b6c7a1316f60805.mockapi.io/twitterClone/${id}`).then((responce) => {
      dispatch(setPostId(responce.data));
    });
  }, [dispatch, params.id]);

  return (
    <>
      <header>
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
      {item.post?.tweet.post}
    </>
  );
};
