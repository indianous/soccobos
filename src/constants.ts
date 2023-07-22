import { TwitterLogo } from "@phosphor-icons/react";
import React from "react";

type Route = {
  url: string;
  text: string;
};

type SocialMedia = {
  url: string;
  text: string;
};

const aboutContent = { content: "" };
const routes: Route[] = [
  { text: "Loja", url: "/store" },
  { text: "Blog", url: "/blog" },
  { text: "Jogos", url: "/games" },
  { text: "Privacidade", url: "/privacity" },
  { text: "Sobre", url: "/about" },
  { text: "Ajuda", url: "/help" },
];
const copyrightText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
consequuntur amet culpa cum itaque neque.`;
const socialMedias: SocialMedia[] = [
  { text: "Facebook", url: "/" },
  { text: "Twitter", url: "/" },
  { text: "Instagram", url: "/" },
];

export { aboutContent, routes, copyrightText, socialMedias };
