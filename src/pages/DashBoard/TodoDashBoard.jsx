import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TodoHeader } from "../../components/todo_header/TodoHeader";
import { Task } from "../../components/task component/Task";
import "../../App.css";
import { fetchTasks, logout } from "../../utilities/api";

function TodoDashboard({ user, auth }) {
  const navigate = useNavigate();
  // if (auth === false) {
  //   navigate("/login");
  // }

  const [taskArray, setTaskArray] = useState([]);

  // auth guard
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth]);

  //  FETCH TASKS
  useEffect(() => {
    if (!user) return;

    // fetch("http://localhost:3000/tasks", {
    //   credentials: "include",
    // })
    //   .then((res) => res.json())
    //   .then((data) => setTaskArray(data))
    //   .catch((err) => console.error("Fetch tasks error:", err));

    fetchTasks()
      .then((data) => setTaskArray(data))
      .catch((err) => console.error("Fetch tasks error:", err));
  }, [user]);

  // 🔹 LOGOUT
  const handleLogout = async () => {
    // await fetch("http://localhost:3000/auth/logout", {
    //   method: "POST",
    //   credentials: "include",
    // });
    await logout();
    navigate("/login");
  };

  if (!user) {
    return <h2>Loading Dashboard...</h2>;
  }
  // console.log(
  //   "TASK ARRAY:",
  //   taskArray.map((t) => ({
  //     title: t.title,
  //     taskId: t.taskId,
  //   }))
  // );

  return (
    <div className="app-container">
      <h2 className="todo-title">Todo</h2>
      <h1>👋 Hello {user.name}</h1>

      <TodoHeader setTaskArray={setTaskArray} userId={user.userId} />

      {!taskArray.length || taskArray.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        taskArray.map((task, index) => (
          <Task key={task.taskId} task={task} setTaskArray={setTaskArray} />
        ))
      )}

      <button className="btn-logout" onClick={handleLogout}>
        Logout
      </button>

      <p>
        <Link to="/login">Go to Login</Link>
      </p>
    </div>
  );
}

export default TodoDashboard;
