import { useState } from "react";
import { createTask } from "../../utilities/api.js";

function TodoHeader({ setTaskArray, userId }) {
  const [taskInput, setTaskInput] = useState("");

  const addTask = async () => {
    if (taskInput.trim() === "") return;

    try {
      //   New fetch request to add task to backend
      const res = await createTask(taskInput, " ", userId);

      //   Keep UI update
      const newTask = {
        title: res.title,
        taskId: res.taskId,
      };
      setTaskArray((prev) => [...prev, newTask]);
      setTaskInput("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

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

      <button className="btn-add" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export { TodoHeader };
