import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreIcon from "@mui/icons-material/MoreHorizOutlined";
import ChatIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatIcon from "@mui/icons-material/RepeatOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarIcon from "@mui/icons-material/BarChartOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ReplyIcon from "@mui/icons-material/ReplyAllOutlined";
import { IconButton, Typography } from "@mui/material";
import s from "./Tweet.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FC } from "react";
import { PostItem } from "../../App/Slice/tweetsSlice";

export const Tweet: FC<PostItem> = ({ user, _id, text }) => {
  

  const { fullname, username } = user;

  const navigate = useNavigate();

  return (
    <div className={s.containerPost}>
      <div>
        <AccountIcon sx={{ fontSize: "65px", marginRight: "8px" }} />
      </div>
      <div>
        <div
          onClick={() => {
            navigate(`/post/${_id}`);
          }}
        >
          <div className={s.headerPost}>
            <div className={s.headerPostName}>
              <div>
                <Link className={s.namePost} to="#">
                  <b>{fullname}</b>
                </Link>
              </div>
              <div>
                <Link className={s.nickName} to="#">
                  @{username}
                </Link>
              </div>
            </div>
            <div>
              <IconButton size="small" color="primary" aria-label="...">
                <MoreIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </div>
          </div>
          <Typography sx={{ fontSize: "18px" }}>{text}</Typography>
        </div>

        <div className={s.bottomBox}>
          <div className={s.bottomElem}>
            <ChatIcon sx={{ paddingRight: "5px" }} />
            <span>1</span>
          </div>
          <div className={s.bottomElem}>
            <RepeatIcon sx={{ paddingRight: "5px" }} />
            <span>1</span>
          </div>
          <div className={s.bottomElem}>
            <LikeIcon sx={{ paddingRight: "5px" }} />
            <span>1</span>
          </div>
          <div className={s.bottomElem}>
            <BarIcon sx={{ paddingRight: "5px" }} />
            <span>1</span>
          </div>

          <div className={s.botElem}>
            <div className={s.bookIcon}>
              <BookmarkIcon sx={{ paddingRight: "20px" }} />
            </div>
            <div>
              <ReplyIcon className={s.replyIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
