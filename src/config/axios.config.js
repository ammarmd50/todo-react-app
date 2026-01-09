import axios from "axios";

const authAxios = axios.create({
  //   baseURL: "/api", // IMPORTANT: relative URL
    baseURL: "https://todo-app-backend-kpbt.onrender.com",
  //   baseURL: "http://localhost:3000",
  withCredentials: true, // IMPORTANT: send cookies
});

export default authAxios;
