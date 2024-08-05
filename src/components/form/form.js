import "./form.css";

export const createForm = (className) => {
  const form = document.createElement("form");
  form.classList.add(className, "formTipo");
  return form;
};
