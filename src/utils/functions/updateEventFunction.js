import { EventPage } from "../../components/EventPage/EventPage";
import { Events } from "../../pages/events/events";
import { API } from "../API/API";

export const updateEventFunction = async ({ e, button }) => {
  e.preventDefault();
  button.innerHTML = `<i class="fa-solid fa-circle-notch"></i>`;

  const [title, date, ubication, description, img] = e.target;

  const formData = new FormData();

  title.value ? formData.append("title", title.value) : null;
  date.value ? formData.append("date", date.value) : null;
  ubication.value ? formData.append("ubication", ubication.value) : null;
  description.value ? formData.append("description", description.value) : null;
  img.value ? formData.append("img", img.value) : null;

  const res = await API({
    endpoint: `/event/${localStorage.getItem("idEvent")}`,
    method: "PUT",
    body: formData,
    token: localStorage.getItem("token"),
  });

  if (typeof res === "object") {
    Events();
    EventPage(localStorage.getItem("idEvent"));
    Swal.fire({
      position: "center",
      title: "Evento actualizado",
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
