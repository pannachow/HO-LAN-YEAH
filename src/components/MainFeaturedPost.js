import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    backgroundImage: "url(banner.jpg)",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    paddingTop: "100px"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const mainFeatured = {
  title: "Living like the way in the Netherlands",
  description: "Whatever happened, always keep smiling.",
  imgText: "main image description",
};

export default function MainFeaturedPost() {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      <Box position="absolute" top={0} bottom={0} right={0} left={0} bgcolor="rgba(0,0,0,.3)" />
      <Grid container>
        <Grid item md={6}>
          <Box className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {mainFeatured.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {mainFeatured.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {mainFeatured.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
