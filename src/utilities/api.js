// Api.js for backend communication

import axios from "axios";
import { apiBaseUri } from "../config/api.config";

// ..................create task handler..................
export const createTask = async (title, description) => {
  const payload = {
    title: title,
    description: description,
    status: "pending",
  };
  const res = await axios.post(`${apiBaseUri}/tasks`, payload, {
    withCredentials: true,
  });

  return res.data;
};

// ..................sign-up task handler..................
export const signUpApiHandler = async (name, email, password) => {
  const payload = {
    name: name,
    email: email,
    password: password,
  };

  const axiosRes = await axios.post(`${apiBaseUri}/auth/signup`, payload, {
    withCredentials: true,
  });

  return axiosRes.data;
};

// ..................login task handler..................
export const loginApiHandler = async (email, password) => {
  const payload = {
    email: email,
    password: password,
  };

  const axiosRes = await axios.post(`${apiBaseUri}/auth/login`, payload, {
    withCredentials: true,
  });
  return axiosRes.data;
};

//..................delete task handler..................
export const deleteTask = async (taskId) => {
  const res = await axios.delete(`${apiBaseUri}/tasks/${taskId}`, {
    withCredentials: true,
  });

  return res.data;
};

//..................update task handler..................
// export const updateTask = async ( title , updatedFields) => {
//   await fetch(`${apiBaseUri}/tasks/${tasksId}`, {
//     method: "PUT",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//       //"Authorization": `Bearer ${localStorage.getItem("token")}`
//     },
//     body: JSON.stringify(updatedFields),
//   });
// };

export const updateTask = async (taskId, updatedData) => {
  // const payload = {
  //   title: newTitle,
  //   taskId: taskId,
  // };
  // taskId = "def/sf"
  // const url = "apiBaseUri/tasks/def"
  const res = await axios.put(`${apiBaseUri}/tasks/${taskId}`, updatedData, {
    withCredentials: true,
  });
  return res.data;
};

// const res = await fetch("apiBaseUri/tasks", {
//   method: "POST",
//   credentials: "include",
//   headers: {
//     "Content-Type": "application/json",
//     //"Authorization": `Bearer ${localStorage.getItem("token")}`
//   },
//   body: JSON.stringify({
//     title: title,
//     description: description,
//     status: "pending",
//     userId: userId,
//   }),
// });

// const data = await res.json();
