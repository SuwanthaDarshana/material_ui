import React from "react";

import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import { Grid } from "@mui/material";
import { Feed } from "@mui/icons-material";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid sm={2}><Leftbar/></Grid>
        <Grid sm={7}><Feed/></Grid>
        <Grid sm={12}><Rightbar/></Grid>
      </Grid>
    </div>
  );
}

export default App;
