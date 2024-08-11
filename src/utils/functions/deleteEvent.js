import { Events } from "../../pages/events/events";
import { API } from "../API/API";

export const deleteEvent = async (id) => {
  const res = await API({
    endpoint: `/event/${id}`,
    method: "DELETE",
    token: localStorage.getItem("token"),
  });

  Events();
  Swal.fire({
    position: "center",
    title: "Evento eliminado",
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
    width: "30%",
    customClass: "swal-responsive",
  });
};
