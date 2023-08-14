import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../app/slices/app";
import { CaretLeft } from "phosphor-react";
import "../global.css";
import Message from "./Conversation/Message";

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
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
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Messages Likés</Typography>
          </Stack>
        </Box>
        <div className="scrollbar" style={{ overflowY: "auto" }}>
          <Stack
            sx={{ height: "100%", position: "relative", flexGrow: 1 }}
            p={3}
            spacing={3}
          >
            <Message />
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
