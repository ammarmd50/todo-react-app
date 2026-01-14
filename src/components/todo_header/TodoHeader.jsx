import { useState } from "react";
import { createTask } from "../../utilities/api.js";
import "./Header.css";

function TodoHeader({ setTaskArray, userId }) {
  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [status, setStatus] = useState("");
  
  console.log("STATUS SENT:", status);



  const addTask = async () => {
    
    if (taskInput.trim() === "" || descriptionInput.trim() === "") {
    alert("Please enter both task and description.");
    return;
  }

  console.log(status)
    try {
      //   New fetch request to add task to backend
      const res = await createTask(taskInput, descriptionInput, status);
        // Keep UI update
      const newTask = {
        title: res.title,
        description: res.description,
        status: res.status,
        taskId: res.taskId,
      };
      setTaskArray((prev) => [...prev,newTask]);

      setTaskInput("");
      setDescriptionInput("");
      setStatus("pending");
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
      <select
        value={status}
        onChange={(e) =>{ setStatus(e.target.value)
        console.log("SELECTED STATUS:", e.target.value);
        }}
      >
        <option value="pending">pending</option>
        <option value="in-progress">in-progress</option>
        {/* <option value="completed">completed</option> */}
        <option value="done">done</option>
      </select>
      <button className="btn-add" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export { TodoHeader };
