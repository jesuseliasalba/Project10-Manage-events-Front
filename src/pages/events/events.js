import { createEvent } from "../../components/createEvent/createEvent";
import { Header } from "../../components/header/header";
import { listEvents } from "../../components/listEvents/listEvents";
import { createDiv } from "../../utils/functions/createDiv";
import { CreatePage } from "../../utils/functions/createPage";
import "./events.css";

export const Events = () => {
  Header();
  const div = CreatePage("events");

  div.innerHTML = `
    <h2>Eventos:</h2>
  `;

  const divEvents = createDiv("listEventsDiv");

  listEvents(divEvents);

  if (localStorage.getItem("token")) {
    const divCreateEvent = createDiv("createEvent");
    divCreateEvent.innerHTML = `<p>Crear evento</p>`;

    divCreateEvent.addEventListener("click", () => {
      createEvent(div);
    });
    div.append(divCreateEvent);
  }

  div.append(divEvents);
};
