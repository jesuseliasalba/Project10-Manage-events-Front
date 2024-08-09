import { Header } from "../../components/header/header";
import { listEvents } from "../../components/listEvents/listEvents";
import { CreatePage } from "../../utils/functions/createPage";
import "./events.css";

export const Events = () => {
  Header();
  const div = CreatePage("events");
  listEvents(div);
};
