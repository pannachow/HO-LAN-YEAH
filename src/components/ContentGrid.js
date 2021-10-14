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

export default function ContentGrid(props) {
  const classes = useStyles();
  const category = props.category;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {category.products.map((product) => (
              <Grid item xs={4}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image={category.imagePrefix + product.image}
                  />
                  <CardContent>
                    <Typography variant="body2" align="center" gutterBottom>
                      {product.title}
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
