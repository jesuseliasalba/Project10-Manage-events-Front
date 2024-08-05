import { Header } from "../../components/header/header";
import { loginForm } from "../../components/loginForm/loginForm";
import { createDiv } from "../../utils/functions/createDiv";
import { CreatePage } from "../../utils/functions/createPage";
import "./login.css";

export const Login = () => {
  Header();
  const div = CreatePage("login");

  const divright = createDiv("right");
  const divleft = createDiv("left");
  divleft.classList.add("leftright");
  divright.classList.add("leftright");

  loginForm(divleft, divright);

  div.append(divleft);
  div.append(divright);
};
