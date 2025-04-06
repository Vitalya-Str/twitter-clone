import { Button, Dialog } from "@mui/material";
import s from "./SideBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearcIcon from "@mui/icons-material/SearchOutlined";
import NotificationIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MessageIcon from "@mui/icons-material/EmailOutlined";
import PeopleIcon from "@mui/icons-material/PeopleAltOutlined";
import ProfileIcon from "@mui/icons-material/PermIdentityOutlined";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
import React from "react";
import { AddTweet } from "../../Tweets/AddTweet";

export const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={s.sideBar}>
      <ul className={s.ulStyle}>
        <Link to="/">
          <XIcon className={s.xIcon} sx={{ fontSize: "40px", paddingLeft: "20px", paddingBottom: "10px" }} />
        </Link>
        <div className={s.wrapperUl}>
          <HomeIcon sx={{ fontSize: "40px" }} />
          <li className={s.listItem}>Home</li>
        </div>
        <div className={s.wrapperUl}>
          <SearcIcon sx={{ fontSize: "40px" }} />
          <li className={s.listItem}>Explore</li>
        </div>
        <div className={s.wrapperUl}>
          <NotificationIcon sx={{ fontSize: "40px" }} />
          <li className={s.listItem}>Notifications</li>
        </div>
        <div className={s.wrapperUl}>
          <MessageIcon sx={{ fontSize: "40px" }} />
          <li className={s.listItem}>Messages</li>
        </div>
        <div className={s.wrapperUl}>
          <PeopleIcon sx={{ fontSize: "40px" }} />
          <li className={s.listItem}>Communities</li>
        </div>

        <div className={s.wrapperUl}>
          <ProfileIcon sx={{ fontSize: "40px" }} />
          <li className={s.listItem}>Profile</li>
        </div>
      </ul>
      <Dialog open={open} onClose={handleClose} fullWidth slotProps={{ paper: { className: s.modal } }}>
        <AddTweet />
      </Dialog>

      <Button
        onClick={handleOpen}
        sx={{
          fontWeight: "700",
          fontSize: "20px",
          bgcolor: "white",
          width: "100%",
          borderRadius: "50px",
          maxWidth: "300px",
          height: "70px",
          color: "black",
        }}
      >
        Post
      </Button>
    </div>
  );
};
