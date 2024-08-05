import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
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

  return eventDiv;
};
