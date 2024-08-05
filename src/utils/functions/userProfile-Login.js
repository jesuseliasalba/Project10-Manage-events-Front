import { userProfile } from "../../components/userProfile/userProfile";
import { profileUser } from "../routes/userRoutes";
import { createDiv } from "./createDiv";
import { createImg } from "./createImg";
import { navigate } from "./navigate";

// Creamos la lógica para saber si el perfil tiene imagen o es neutro / si esta log o no

export const userProfile_Login = async () => {
  const divProfile = createDiv("profile");
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
  divProfile.append(aProfile);
  return divProfile;
};
