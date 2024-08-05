let url = "https://proyecto10-back-end.vercel.app";

export const API = async ({
  endpoint,
  method = "GET",
  body,
  isJson = false,
  token = null,
}) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  isJson
    ? (headers["Content-Type"] = "application/json")
    : "multipart/form-data";

  const res = await fetch(url + endpoint, {
    body: isJson ? JSON.stringify(body) : body,
    method,
    headers,
  });

  const response = await res.json();
  return response;
};
