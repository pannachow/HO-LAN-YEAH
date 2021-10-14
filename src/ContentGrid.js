import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(3),
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(2),
    },
    media: {
      paddingTop: "100%",
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  })
);

// const activities = [
//   { title: "New Updates", url: "#" },
//   { title: "CBD", url: "#" },
//   { title: "Food & Snacks", url: "#" },
//   { title: "Skincare", url: "#" },
//   { title: "Cosmetics", url: "#" },
// ];

const contents = [
  { title: "De Tuinen Aloe Vera Gel", image: "1.jpg" },
  { title: "ULTRASUN FAMILY SPF 30", image: "2.jpg" },
  { title: "De Tuinen Snail Cream", image: "3.jpeg" },
  { title: "dr. Organic Charcoal Face Mask", image: "4.jpg" },
  { title: "Jacob Hooy Lifting Cure", image: "5.jpg" },
  {
    title: "Royal Green Camu Camu + Vitamin C",
    image: "6.jpg",
  },
];

export default function ContentGrid() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        {/* <Grid item xs={2}>
          {activities.map((activity) => (
            <Typography variant="h6" align="left" gutterBottom>
              {activity.title}
            </Typography>
          ))}
        </Grid> */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {contents.map((content) => (
              <Grid item xs={4}>
                <Card>
                  <CardMedia className={classes.media} image={content.image} />
                  <CardContent>
                    <Typography variant="body2" align="center" gutterBottom>
                      {content.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
