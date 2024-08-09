import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import { Button } from "../../components/button/button";
import "./EventPage.css";

export const EventPage = (e) => {
  const event = e.event;

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
  `;

  infoDiv.append();

  const exitButton = createDiv("exitButton");
  exitButton.innerHTML = `
  <i class="fas fa-times fa-s" aria-hidden="true"></i>
  `;
  exitButton.addEventListener("click", () => {
    eventPage.remove();
  });

  infoDiv.append(Button({ text: "a", fn: () => {}, addClass: "opposite" }));

  eventdiv.append(coverDiv);
  eventdiv.append(infoDiv);

  eventdiv.append(exitButton);

  eventPage.append(eventdiv);
  document.querySelector("main").append(eventPage);
};
