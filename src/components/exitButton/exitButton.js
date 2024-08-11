import { createDiv } from "../../utils/functions/createDiv";
import "./exitButton.css";

export const exitButton = ({ divRemove, removeLocal }) => {
  const div = createDiv("exitButton");
  div.innerHTML = `
  <i class="fas fa-times fa-s" aria-hidden="true"></i>
  `;
  div.addEventListener("click", () => {
    if (removeLocal) {
      localStorage.removeItem(removeLocal);
    }
    divRemove.remove();
  });

  return div;
};
