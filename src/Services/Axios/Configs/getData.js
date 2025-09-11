import axios from "axios";

export const getData = axios.create({
  baseURL: "https://redux-cms.iran.liara.run/api/",
});
