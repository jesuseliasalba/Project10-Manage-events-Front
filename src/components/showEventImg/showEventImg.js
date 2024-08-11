import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import "./showEventImg.css";

export const showEventImg = (event) => {
  const div = createDiv("showCover");

  const cover = createImg({
    src: event.img,
    alt: `Portada de ${event.title}`,
  });

  const exitZoom = createDiv("exitZoom");
  exitZoom.innerHTML = `
    <i class="fa-solid fa-compress"></i>
  `;
  exitZoom.addEventListener("click", () => {
    div.remove();
  });

  div.append(cover);
  div.append(exitZoom);

  document.querySelector(".eventShowDiv").append(div);
};
