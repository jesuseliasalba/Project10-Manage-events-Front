export const createImg = ({ src, alt }) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.style.height = "100%";
  return img;
};
