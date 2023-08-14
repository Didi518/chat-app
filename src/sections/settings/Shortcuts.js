import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
  {
    key: 0,
    title: "Marqué comme non lu",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 1,
    title: "Désactiver",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    key: 2,
    title: "Historique des Chats",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    key: 3,
    title: "Supprimer un Chat",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    key: 4,
    title: "Epingler Chat",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    key: 5,
    title: "Rechercher",
    combination: ["Cmd", "F"],
  },
  {
    key: 6,
    title: "Rechercher un Chat",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    key: 7,
    title: "Chat Suivant",
    combination: ["Cmd", "N"],
  },
  {
    key: 8,
    title: "Etape Suivante",
    combination: ["Ctrl", "Tab"],
  },
  {
    key: 9,
    title: "Etape Précédente",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "Nouveau Groupe",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    key: 11,
    title: "Profil & Infos",
    combination: ["Cmd", "P"],
  },
  {
    key: 12,
    title: "Augmenter la vitesse du message vocal",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Ralentir la vitesse du message vocal",
    combination: ["Shift", ","],
  },
  {
    key: 14,
    title: "Paramètres",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Panneau des Emojis",
    combination: ["Cmd", "E"],
  },
  {
    key: 16,
    title: "Panneau des Stickers",
    combination: ["Cmd", "S"],
  },
];

const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        keepMounted
        TransitionComponent={Transition}
        sx={{ p: 4 }}
      >
        <DialogTitle>Raccourcis Clavier</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {list.map(({ key, title, combination }) => (
              <>
                <Grid item xs={6} container>
                  <Stack
                    key={key}
                    sx={{ width: "100%" }}
                    justifyContent="space-between"
                    spacing={3}
                    direction="row"
                    alignItems="center"
                  >
                    <Typography variant="caption" sx={{ fontSize: 14 }}>
                      {title}
                    </Typography>
                    <Stack spacing={2} direction="row">
                      {combination.map((el) => {
                        return (
                          <Button
                            disabled
                            variant="contained"
                            sx={{ color: "#212121" }}
                          >
                            {el}
                          </Button>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Grid>
              </>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
