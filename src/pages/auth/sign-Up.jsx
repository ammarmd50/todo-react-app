import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signUpApiHandler } from "../../utilities/api";
import { getUserToken } from "../../utilities/getUserToken";
import axios from "axios";

export default function SignUp({ auth, setAuth }) {
  const navigate = useNavigate();

  // if (auth === true) {
  //   navigate("/todos");
  // }

  useEffect(() => {
    if (auth) {
      navigate("/todos");
    }
  }, [auth]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // TODO: Get & Set user after signup
    await signUpApiHandler(formData.name, formData.email, formData.password);
    //   const res = await axios.get("http://localhost:3000/auth/me", {
    //   withCredentials: true,
    // });

    // const res = await axios.get("http://localhost:3000/auth/me",{
    //    withCredentials: true,
    // });
    console.log("Sign-up:", formData);
    setAuth(true);
    navigate("/todos");
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
