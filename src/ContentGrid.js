import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  })
);

const activities = [
  { title: "A", url: "#" },
  { title: "B", url: "#" },
  { title: "C", url: "#" },
  { title: "D", url: "#" },
  { title: "E", url: "#" },
];
export default function ContentGrid() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" gutterBottom align="center">
        最新商品
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="h6" align="center" gutterBottom>
            優惠活動
          </Typography>

          {activities.map((activity) => (
            <Typography variant="h6" align="center" gutterBottom>
              {activity.title}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="snacks.jpg"
                  title="Paella dish"
                />
              </Paper>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="snacks.jpg"
                  title="Paella dish"
                />
              </Paper>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="snacks.jpg"
                  title="Paella dish"
                />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="snacks.jpg"
                  title="Paella dish"
                />
              </Paper>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="snacks.jpg"
                  title="Paella dish"
                />
              </Paper>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="snacks.jpg"
                  title="Paella dish"
                />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="snacks.jpg"
                  title="Paella dish"
                />
              </Paper>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="snacks.jpg"
                  title="Paella dish"
                />
              </Paper>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image="snacks.jpg"
                  title="Paella dish"
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
