import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import { Button } from "../../components/button/button";
import "./EventPage.css";
import { assistants } from "../assistants/assistants";

export const EventPage = async (e) => {
  const event = e.event;

  localStorage.setItem("eventSelected", e.event._id);

  const eventPage = createDiv("eventShow");
  const eventdiv = createDiv("eventShowDiv");

  const coverDiv = createDiv("coverDiv");
  const cover = createImg({
    src: event.img,
    alt: `Portada de ${event.title}`,
  });

  coverDiv.append(cover);

  const infoDiv = createDiv("infoDiv");

  const eventDate = new Date(event.date);

  infoDiv.innerHTML = `
    <h2> ${event.title} </h2>
    <h4> Ubicación:  </h4>
    <p> ${event.ubication.toUpperCase()} </p>
    <h4> Descripción: </h4>
    <p> ${event.description} </p>
    <h4> Fecha: </h4>
    <p> ${Intl.DateTimeFormat("es").format(eventDate)} </p>
    <h4> Asistentes: </h4>
  `;
  const assistantsDiv = createDiv("assistants");
  await assistants({ parent: assistantsDiv, users: event.assistants });

  infoDiv.append(assistantsDiv);

  const exitButton = createDiv("exitButton");
  exitButton.innerHTML = `
  <i class="fas fa-times fa-s" aria-hidden="true"></i>
  `;
  exitButton.addEventListener("click", () => {
    localStorage.removeItem("eventSelected");
    eventPage.remove();
  });

  infoDiv.append(Button({ text: "a", fn: () => {}, addClass: "opposite" }));

  eventdiv.append(coverDiv);
  eventdiv.append(infoDiv);

  eventdiv.append(exitButton);

  eventPage.append(eventdiv);
  document.querySelector("main").append(eventPage);
};
