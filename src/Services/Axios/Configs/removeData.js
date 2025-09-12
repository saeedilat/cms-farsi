import axios from "axios";

export const removeData = axios.create({
  baseURL: "https://redux-cms.iran.liara.run/api/",
  method: "DELETE",
});
