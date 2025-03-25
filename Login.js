import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both username and password fields are filled
    if (loginData.username && loginData.password) {
      // Redirect to the appointment form page
      navigate("/appointmentform");
    } else {
      // Show an alert if any of the fields are empty
      alert("Please fill in both username and password.");
    }

    // Optionally clear the form after submitting
    setLoginData({ username: "", password: "" });
  };

  return (
    
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <h4>
        Don’t have an account? <Link to="/signup">register</Link>
      </h4>
    </div>
  );
};

export default Login;
    