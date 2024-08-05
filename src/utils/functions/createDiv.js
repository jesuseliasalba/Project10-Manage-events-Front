export const createDiv = (clase) => {
  const div = document.createElement("div");
  div.classList.add(clase);
  return div;
};
