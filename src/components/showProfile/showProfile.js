import { API } from "../../utils/API/API";
import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import { Button } from "../button/button";
import { updateProfile } from "../updateProfile/updateProfile";
import "./showProfile.css";

export const showProfile = async (parent) => {
  const div = createDiv("profileCard");
  const user = await API({
    endpoint: "/user/me",
    token: localStorage.getItem("token"),
  });

  const divImg = createDiv("divImgProfile");
  const img = createImg({
    src: user.img,
    alt: `Foto de ${user.name} ${user.surname}`,
  });

  const divDatos = createDiv("ProfileData");
  divDatos.innerHTML = `
    <h2> ${user.name} ${user.surname}</h2>
    <h4> Usuario: </h4>
    <p> ${user.username} </p>
    <h4> Correo: </h4>
    <p> ${user.mail}</p>
  `;

  divImg.append(img);
  div.append(divImg);
  div.append(divDatos);
  div.append(
    Button({
      text: "Modificar",
      fn: () => {
        updateProfile(parent);
      },
      addClass: "updateUserButton",
    })
  );

  parent.append(div);
};
