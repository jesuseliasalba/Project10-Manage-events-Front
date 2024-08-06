import { Header } from "../../components/header/header";
import { showProfile } from "../../components/showProfile/showProfile";
import { CreatePage } from "../../utils/functions/createPage";
import "./profile.css";

export const Profile = () => {
  Header();
  const div = CreatePage("profile");
  showProfile(div);
};
