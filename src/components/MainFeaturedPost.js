import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const MainFeaturedPostRoot = styled(Paper)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[800],
  backgroundImage: "url(banner.jpg)",
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  paddingTop: "100px",
}));

const MainFeaturedPostContent = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
    paddingRight: 0,
  },
}));

const mainFeatured = {
  title: "Living like the way in the Netherlands",
  description: "Whatever happened, always keep smiling.",
  imgText: "main image description",
};

export default function MainFeaturedPost() {
  return (
    <MainFeaturedPostRoot>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        left={0}
        bgcolor="rgba(0,0,0,.3)"
      />
      <Grid container>
        <Grid item md={6}>
          <MainFeaturedPostContent>
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
          </MainFeaturedPostContent>
        </Grid>
      </Grid>
    </MainFeaturedPostRoot>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
