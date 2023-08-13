import React from "react";

import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import "../../global.css";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header />
      <div className="scrollbar" style={{ overflowY: "auto" }}>
        <Box width={"100%"} sx={{ flexGrow: 1, height: "100%" }}>
          <Message />
        </Box>
      </div>
      <Footer />
    </Stack>
  );
};

export default Conversation;
