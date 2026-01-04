import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/log-In.jsx";
import Signup from "./pages/auth/sign-Up.jsx";
import TodoDashboard from "./pages/DashBoard/TodoDashBoard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiBaseUri } from "./config/api.config.js";

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const getAuth = async () => {
    axios
      .get(`${apiBaseUri}/auth/me`, { withCredentials: true })
      .then((res) => {
        console.log("AUTH USER:", res.data.user);
        setUser(res.data.user);
        setAuth(true);
      })
      .catch(() => {
        setAuth(false);
        // Should not navigate to login
        // navigate("/login");
      });
  };

  // 🔹 AUTH CHECK
  useEffect(() => {
    getAuth();
  }, [auth]);

  return (
    <Routes>
      <Route path="/login" element={<Login auth={auth} setAuth={setAuth} />} />
      <Route
        path="/signup"
        element={<Signup auth={auth} setAuth={setAuth} />}
      />
      <Route
        path="/todos"
        element={<TodoDashboard user={user} auth={auth} />}
      />

      {/* default route */}
      <Route path="*" element={<div>Error 404</div>} />
    </Routes>
  );
}

export default App;
