import { Grid2 } from "@mui/material";
import { SideBar } from "./SideBar/SideBar";

export const Home = () => {
  return (
    <Grid2 container sx={{ bgcolor: "black", justifyContent: "center", alignItems: "center", color: "white" }}>
      <Grid2 sx={{ padding: "10px", height: "100vh", color: "white" }} size={{ xs: 3 }}>
        <SideBar />
      </Grid2>
      <Grid2 sx={{ height: "100vh" }} size={{ xs: 6 }}>
        <div>xs=2 </div>
      </Grid2>
      <Grid2 sx={{ height: "100vh" }} size={{ xs: 3 }}>
        <div>xs=3 </div>
      </Grid2>
    </Grid2>
  );
};
