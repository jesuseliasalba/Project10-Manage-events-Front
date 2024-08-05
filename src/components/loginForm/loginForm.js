import { loginUser } from "../../utils/functions/loginUser";
import { Button } from "../button/button";
import { fieldForm } from "../fieldForm/fieldForm";
import { createForm } from "../form/form";
import { registerForm } from "../registerForm/registerForm";
import "./loginForm.css";

export const loginForm = (divleft, divright) => {
  divleft.innerHTML = "";
  divleft.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),URL("https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`;
  divright.innerHTML = "";
  divright.style.backgroundImage = "";

  const form = createForm("login-form");
  form.innerHTML = `
    ${fieldForm({ labelText: "Usuario" })}
    ${fieldForm({ labelText: "Contraseña", type: "password" })}
  `;
  const loginButton = Button({ text: "LOGIN" });

  form.append(loginButton);

  loginButton.form.addEventListener("submit", (e) => {
    loginUser({ e, button: loginButton });
    form.reset();
  });

  divleft.innerHTML += `<span class="buttonText"> Si aún no estás registrado... </span>`;
  divleft.append(
    Button({
      text: "REGISTRATE",
      fn: () => {
        registerForm(divleft, divright);
      },
    })
  );

  divright.append(form);
};
