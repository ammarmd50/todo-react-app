import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApiHandler } from "../../utilities/api";

function Login({ auth,setAuth}) {
  const navigate = useNavigate();
  // if (auth === true) {
  //   navigate("/todos");
  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth) {
      navigate("/todos");
    }
  }, [auth]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    // setLoading(true);

    try {
      const res = await loginApiHandler(email, password);
      if (!res.token) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }
      console.log("Login successful:", res);
      setAuth(true);
      navigate("/todos");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
