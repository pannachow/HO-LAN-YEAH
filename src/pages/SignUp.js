import React, { useState } from "react";
import { withRouter } from "react-router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Copyright from "../components/Copyright";

function SignUp(props) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit2(event) {
    event.preventDefault();
    const ok = await props.register(first_name, last_name, email, password);
    if (ok) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      props.history.push("/welcome");
    } else {
      props.history.push("/welcome-back");
    }
  }

  const background = {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: -1,
  };

  return (
    <>
      <br />
      <Container component="main" maxWidth="xs">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <ValidatorForm sx={{ width: "100%", mt: 3 }} onSubmit={handleSubmit2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="first_name"
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="last_name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={email}
                  id="email"
                  // autoComplete="email"
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={password}
                  id="password"
                  label="Password"
                  type="password"
                  // autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ pt: 3, pb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link href="#" variant="body2"> */}
                <Link
                  color="secondary"
                  underline="none"
                  component={RouterLink}
                  to="/log-in"
                >
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Box>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      <img src="sign-up.jpeg" alt="background" style={background} />
    </>
  );
}

export default withRouter(SignUp);
