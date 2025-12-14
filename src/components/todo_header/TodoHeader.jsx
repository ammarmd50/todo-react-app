//TodoHeader.jsx

import { useState } from "react";

function TodoHeader({ setTaskArray }) {
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {

     if (taskInput.trim() === "") return;

    // 1st way
    // const newTasks = [...taskArray, taskInput];
    // setTaskArray(newTasks);

    // 2nd way
    setTaskArray((lastValue) => [...lastValue, taskInput]);

    setTaskInput("");
  };

  return (
    <div  className="todo-header" >
      <input type="text" value={taskInput} 
      onChange={(e) => setTaskInput(e.target.value)} 
       placeholder="Add a new task..." />
     
      <button className="btn-add" onClick= {addTask}>
        Add
      </button>
    </div>
  );
}
export { TodoHeader };
