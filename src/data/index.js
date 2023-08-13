import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";

const Profile_Menu = [
  {
    id: 0,
    title: "Profil",
    icon: <User />,
  },
  {
    id: 1,
    title: "Paramètres",
    icon: <Gear />,
  },
  { id: 2, title: "Profil", icon: <SignOut /> },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    id: 0,
    type: "msg",
    message: "Hey 👋🏻, Comment tu vas ? ?",
    incoming: true,
    outgoing: false,
  },
  { id: 1, type: "divider", text: "Aujourd'hui" },
  {
    id: 2,
    type: "msg",
    message: "Hello 👋 Panda, pas mal et toi ?",
    incoming: false,
    outgoing: true,
  },
  {
    id: 3,
    type: "msg",
    message: "Peux-tu m'envoyer ton image abstraite?",
    incoming: false,
    outgoing: true,
  },
  {
    id: 4,
    type: "msg",
    message: "Ouep, je te passe l'image",
    incoming: true,
    outgoing: false,
  },

  {
    id: 5,
    type: "msg",
    subtype: "img",
    message: "La Voilà!",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    id: 6,
    type: "msg",
    message: "Tu veux bien m'envoyer le format du fichier?",
    incoming: false,
    outgoing: true,
  },

  {
    id: 7,
    type: "msg",
    subtype: "doc",
    message: "Ouep, si tu veux. Le voilà.",
    incoming: true,
    outgoing: false,
  },
  {
    id: 8,
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yes je peux aussi faire ça",
    incoming: true,
    outgoing: false,
  },
  {
    id: 9,
    type: "msg",
    subtype: "reply",
    reply: "C'est une réponse",
    message: "Yes je peux aussi faire ça",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Répondre",
  },
  {
    title: "Réagir au message",
  },
  {
    title: "Transférer le message",
  },
  {
    title: "Apprécier le message",
  },
  {
    title: "Signaler",
  },
  {
    title: "Supprimer le message",
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
};
