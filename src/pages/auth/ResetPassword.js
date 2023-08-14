import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { CaretLeft } from "phosphor-react";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Mot de Passe Oublié?
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Merci d'entrer l'adresse e-mail associée à votre compte afin que nous
          vous envoyons un lien pour réinitialiser votre mot de passe.
        </Typography>
        <ResetPasswordForm />
        <Link
          component={RouterLink}
          to="/auth/connexion"
          color="inherit"
          variant="subtitle2"
          sx={{
            mt: 3,
            mx: "auto",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <CaretLeft />
          Retour vers la connexion
        </Link>
      </Stack>
    </>
  );
};

export default ResetPassword;
