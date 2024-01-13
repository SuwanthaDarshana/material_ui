import React from "react";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { AppBar, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">
          CyberDog
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default App;
