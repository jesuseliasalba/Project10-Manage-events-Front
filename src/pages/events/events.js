import { Header } from "../../components/header/header";
import { listEvents } from "../../components/listEvents/listEvents";
import { createDiv } from "../../utils/functions/createDiv";
import { CreatePage } from "../../utils/functions/createPage";
import "./events.css";

export const Events = () => {
  Header();
  const div = CreatePage("events");
  const eventsList = createDiv("eventsList");
  listEvents(eventsList);
  const eventCard = createDiv("eventCard");

  div.append(eventsList);
  div.append(eventCard);
};
