import React, { useState } from "react";
import { withRouter } from "react-router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Copyright from "../components/Copyright";

const GridItemImage = styled(Grid)(({ theme }) => ({
  backgroundImage: "url(./login.jpeg)",
  backgroundRepeat: "no-repeat",
  backgroundColor:
    theme.palette.type === "light"
      ? theme.palette.grey[50]
      : theme.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const ok = await props.login(email, password);
    if (ok) {
      setEmail("");
      setPassword("");
      props.history.push("/users/:userId/profile");
    }
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <GridItemImage item xs={false} sm={4} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          my={8}
          mx={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          {props.error && <div>{props.error}</div>}
          <ValidatorForm sx={{ width: "100%", mt: 1 }} onSubmit={handleSubmit}>
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ pt: 3, pb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  color="secondary"
                  underline="none"
                  component={RouterLink}
                  to="/sign-up"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </ValidatorForm>
        </Box>
      </Grid>
    </Grid>
  );
}

export default withRouter(Login);
