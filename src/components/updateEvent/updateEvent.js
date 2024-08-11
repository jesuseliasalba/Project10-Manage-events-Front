import { createDiv } from "../../utils/functions/createDiv";
import { updateEventFunction } from "../../utils/functions/updateEventFunction";
import { Button } from "../button/button";
import { fieldForm } from "../fieldForm/fieldForm";
import { createForm } from "../form/form";
import "./updateEvent.css";

export const updateEvent = ({ parent, event }) => {
  parent.innerHTML = ``;
  parent.style.backgroundColor = "var(--jea-color-bg)";
  parent.style.border = "2px solid var(--jea-color-primary)";
  parent.style.borderRadius = "var(--jea-radius-primary)";

  document.querySelector(".modifyEvent").remove();

  const div = createDiv("eventFormDiv");
  const form = createForm("eventForm");

  const eventDate = new Date(event.date);

  form.innerHTML = `
    ${fieldForm({
      labelText: "Título",
      required: false,
      placeholder: event.title,
    })}
    <div class="fieldForm">
        <label>Fecha</label>
        <input type="text" placeholder="${Intl.DateTimeFormat("es").format(
          eventDate
        )}" onfocus="(this.type='date')"
      onblur="(this.type='text')" >
    </div>
    ${fieldForm({
      labelText: "Ubicación",
      required: false,
      placeholder: event.ubication,
    })}
    <div class="fieldForm">
        <label> Descripción </label>
        <textarea placeholder="${event.description}"  rows="6"></textarea>
    </div>
    <div class="fieldForm">
        <label for="profileImage" class="customFileUpload"> <i class="fa-solid fa-upload"></i> <span>Imagen de perfil</span></label>
        <input type="file" id="profileImage"/>
    </div>
  `;

  const updateButton = Button({
    text: "ACTUALIZAR",
  });

  form.append(updateButton);
  form.addEventListener("submit", (e) => {
    updateEventFunction({ e, button: updateButton });
  });

  div.append(form);
  parent.append(div);
};
