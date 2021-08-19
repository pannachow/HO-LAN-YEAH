import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import Footer from "./Footer";
import ContentGrid from "./ContentGrid";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <MainFeaturedPost />
          <ContentGrid />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
