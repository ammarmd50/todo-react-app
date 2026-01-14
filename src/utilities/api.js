// Api.js for backend communication

import { apiBaseUri } from "../config/api.config.js";
import authAxios from "../config/axios.config.js";

// ..................create task handler..................
export const createTask = async (title, description, status) => {
  const payload = {
    title: title,
    description: description,
    status: status,
  };
  const res = await authAxios.post(`${apiBaseUri}/tasks`, payload);
  // const res = await authAxios.post(`${apiBaseUri}/tasks`, payload, {
  //   withCredentials: true,
  // });

  return res.data;
};

// ..................sign-up task handler..................
export const signUpApiHandler = async (name, email, password) => {
  const payload = {
    name: name,
    email: email,
    password: password,
  };

  const axiosRes = await authAxios.post(`${apiBaseUri}/auth/signup`, payload);
  // const axiosRes = await authAxios.post(`${apiBaseUri}/auth/signup`, payload, {
  //   withCredentials: true,
  // });

  return axiosRes.data;
};

// ..................login task handler..................
export const loginApiHandler = async (email, password) => {
  const payload = {
    email: email,
    password: password,
  };

  const axiosRes = await authAxios.post(`${apiBaseUri}/auth/login`, payload);
  // const axiosRes = await authAxios.post(`${apiBaseUri}/auth/login`, payload, {
  //   withCredentials: true,
  // });
  return axiosRes.data;
};

//..................delete task handler..................
export const deleteTask = async (taskId) => {
  const res = await authAxios.delete(`${apiBaseUri}/tasks/${taskId}`);
  // const res = await authAxios.delete(`${apiBaseUri}/tasks/${taskId}`, {
  //   withCredentials: true,
  // });

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

export const fetchTasks = async () => {
  const res = await authAxios.get(`${apiBaseUri}/tasks`);
  // const res = await authAxios.put(
  //   `${apiBaseUri}/tasks/${taskId}`,
  //   updatedData,
  //   { withCredentials: true }
  // );
  return res.data;
};

export const updateTask = async (taskId, updatedData) => {
  // const payload = {
  //   title: newTitle,
  //   taskId: taskId,
  //   description: newDescription,
  // };
  // taskId = "def/sf"
  // const url = "apiBaseUri/tasks/def"
  console.log("taskID", taskId, "updatedData", updatedData);
  const res = await authAxios.put(`${apiBaseUri}/tasks/${taskId}`, updatedData);
  // const res = await authAxios.put(
  //   `${apiBaseUri}/tasks/${taskId}`,
  //   updatedData,
  //   { withCredentials: true }
  // );
  return res.data;
};

export const logout = async () => {
  await authAxios.post(`${apiBaseUri}/auth/logout`);
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
