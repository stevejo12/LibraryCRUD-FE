import React, { useState } from "react";

import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    alert("Sign In Success");
  };

  return (
    <div className="login">
      <a href="/">
        <img
          className="login__logo"
          src="https://i.pinimg.com/originals/0a/cd/50/0acd5002683fbcf2b720004f201ee530.jpg"
          alt=""
        />
      </a>
      <div className="login__form">
        <h1>Sign In</h1>
        <form>
          <h5>Username</h5>
          <input
            className="login__username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5>Password</h5>
          <input
            className="login__password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
          <div className="login__register">
            Doesn't have account? <a href="/register">Register here</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
