import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../app/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";
import "../global.css";

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 320, height: "100vh", pb: 15 }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2">Coordonnées</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        <div className="scrollbar" style={{ overflowY: "auto" }}>
          <Stack
            sx={{
              height: "100%",
              position: "relative",
              flewGrow: 1,
            }}
            p={3}
            spacing={3}
          >
            <Stack alignItems={"center"} direction="row" spacing={2}>
              <Avatar
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
                sx={{ height: 64, width: 64 }}
              />
              <Stack spacing={0.5}>
                <Typography variant="article" fontWeight={600}>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {"+336 50 24 67 14"}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="space-evenly"
            >
              <Stack spacing={1} alignItems="center">
                <IconButton>
                  <Phone />
                </IconButton>
                <Typography variant="overline">Audio</Typography>
              </Stack>
              <Stack spacing={1} alignItems="center">
                <IconButton>
                  <VideoCamera />
                </IconButton>
                <Typography variant="overline">Vidéo</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack spacing={0.5}>
              <Typography variant="article">A propos</Typography>
              <Typography variant="body2">Le Ciel est ma Limite</Typography>
            </Stack>
            <Divider />
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="space-between"
            >
              <Typography variant="subtitle2">Réseau, Liens & Docs</Typography>
              <Button endIcon={<CaretRight />}>401</Button>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              {[1, 2, 3].map((el) => (
                <Box>
                  <img src={faker.image.food()} alt={faker.name.fullName()} />
                </Box>
              ))}
            </Stack>
            <Divider />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Star size={21} />
                <Typography variant="subtitle2">Messages Likés</Typography>
              </Stack>
              <IconButton>
                <CaretRight />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Bell size={21} />
                <Typography variant="subtitle2">
                  Désactiver les Notifications
                </Typography>
              </Stack>
              <AntSwitch />
            </Stack>
            <Divider />
            <Typography>1 groupe en commun</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
              <Stack spacing={0.5}>
                <Typography variant="subtitle2">Kevin Kod</Typography>
                <Typography variant="caption">
                  Hibou, Perroquet, Lapin, Toi
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button startIcon={<Prohibit />} fullWidth variant="outlined">
                Bloquer
              </Button>
              <Button startIcon={<Trash />} fullWidth variant="outlined">
                Supprimer
              </Button>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default Contact;
