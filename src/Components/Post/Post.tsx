import { useParams } from "react-router-dom";
import s from "./Post.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { selectPostId, setPostId } from "../../App/Slice/postSlice";
import { useSelector } from "react-redux";
import { Box, colors, IconButton, Typography } from "@mui/material";
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
  }, [dispatch]);

  if (!item) {
    return <h1> Loading</h1>;
  }

  return (
    <>
      <header>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <div>
            <IconButton sx={{ color: "white", paddingLeft: "20px" }}>
              <ArrowIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </div>
          <Typography variant="h2" sx={{ paddingLeft: "40px" }}>
            Post
          </Typography>
        </Box>
      </header>
    </>
  );
};
