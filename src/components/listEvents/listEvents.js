import { API } from "../../utils/API/API";
import { createCard } from "../createCard/createCard";
import "./listEvents.css";

export const listEvents = async (parent) => {
  const events = await API({ endpoint: "/event" });
  for (const event of events) {
    parent.append(createCard(event));
  }
};
