import { Header } from "../../components/header/header";
import { Home } from "../../pages/home/home";
import { API } from "../API/API";

export const registerUser = async ({ e, button }) => {
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

  formData.append("username", userInput.value);
  formData.append("password", passwordInput.value);
  formData.append("img", imgInput.files[0]);
  formData.append("name", nameInput.value);
  formData.append("surname", surnameInput.value);
  formData.append("mail", emailInput.value);

  const res = await API({
    endpoint: "/user/register",
    method: "POST",
    body: formData,
  });

  if (typeof res === "object") {
    const body = {
      username: userInput.value,
      password: passwordInput.value,
    };
    const res = await API({
      endpoint: "/user/login",
      method: "POST",
      body: body,
      isJson: true,
    });
    localStorage.setItem("token", res.token);
    Home();
    Swal.fire({
      position: "center",
      title: "Sesión iniciada",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      width: "30%",
      customClass: "swal-responsive",
    });
  } else {
    Swal.fire({
      position: "center",
      title: "Oops...",
      text: "Este nombre de usuario ya existe",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
      width: "30%",
      customClass: "swal-responsive",
    });
    button.innerHTML = `REGISTRARSE`;
  }
};
