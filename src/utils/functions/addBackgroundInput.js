export const addBackgroundInput = (button) => {
  button.addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        document.querySelector(
          "label.customFileUpload"
        ).style.backgroundImage = `url(${e.target.result})`;
      };

      reader.readAsDataURL(file);
    }
  });
};
