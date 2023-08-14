import { Link as RouterLink } from "react-router-dom";
import { Button, Container, Link, Stack, Typography } from "@mui/material";
import Logo from "../assets/Images/logo.ico";
import React from "react";

const Page404 = () => {
  return (
    <>
      <Container sx={{ mt: 10 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack
            sx={{ width: "100%" }}
            direction="column"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="h1" color="inherit">
              404
            </Typography>
            <img style={{ height: 120, width: 120 }} src={Logo} alt="logo" />
            <Typography variant="h2">Oooops...</Typography>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 5 }}>
              La page que vous avez demandé n'est pas attribuée, merci de
              réessayer ultérieurement
            </Typography>
            <Link component={RouterLink} to="/app" variant="subtitle2">
              <Button sx={{ mt: 4 }} variant="contained">
                Retour vers App'Chat
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Page404;
