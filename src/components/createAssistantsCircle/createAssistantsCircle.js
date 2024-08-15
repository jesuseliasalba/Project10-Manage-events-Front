import { API } from "../../utils/API/API";
import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import { EventPage } from "../EventPage/EventPage";
import { userProfile } from "../userProfile/userProfile";
import "./createAssistantsCircle.css";

export const createAssistantsCircle = async ({
  user,
  users = [],
  join = false,
}) => {
  const divuser = createDiv("profileCircle");
  const id = await userProfile();

  if (join && id) {
    if (users.some((object) => object._id === id._id)) {
      divuser.innerHTML = `
        <i class="fa-solid fa-minus"></i>
      `;
    } else {
      divuser.innerHTML = `
        <i class="fa-solid fa-plus"></i>    
      `;
    }

    divuser.addEventListener("click", async () => {
      divuser.innerHTML = `
        <i class="fa-solid fa-circle-notch"></i>
      `;
      divuser.querySelector("i").style.fontSize = "25px";
      await API({
        endpoint: `/event/join/${localStorage.getItem("idEvent")}`,
        method: "PUT",
        token: localStorage.getItem("token"),
      });
      EventPage(localStorage.getItem("idEvent"));
    });
    return divuser;
  } else if (join) {
    return null;
  } else {
    if (user._id === id._id) {
      divuser.classList.add("userProfile");
    }
    divuser.append(
      createImg({ src: user.img, alt: `Foto de ${user.name} ${user.surname}` })
    );

    return divuser;
  }
};
