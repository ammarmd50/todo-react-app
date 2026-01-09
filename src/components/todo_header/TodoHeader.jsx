import { useState } from "react";
import { createTask } from "../../utilities/api.js";
import "./Header.css";

function TodoHeader({ setTaskArray, userId }) {
  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const addTask = async () => {
    if (taskInput.trim() === "") return;

    try {
      //   New fetch request to add task to backend
      const res = await createTask(taskInput, " ", userId);

      //   Keep UI update
      const newTask = {
        title: res.title,
        description: res.description,
        taskId: res.taskId,
      };
      setTaskArray((prev) => [...prev, newTask]);
      setTaskInput("");
      setDescriptionInput("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // console.log ("taskinput:", taskInput);
  // console.log ("descriptionInput:", descriptionInput);
  return (
    <div className="todo-header">
      <input
        id="username"
        name="username"
        autoComplete="task"
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task..."
      />

      <textarea
        id="description"
        placeholder="Add a description..."
        type="text"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
        rows={4}
      />
      <button className="btn-add" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export { TodoHeader };
