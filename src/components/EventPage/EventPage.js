import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import { assistants } from "../assistants/assistants";
import { API } from "../../utils/API/API";
import "./EventPage.css";
import { updateEvent } from "../updateEvent/updateEvent";
import { showEventImg } from "../showEventImg/showEventImg";
import { exitButton } from "../exitButton/exitButton";
import { deleteEvent } from "../../utils/functions/deleteEvent";

export const EventPage = async (id) => {
  const event = await API({ endpoint: `/event/${id}` });
  localStorage.setItem("idEvent", id);

  const eventPage = createDiv("eventShow");
  const eventdiv = createDiv("eventShowDiv");

  const coverDiv = createDiv("coverDiv");
  const cover = createImg({
    src: event.img,
    alt: `Portada de ${event.title}`,
  });

  const zoomCover = createDiv("zoomCover");
  zoomCover.innerHTML = `
  <i class="fa-solid fa-expand"></i>
  `;
  zoomCover.addEventListener("click", () => {
    showEventImg(event);
  });

  coverDiv.append(zoomCover);

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

  const exit = exitButton({
    divRemove: eventPage,
    removeLocal: "idEvent",
  });

  eventdiv.append(coverDiv);
  eventdiv.append(infoDiv);

  eventdiv.append(exit);

  eventPage.append(eventdiv);
  document.querySelector("main").append(eventPage);

  if (localStorage.getItem("token")) {
    const modifyEvent = createDiv("modifyEvent");
    modifyEvent.innerHTML = `
    <p>Modificar</p>
  `;
    modifyEvent.addEventListener("click", () => {
      updateEvent({ parent: infoDiv, event });
    });
    eventdiv.append(modifyEvent);

    const deleteE = createDiv("deleteEvent");
    deleteE.innerHTML = `
    <p>Eliminar</p>
  `;
    deleteE.addEventListener("click", () => {
      deleteEvent(id);
    });
    eventdiv.append(deleteE);
  }

  if (document.querySelectorAll(".eventShow").length > 1) {
    document.querySelector(".eventShow").remove();
  }
};
