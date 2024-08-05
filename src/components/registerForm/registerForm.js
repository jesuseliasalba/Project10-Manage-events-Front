import { registerUser } from "../../utils/functions/registerUser";
import { Button } from "../button/button";
import { fieldForm } from "../fieldForm/fieldForm";
import { createForm } from "../form/form";
import { loginForm } from "../loginForm/loginForm";
import "./registerForm.css";

export const registerForm = (divleft, divright) => {
  divleft.innerHTML = "";
  divleft.style.backgroundImage = "";
  divright.innerHTML = "";
  divright.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),URL(https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;

  const form = createForm("register-form");
  form.innerHTML = `
    ${fieldForm({ labelText: "Usuario" })}
    ${fieldForm({ labelText: "Contraseña", type: "password" })}
    ${fieldForm({ labelText: "Nombre" })}
    ${fieldForm({ labelText: "Apellido" })}
    ${fieldForm({ labelText: "Correo electrónico", type: "email" })}
    ${fieldForm({ labelText: "Imagen de perfil", type: "file" })}
  `;
  const registerButton = Button({
    text: "REGISTRARSE",
    addClass: "registerButton",
  });

  form.append(registerButton);

  form.addEventListener("submit", (e) => {
    registerUser({ e, button: registerButton });
  });

  divright.innerHTML += `<span class="buttonText"> Si ya estás registrado... </span>`;
  divright.append(
    Button({
      text: "LOGIN",
      fn: () => {
        loginForm(divleft, divright);
      },
    })
  );

  divleft.append(form);
};
