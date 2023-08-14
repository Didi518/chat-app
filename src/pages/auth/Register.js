import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

const Register = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">Commencez avec App'Chat</Typography>
      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">Déjà inscrit?</Typography>
        <Link component={RouterLink} to="/auth/connexion" variant="subtitle2">
          Connexion
        </Link>
      </Stack>
      <RegisterForm />
      <Typography
        component={"div"}
        sx={{
          color: "text.secondary",
          mt: 3,
          typography: "caption",
          textAlign: "center",
        }}
      >
        {"En m'inscrivant, j'accepte les "}
        <Link underline="always" color="text.primary">
          Conditions d'utlisation
        </Link>
        {" et la "}
        <Link underline="always" color="text.primary">
          Politique de confidentialité
        </Link>
      </Typography>
      <AuthSocial />
    </Stack>
  );
};

export default Register;
