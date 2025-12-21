//App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import { Task } from "./components/task component/Task";
import { TodoHeader } from "./components/todo_header/TodoHeader";

function App() {
  // const [name, setName] = useState("Ammar"); // greeting
  const [taskArray, setTaskArray] = useState([]);

  //  NEW USER STATES
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null);

  //   Check local storage for user info on app load
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUserName = localStorage.getItem("userName");

    if (storedUserId && storedUserName) {
      setUserId(storedUserId);
      setUserName(storedUserName);
    }
  }, []);
  //   Fetch tasks only AFTER user is selected
  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:3000/tasks/${userId}`)
      .then((res) => res.json())
      .then((data) => setTaskArray(data))
      // .then((data) => {
      //   const titles = data.map((item) => item.title);
      //   setTaskArray(titles);
      // })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, [userId]);

  //   Handle user creation / fetch
  const handleStart = async () => {
    if (!userName.trim()) return;

    try {
      const res = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName }),
      });

      const data = await res.json();
      setUserId(data._id);
      // setName(data.name); // update greeting
      
      // local storage

       localStorage.setItem("userId", data._id);
       localStorage.setItem("userName", data.name);

    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  return (
    <>
      <div className="app-container">
        
        {/* header name and todo title */}
        <h2 className="todo-title">Todo</h2>
        <h1>👋 Hello  {userName} </h1>

        {/*   USER INPUT SECTION */}
        {!userId && (
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <button
  className="start-btn"
  onClick={handleStart}
  disabled={!userName.trim()}
>
  Start
</button>
          </div>
        )}

        {/*   SHOW TODO ONLY AFTER USER IS SET */}
        {userId && (
          <>
          
           {/* <h1>👋 Hello, {name}!</h1> */}
            {/* <h2 className="todo-title">Todo</h2> */}

            <TodoHeader
              setTaskArray={setTaskArray}
              userId={userId}
            />

            {taskArray.map((task, index) => (
              <Task
                key={index}
                task={task}
                setTaskArray={setTaskArray}
                index={index}
              />
            ))}

             <button
      onClick={() => {
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        setUserId(null);
        setName("");
        setTaskArray([]);
      }}
      style={{
        backgroundColor: "#ff4d4d",
        color: "white",
        padding: "8px 14px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        marginBottom: "15px",
      }}
    >
      Logout
    </button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
