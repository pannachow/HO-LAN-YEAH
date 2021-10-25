import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

export default function ContentGrid(props) {
  const category = props.category;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {category.products.map((product, i) => (
              <Grid item key={i} xs={4}>
                <Card>
                  <CardMedia
                    sx={{ pt: "100%" }}
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
