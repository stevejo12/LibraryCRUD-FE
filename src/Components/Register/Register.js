import React, { useState } from "react";

import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerAccount = (e) => {
    e.preventDefault();

    alert("Sign In Success");
  };

  return (
    <div className="register">
      <a href="/">
        <img
          className="register__logo"
          src="https://i.pinimg.com/originals/0a/cd/50/0acd5002683fbcf2b720004f201ee530.jpg"
          alt=""
        />
      </a>
      <div className="register__form">
        <h1>Registration Form</h1>
        <form>
          <h5>Username</h5>
          <input
            className="register__username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5>Password</h5>
          <input
            className="register__password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Email</h5>
          <input
            className="register__email"
            type="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="register__registerButton"
            onClick={registerAccount}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
