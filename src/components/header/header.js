import { routes } from "../../utils/routes/routes";
import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import { navigate } from "../../utils/functions/navigate";
import { userProfile_Login } from "../../utils/functions/userProfile-Login";
import "./header.css";

export const Header = async () => {
  const existingHeader = document.querySelector("header");
  if (existingHeader) {
    existingHeader.remove();
  }

  const header = document.createElement("header");

  const divImg = createDiv("logoBusiness");
  const img = createImg({
    src: "/logo/pegatina_1.png",
    alt: "Logo Rollertrip",
  });

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  for (const route of routes) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.addEventListener("click", (e) => navigate(e, route));

    a.textContent = route.text;
    a.href = route.path;

    li.append(a);
    if (!(route.text === "Login" && localStorage.getItem("token"))) {
      ul.append(li);
    }
  }

  const divProfile = await userProfile_Login();

  // Añadimos la imagen a su div, y el div al header
  divImg.append(img);
  header.append(divImg);
  // Añadimos la lista desordenada a su nav y el nav  al header
  nav.append(ul);
  header.append(nav);
  // Añadimos el perfil usuario/login al header
  header.append(divProfile);
  // Por ultimo añadimos el header justo al principio del body
  document.body.insertBefore(header, document.body.firstChild);
};
