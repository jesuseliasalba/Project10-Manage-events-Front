import { addBackgroundInput } from "../../utils/functions/addBackgroundInput";
import { updateUser } from "../../utils/functions/updateUser";
import { Button } from "../button/button";
import { fieldForm } from "../fieldForm/fieldForm";
import { createForm } from "../form/form";
import "./updateProfile.css";

export const updateProfile = (parent) => {
  parent.innerHTML = "";
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
    updateUser({ e, button: updateButton });
  });

  parent.append(form);

  const profileImageButton = document.querySelector("#profileImage");

  addBackgroundInput(profileImageButton);
};
