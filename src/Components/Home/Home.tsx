import { alpha, Container, Grid2, InputBase, styled, Typography } from "@mui/material";
import { SideBar } from "./SideBar/SideBar";
import s from "./Home.module.css";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import { Posts } from "../Posts/Posts";
import { Post } from "../Posts/Post";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 100,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginTop: 20,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: "100",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: alpha(theme.palette.common.white, 0.25),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

export const Home = () => {
  return (
    <Container maxWidth={"xl"}>
      <Grid2 container sx={{ justifyContent: "center", alignItems: "flex-start", color: "white" }}>
        <Grid2 sx={{ padding: "10px", color: "white" }} size={3}>
          <SideBar />
        </Grid2>
        <Grid2 sx={{ border: "1px solid rgba(76, 68, 68, 0.3)" }} size={6}>
          <header className={s.containerHeader}>
            <div className={s.headerBox}>
              <Typography variant="h6">For you</Typography>
            </div>
            <div className={s.headerBox}>
              <Typography variant="h6">Following</Typography>
            </div>
          </header>
          <Posts />
          {[...Array(10)].map((__, i) => (
            <Post key={i} />
          ))}
        </Grid2>
        <Grid2 size={3}>
          <div className={s.searchBox}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          </div>
        </Grid2>
      </Grid2>
    </Container>
  );
};
