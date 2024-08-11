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
    enpoint: `/event/${localStorage.getItem("idEvent")}`,
    method: "PUT",
    body: formData,
    token: localStorage.getItem("token"),
  });

  console.log(res);
};
