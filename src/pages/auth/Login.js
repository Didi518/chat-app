import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Connection à App'Chat</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Nouvel Utilisateur?</Typography>
          <Link
            to="/auth/inscription"
            component={RouterLink}
            variant="subtitle2"
          >
            Créez votre compte
          </Link>
        </Stack>
        <LoginForm />
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
