import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/LoginPageStyles.css";

const initialFormState = {
    userName: "",
    email: "",
    password: "",
  }

  type newUserType = {
    userName: string,
    email: string,
    password: string
  }
export default function LoginForm() {
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const createNewUser = async (userName, email, password) => {
    const newUserToCreate = {
      userName,
      email, 
      password
    }
   
    const createdUser  = await fetch(`http://localhost:4000/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserToCreate),
    }).then(res => res.json());

    if(createdUser.Error){
       
     console.log(Error);
     
       
    } 
    else {
      console.log('Created user:', createdUser);
      
    }
  }

 function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    createNewUser(newUser.userName, newUser.email, newUser.password)
    setNewUser(initialFormState);
  }

  function handleChange(event: { target: { name: any; value: any } }) {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className="logintitle">MS CRYPTO WALLET</h1>
      <h2 className="companyname">Mega Safe</h2>
      <p>Please fill in this form to create an account.</p>

      <label htmlFor="userName">
        <b>UserName</b>
      </label>
      <input
        value={newUser.userName}
        autoComplete="new-password"
        type="text"
        placeholder="Enter UserName"
        name="userName"
        id="userName"
        required
      
        onChange={handleChange}
        
      />

      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input
        value={newUser.email}
        autoComplete="new-password"
        type="email"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
        onChange={handleChange}
        
      />

      <label htmlFor="password">
        <b>Password</b>
      </label>
      <input
        value={newUser.password}
        autoComplete="new-password"
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        required
        onChange={handleChange}
        
      />

      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>
      <Link to="/wallet/">
        <input
          className="form__submit"
          type="submit"
          value="Click to Sign In/Up"
        />
        </Link>
      {/* <button className="LogInButton">Click to Sign In/Up</button> */}
      {/* <p>Already have an account? <a href="#">Sign in</a>.</p> */}
    </form>
  );
}
