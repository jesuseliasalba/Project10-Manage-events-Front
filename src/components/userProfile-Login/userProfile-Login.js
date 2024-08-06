import { userProfile } from "../userProfile/userProfile";
import { profileUser } from "../../utils/routes/userRoutes";
import { createDiv } from "../../utils/functions/createDiv";
import { createImg } from "../../utils/functions/createImg";
import { navigate } from "../../utils/functions/navigate";
import "./userProfile-Login.css";
import { disconnect } from "../../utils/functions/disconnect";

// Creamos la lógica para saber si el perfil tiene imagen o es neutro / si esta log o no

export const userProfile_Login = async () => {
  const divProfile = createDiv("parentDivProfile");
  const profile = createDiv("profile");
  const unlog = createDiv("unlog");

  const aProfile = document.createElement("a");
  const user =
    (await userProfile()) === "jwt expired" ? null : await userProfile();
  const imgP = user
    ? createImg({
        src: user.img,
        alt: `Imagen de ${user.name} ${user.surname}`,
      })
    : createImg({
        src: "/header/perfilNeutral.png",
        alt: "Imagen de usuario neutral",
      });

  aProfile.addEventListener("click", (e) =>
    navigate(e, user ? profileUser[0] : profileUser[1])
  );

  if (!user) {
    localStorage.removeItem("token");
  }

  aProfile.href = user ? profileUser[0] : profileUser[1];
  aProfile.append(imgP);
  profile.append(aProfile);
  divProfile.append(profile);

  if (user) {
    const unlogI = document.createElement("i");
    unlogI.className = "fas fa-times fa-s";
    unlog.addEventListener("click", () => disconnect());
    unlog.append(unlogI);
    divProfile.append(unlog);
  }
  return divProfile;
};
