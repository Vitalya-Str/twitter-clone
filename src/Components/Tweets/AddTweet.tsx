import { Button, IconButton, Input } from "@mui/material";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import MediaIcon from "@mui/icons-material/BrokenImageOutlined";
import GifIcon from "@mui/icons-material/GifBoxOutlined";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import s from "./AddTweet.module.css";
import { useState } from "react";
import { setAddNewPost } from "../../App/Slice/tweetsSlice";
import { useDispatch } from "react-redux";

const ariaLabel = { "aria-label": "description" };

export const AddTweet = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const setNewPost = () => {
    // @ts-ignore
    dispatch(setAddNewPost(inputValue));
    setInputValue("");
  };

  return (
    <div className={s.postWrapper}>
      <AccountIcon sx={{ fontSize: "65px", marginRight: "8px" }} />
      <div>
        <div>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{ color: "white", fontSize: "30px", padding: "12px 0", width: "100%" }}
            placeholder="What`s happening?"
            inputProps={ariaLabel}
          />
        </div>
        <div className={s.iconWrapper}>
          <div className={s.iconButton}>
            <IconButton color="primary">
              <MediaIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton color="primary">
              <GifIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton color="primary">
              <EmojiIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </div>
          <div>
            <Button
              onClick={() => setNewPost()}
              disabled={!inputValue}
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                bgcolor: "white",
                width: "70px",
                borderRadius: "50px",
                height: "40px",
                color: "black",
              }}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
