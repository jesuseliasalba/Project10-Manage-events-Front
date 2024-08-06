import { Header } from "../../components/header/header";
import { updateProfile } from "../../components/updateProfile/updateProfile";
import { CreatePage } from "../../utils/functions/createPage";
import "./profile.css";

export const Profile = () => {
  Header();
  const div = CreatePage("profile");
  updateProfile(div);
};
