import { createAssistantsCircle } from "../createAssistantsCircle/createAssistantsCircle";
import "./assistants.css";

export const assistants = async ({ parent, users }) => {
  const join = await createAssistantsCircle({ join: true });

  if (join) {
    parent.append(join);
  }

  if (users.length) {
    for (const user of users) {
      parent.append(await createAssistantsCircle({ user }));
    }
  } else {
  }
};
