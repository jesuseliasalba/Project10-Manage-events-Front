import { Home } from "../../pages/home/home";

export const disconnect = () => {
  localStorage.removeItem("token");
  Home();
  Swal.fire({
    position: "center",
    title: "¡ Hasta la próxima !",
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
    width: "30%",
    customClass: "swal-responsive",
  });
};
