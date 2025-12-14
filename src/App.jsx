// App.jsx
import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/task component/Task";
import { TodoHeader } from "./components/todo_header/TodoHeader";

function App() {
 
  const [count, setCount] = useState(0); // for counter
  const [name, setName] = useState("Ammar"); // for greeting
  const [taskArray, setTaskArray] = useState(["One"]);

  return (
    <>
      {/* Injecting styles here for the single-file requirement
      <style>{styles}</style> */}

      <div className="app-container">
        <h1>👋 Hello, {name}!</h1>
        
        <div>
          <h2 className="todo-title">Todo</h2>

          <TodoHeader setTaskArray={setTaskArray} />

          {taskArray.map((task, index) => {
            return (
              <Task
                key={index} 
                task={task} 
                setTaskArray={setTaskArray} 
                index={index}
              />
            );
          })}

        </div>
      </div>
    </>
  );
}

export default App;
