import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(4),
  },
}));

const mainFeaturedPost = {
  title: "Living like the way in the Netherlands",
  description: "Whatever happened, always keep smiling.",
  image: "banner.jpg",
  imgText: "main image description",
};

const featuredPosts = [
  {
    title: "Tulip Festival Amsterdam",
    date: "Apr 12",
    description: "The perfect tulip experience in Amsterdam",
    image: "tulip.jpeg",
  },
  {
    title: "Culture Trip",
    date: "Nov 11",
    description: "The Best of Food Culture in Amsterdam, The Netherlands",
    image: "waffel.jpg",
  },
];

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4} className={classes.mainGrid} >
            {featuredPosts.map((post) => (
              <FeaturedPost post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
