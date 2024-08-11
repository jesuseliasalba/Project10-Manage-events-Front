import { createAssistantsCircle } from "../createAssistantsCircle/createAssistantsCircle";
import "./assistants.css";

export const assistants = async ({ parent, users }) => {
  const join = await createAssistantsCircle({ join: true, users });

  if (join) {
    parent.append(join);
  }

  if (users.length) {
    for (const user of users) {
      parent.append(await createAssistantsCircle({ user }));
    }
  }

  if (!parent.childNodes.length) {
    parent.innerHTML = `
    <p> Vaya, aún no va nadie... Inicia sesión para unirte.</p>
    `;
  }
};
