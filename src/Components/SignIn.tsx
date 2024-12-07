import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
    console.log(`Input ${id} changed`); // Simplified log to avoid showing values
  };

  const handleSignIn = async () => {
    console.log("Sign-in button clicked");

    // Send data to backend
    const data = { email, password };
    console.log("Sending data to backend"); // Simplified log

    try {
      const response = await fetch("http://localhost:3001/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", response.status);
      if (response.ok) {
        const result = await response.json();
        console.log("User signed in successfully", result);

        // Store userId in localStorage
        localStorage.setItem("userId", result.id.toString());

        // Navigate to HomePage after sign-in
        navigate("/home");
      } else {
        const errorMessage = await response.text();
        console.error("Error:", errorMessage);
        alert(errorMessage); // Display the error message
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="background">
      <div className="content">
        <div className="login-container">
          <h2>Email</h2>
          <div className="input-box">
            <span className="icon">📧</span>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <h2>Password</h2>
          <div className="input-box">
            <span className="icon">🔒</span>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          <button className="login-button" onClick={handleSignIn}>
            Sign in
          </button>

          <p className="signup-text">
            You don’t have an account?{" "}
            <a href="/signup" className="signup-link">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
