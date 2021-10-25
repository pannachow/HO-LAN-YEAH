import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/log-in" exact>
            <LogIn />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
