// Api.js for backend communication

export const createTask = async (title, description, userId) => {
  const res = await fetch("http://localhost:3000/taskcreate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      status: "pending",
      userId: userId,
    }),
  });

  const data = await res.json();
  return data;
};
export const deleteTask = async (tasksId) => {
  await fetch(`http://localhost:3000/tasks/${tasksId}`, {
    method: "DELETE",
  });
};

export const updateTask = async (tasksId, updatedFields) => {
  await fetch(`http://localhost:3000/tasks/${tasksId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });
};