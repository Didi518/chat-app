import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Réinitialiser le Mot de Passe
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Merci d'entrer votre nouveau mot de passe
        </Typography>
      </Stack>
      <NewPasswordForm />
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
    </>
  );
};

export default NewPassword;
