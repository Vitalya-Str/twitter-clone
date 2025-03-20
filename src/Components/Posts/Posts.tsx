import { Button, IconButton, Input } from "@mui/material";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import MediaIcon from "@mui/icons-material/BrokenImageOutlined";
import GifIcon from "@mui/icons-material/GifBoxOutlined";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import s from "./Posts.module.css";

const ariaLabel = { "aria-label": "description" };

export const Posts = () => {
  return (
    <div className={s.postWrapper}>
      <AccountIcon sx={{ fontSize: "65px", marginRight: "8px" }} />
      <div>
        <div>
          <Input sx={{ color: "white", fontSize: "30px", padding: "12px 0", width: "100%" }} placeholder="What`s heppening?" inputProps={ariaLabel} />
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
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                bgcolor: "white",
                width: "70px",
                borderRadius: "50px",
                height: "40px",
                color: "black",
              }}
              href="#contained-buttons"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
