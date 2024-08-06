import { API } from "../../utils/API/API";
import { createDiv } from "../../utils/functions/createDiv";
import { createCard } from "../createCard/createCard";
import "./upcomingEvents.css";

export const upcomingEvents = async (parent) => {
  const div = createDiv("upcomingEvents");
  const events = await API({ endpoint: "/event/near", isJson: true });

  for (let i = 0; i < 5; i++) {
    if (events[i]) {
      div.append(createCard(events[0]));
    }
  }

  parent.append(div);
};
