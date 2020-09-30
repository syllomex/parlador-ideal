import Axios from "axios";

export const api = Axios.create({
  baseURL: "http://192.168.0.104:8080",
  headers: { "Content-Type": "application/json" },
});
