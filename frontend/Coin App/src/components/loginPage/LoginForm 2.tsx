import React, { useState } from "react";
import "../pages/LoginPageStyles.css";

export default function LoginForm() {
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleChange(event: { target: { name: any; value: any } }) {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  }

  return (
    <form>
      <h1 className="logintitle">MS CRYPTO WALLET</h1>
      <h2 className="companyname">Mega Safe</h2>
      <p>Please fill in this form to create an account.</p>

      <label htmlFor="UserName">
        <b>UserName</b>
      </label>
      <input
        value={newUser.userName}
        type="text"
        placeholder="Enter UserName"
        name="UserName"
        id="UserName"
        required
        onChange={handleChange}
      />

      <label htmlFor="psw">
        <b>Email</b>
      </label>
      <input
        value={newUser.email}
        type="email"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
        onChange={handleChange}
      />

      <label htmlFor="psw-repeat">
        <b>Password</b>
      </label>
      <input
        value={newUser.password}
        type="password"
        placeholder="Password"
        name="psw"
        id="psw"
        required
        onChange={handleChange}
      />

      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      {/* <p>Already have an account? <a href="#">Sign in</a>.</p> */}
    </form>
  );
}
