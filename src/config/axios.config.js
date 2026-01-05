import axios from "axios";

const authAxios = axios.create({
  //   baseURL: "/api", // IMPORTANT: relative URL
  withCredentials: true, // IMPORTANT: send cookies
});

export default authAxios;
