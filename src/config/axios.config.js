import axios from "axios";

const authAxios = axios.create({
  withCredentials: true, // IMPORTANT: send cookies
});

export default authAxios;
