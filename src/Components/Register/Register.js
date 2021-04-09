import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../redux/action";

import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const message = useSelector((state) => state.message.message);

  const dispatch = useDispatch();
  const history = useHistory();

  const registerAccount = (e) => {
    e.preventDefault();

    dispatch(register(username, password, email))
      .then(() => {
        alert("Register Success");

        history.push("/login");
      })
      .catch((err) => {
        const text = message || "Register Failed";

        alert(text);
      });
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
