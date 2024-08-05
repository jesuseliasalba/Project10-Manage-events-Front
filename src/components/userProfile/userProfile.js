import { API } from "../../utils/API/API";
import "./userProfile.css";

export const userProfile = async () => {
  if (!localStorage.getItem("token")) {
    return false;
  }
  const user = await API({
    endpoint: "/user/me",
    isJson: true,
    token: localStorage.getItem("token"),
  });

  return user;
};
