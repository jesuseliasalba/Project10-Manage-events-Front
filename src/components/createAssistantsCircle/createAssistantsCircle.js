import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import { userProfile } from "../../components/userProfile/userProfile";
import "./createAssistantsCircle.css";
import { API } from "../../utils/API/API";
import { EventPage } from "../EventPage/EventPage";
import { Events } from "../../pages/events/events";

export const createAssistantsCircle = async ({ user, join = false }) => {
  const divuser = createDiv("profileCircle");
  const id = await userProfile();

  if (join && id) {
    divuser.innerHTML = `
    <i class="fa-solid fa-plus"></i>
    `;
    divuser.addEventListener("click", async () => {
      const res = await API({
        endpoint: `/event/join/${localStorage.getItem("eventSelected")}`,
        method: "PUT",
        token: localStorage.getItem("token"),
      });
      Events();
    });
    return divuser;
  } else if (join) {
    return null;
  } else {
    divuser.append(
      createImg({ src: user.img, alt: `Foto de ${user.name} ${user.surname}` })
    );

    return divuser;
  }
};
