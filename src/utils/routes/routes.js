import { Events } from "../../pages/events/events";
import { Home } from "../../pages/home/home";

export const routes = [
  {
    path: "/",
    text: "Home",
    page: Home,
  },
  {
    path: "/events",
    text: "Eventos",
    page: Events,
  },
];
