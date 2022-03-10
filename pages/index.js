import { useState } from "react";
import AppBar from "@mui/material/AppBar";

import { createTheme, ThemeProvider, Toolbar } from "@mui/material";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <PhotoCamera sx={{ m: 2 }} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip lorem ipsum dolor sit amet, consectetur
              adip lorem ipsum dolor sit amet, consectetur adip
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}
