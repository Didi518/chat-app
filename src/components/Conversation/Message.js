import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  TimeLine,
} from "./MsgTypes";

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine el={el} key={el.id} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el} key={el.id} menu={menu} />;
                case "doc":
                  return <DocMsg el={el} key={el.id} menu={menu} />;
                case "link":
                  return <LinkMsg el={el} key={el.id} menu={menu} />;
                case "reply":
                  return <ReplyMsg el={el} key={el.id} menu={menu} />;

                default:
                  return <TextMsg el={el} key={el.id} menu={menu} />;
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
