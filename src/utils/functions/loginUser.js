import { Header } from "../../components/header/header";
import { Home } from "../../pages/home/home";
import { API } from "../API/API";

export const loginUser = async ({ e, button }) => {
  e.preventDefault();

  button.innerHTML = `<i class="fa-solid fa-circle-notch"></i>`;

  const [userInput, passwordInput] = e.target;

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

  if (res.token) {
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
      text: "Contraseña o usuario incorrecto",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
      width: "30%",
      customClass: "swal-responsive",
    });
    button.innerHTML = `LOGIN`;
  }
};
