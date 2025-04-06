import { useDispatch, useSelector } from "react-redux";
import { selectTweets, setItemsPost } from "../../App/Slice/tweetsSlice";
import { useEffect } from "react";
import axios from "axios";
import { Tweet } from "../Tweets/Tweet";
import { AddTweet } from "../Tweets/AddTweet";
import Typography from "@mui/material/Typography";
import s from "./Home.module.css";

export const Home = () => {
  const tweets = useSelector(selectTweets);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://6783e7b58b6c7a1316f60805.mockapi.io/twitterClone/").then((responce) => {
      dispatch(setItemsPost(responce.data));
    });
  }, [dispatch]);

  if (!tweets) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <header className={s.containerHeader}>
        <div className={s.headerBox}>
          <Typography variant="h6">For you</Typography>
        </div>
        <div className={s.headerBox}>
          <Typography variant="h6">Following</Typography>
        </div>
      </header>
      <AddTweet />
      {tweets.map((tweet, i) => (
        <Tweet key={i} {...tweet} />
      ))}
    </>
  );
};
