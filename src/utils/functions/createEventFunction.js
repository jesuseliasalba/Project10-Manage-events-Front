import { Events } from "../../pages/events/events";
import { API } from "../API/API";

export const createEventFunction = async ({ e, button }) => {
  e.preventDefault();
  button.innerHTML = `<i class="fa-solid fa-circle-notch"></i>`;
  const [title, date, ubication, description, img] = e.target;

  const formData = new FormData();

  formData.append("title", title.value);
  formData.append("date", date.value);
  formData.append("ubication", ubication.value);
  formData.append("description", description.value);
  formData.append("img", img.files[0]);

  const res = await API({
    endpoint: "/event/create",
    method: "POST",
    body: formData,
    token: localStorage.getItem("token"),
  });

  if (typeof res === "object") {
    Events();
    Swal.fire({
      position: "center",
      title: "Evento creado",
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
      text: "Este nombre de evento ya existe",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
      width: "30%",
      customClass: "swal-responsive",
    });
    button.innerHTML = `REGISTRARSE`;
  }
};
