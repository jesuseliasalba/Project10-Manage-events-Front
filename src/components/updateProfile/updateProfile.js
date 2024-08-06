import { updateUser } from "../../utils/functions/updateUser";
import { Button } from "../button/button";
import { fieldForm } from "../fieldForm/fieldForm";
import { createForm } from "../form/form";
import "./updateProfile.css";

export const updateProfile = (parent) => {
  const form = createForm("updateForm");
  form.innerHTML = `
    ${fieldForm({ labelText: "Usuario", required: false })}
    ${fieldForm({
      labelText: "Contraseña",
      type: "password",
      required: false,
    })}
    ${fieldForm({ labelText: "Nombre", required: false })}
    ${fieldForm({ labelText: "Apellido", required: false })}
    ${fieldForm({
      labelText: "Correo electrónico",
      type: "email",
      required: false,
    })}
    ${fieldForm({
      labelText: "Imagen de perfil",
      type: "file",
      required: false,
    })}
  `;
  const updateButton = Button({
    text: "ACTUALIZAR",
  });
  form.append(updateButton);
  form.addEventListener("submit", (e) => {
    updateUser({ e, button: updateButton });
  });

  parent.append(form);
};
