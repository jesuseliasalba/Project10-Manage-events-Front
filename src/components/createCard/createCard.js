import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import { Button } from "../button/button";
import { EventPage } from "../EventPage/EventPage";
import "./createCard.css";

export const createCard = (event) => {
  const eventDiv = createDiv("event");
  const img = createImg({
    src: event.img,
    alt: `Evento ${event.title}`,
  });

  const divContent = createDiv("eventContent");
  const title = document.createElement("h3");
  title.textContent = event.title;

  const p = document.createElement("p");
  p.textContent = event.description;

  divContent.append(title);
  divContent.append(p);

  eventDiv.append(img);
  eventDiv.append(divContent);

  const ButtonEvent = Button({
    text: "Mas información",

    fn: (e) => {
      EventPage(event._id);
    },
    addClass: "ButtonEvent",
  });

  eventDiv.append(ButtonEvent);

  return eventDiv;
};
