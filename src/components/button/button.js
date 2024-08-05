import "./button.css";

export const Button = ({ text, fn, addClass }) => {
  const button = document.createElement("button");
  button.classList.add("main-button");
  addClass ? button.classList.add(addClass) : null;
  button.textContent = text;
  button.addEventListener("click", fn);
  return button;
};
