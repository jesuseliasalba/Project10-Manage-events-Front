import { Home } from "../../pages/home/home";
import { Profile } from "../../pages/profile/profile";
import { API } from "../API/API";

export const updateUser = async ({ e, button }) => {
  e.preventDefault();
  button.innerHTML = `<i class="fa-solid fa-circle-notch"></i>`;

  const [
    userInput,
    passwordInput,
    nameInput,
    surnameInput,
    emailInput,
    imgInput,
  ] = e.target;

  const formData = new FormData();

  userInput.value ? formData.append("username", userInput.value) : null;
  passwordInput.value ? formData.append("password", passwordInput.value) : null;
  imgInput.value ? formData.append("img", imgInput.files[0]) : null;
  nameInput.value ? formData.append("name", nameInput.value) : null;
  surnameInput.value ? formData.append("surname", surnameInput.value) : null;
  emailInput.value ? formData.append("mail", emailInput.value) : null;

  const res = await API({
    endpoint: "/user",
    method: "PUT",
    body: formData,
    token: localStorage.getItem("token"),
  });

  if (typeof res === "object") {
    Profile();
    Swal.fire({
      position: "center",
      title: "Usuario actualizado",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      width: "30%",
      customClass: "swal-responsive",
    });
  } else if (typeof res === "string") {
    button.innerHTML = "ACTUALIZAR";
    Swal.fire({
      position: "center",
      title: "Oops...",
      text: res,
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
      width: "30%",
      customClass: "swal-responsive",
    });
  } else {
    Home();
    Swal.fire({
      position: "center",
      title: "Oops...",
      text: "Ha ocurrido un error, contacta con un administrador",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
      width: "30%",
      customClass: "swal-responsive",
    });
  }
};
