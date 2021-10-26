import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <Box component="footer" mt={8} py={6} bgcolor="background.paper">
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          HO LAN YEAH
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
