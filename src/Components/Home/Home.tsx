import { Grid2, IconButton, TextField, Typography } from "@mui/material";
import { SideBar } from "./SideBar/SideBar";
import s from "./Home.module.css";

import { Posts } from "../Posts/Posts";
import { Post } from "../Posts/Post";

export const Home = () => {
  return (
    <div>
      <Grid2 container sx={{ bgcolor: "black", justifyContent: "center", alignItems: "center", color: "white" }}>
        <Grid2 sx={{ height: "100vh", padding: "10px", color: "white" }} size={{ xs: 3 }}>
          <SideBar />
        </Grid2>
        <Grid2 sx={{ border: "1px solid rgba(76, 68, 68, 0.3)" }} size={{ xs: 5 }}>
          <header className={s.containerHeader}>
            <div className={s.headerBox}>
              <Typography variant="h6">For you</Typography>
            </div>
            <div className={s.headerBox}>
              <Typography variant="h6">Following</Typography>
            </div>
          </header>
          <Posts />
          {[...Array(6)].map((__, i) => (
            <Post key={i} />
          ))}
        </Grid2>
        <Grid2 sx={{ height: "100vh" }} size={{ xs: 3 }}></Grid2>
      </Grid2>
    </div>
  );
};
