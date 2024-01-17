import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";
import { Avatar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "../images/logo1.png";
import { Link } from "react-router-dom";

export default function Login() {
  const paperStyle = {
    padding: 40,
    width: "80%", // Adjusted to make it more responsive
    maxWidth: 400, // Added to set a maximum width
    margin: "70px auto",
  };
  const avatarStyle = { backgroundColor: "#760616" };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper className="paper" elevation={10} style={paperStyle}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h4">Sign In</Typography>
          </Grid>
          <Grid item>
            <img className="logo" src={logo} alt="logo"></img>
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              required
              type="password"
            />
          </Grid>
          <Grid item>
            <Link to="/dashboard">
              <Button
                variant="contained"
                style={{ backgroundColor: "#760616", color: "#fff" }}
                sx={{ width: "80%" }}
              >
                Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
