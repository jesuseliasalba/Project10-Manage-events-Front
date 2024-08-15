import { addBackgroundInput } from "../../utils/functions/addBackgroundInput";
import { createDiv } from "../../utils/functions/createDiv";
import { createEventFunction } from "../../utils/functions/createEventFunction";
import { Button } from "../button/button";
import { exitButton } from "../exitButton/exitButton";
import { fieldForm } from "../fieldForm/fieldForm";
import { createForm } from "../form/form";
import "./createEvent.css";

export const createEvent = (parent) => {
  if (document.querySelector(".createElement")) {
    document.querySelector(".createElement").remove();
  }
  const blur = createDiv("blur");
  const div = createDiv("createElement");

  const form = createForm("eventForm");
  form.innerHTML = `
  ${fieldForm({
    labelText: "Título",
    required: false,
  })}
  ${fieldForm({ labelText: "Fecha", type: "date" })}
  ${fieldForm({
    labelText: "Ubicación",
    required: false,
  })}
  <div class="fieldForm">
      <label> Descripción </label>
      <textarea rows="6" required></textarea>
  </div>
  <div class="fieldForm">
      <label for="eventImage" class="customFileUpload"> <i class="fa-solid fa-upload"></i> <span>Cartel del evento</span></label>
      <input type="file" id="eventImage" required/>
  </div>
`;

  const updateButton = Button({
    text: "CREAR",
  });

  form.append(updateButton);
  form.addEventListener("submit", (e) => {
    createEventFunction({ e, button: updateButton });
  });

  const exit = exitButton({ divRemove: blur });
  div.append(exit);

  div.append(form);
  blur.append(div);
  parent.append(blur);

  const eventImageButton = document.querySelector("#eventImage");

  addBackgroundInput(eventImageButton);
};
