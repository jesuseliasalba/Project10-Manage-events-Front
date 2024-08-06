import { createTopHome } from "../../components/createTopHome/createTopHome";
import { Header } from "../../components/header/header";
import { upcomingEvents } from "../../components/upcomingEvents/upcomingEvents";
import { createDiv } from "../../utils/functions/createDiv";
import { CreatePage } from "../../utils/functions/createPage";
import "./home.css";

export const Home = () => {
  Header();
  const div = CreatePage("home");

  const topDiv = createDiv("topDiv");

  const h2 = document.createElement("h2");
  h2.textContent = "Proximos eventos...";

  div.append(topDiv);
  createTopHome(topDiv);
  div.append(h2);
  upcomingEvents(div);
};
