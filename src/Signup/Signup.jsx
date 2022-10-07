import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./signup.css"
import {useAuth} from "../contexts/auth-context";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  const [signUpUser, setSignUpUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const {setUser } = useAuth();
  const signUpChangeHandler = (e) => {
    setSignUpUser((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const signUpClickHandler = async (e) => {
   e.preventDefault()
    try {
      const signUpData = await axios.post("/api/auth/signup",  {firstName: signUpUser.firstName, lastName: signUpUser.lastName, email: signUpUser.email, password: signUpUser.password });
      console.log(signUpData);
      setUser({
        user: signUpData.data.createdUser,
        token: signUpData.data.encodedToken,
      });
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
        <div className="login__outer signup__outer">
      <form className="login signup">
        <h1 className="login__title">Sign Up</h1>
        <div className="login__fields">
          <p htmlFor="name">Name</p>
          <input
            type="text"
            placeholder="Enter name"
            name="firstName"
            onChange={(e) => signUpChangeHandler(e)}
            value={signUpUser.firstName}
          />
          <input
            type="text"
            placeholder="Enter last name"
            name="lastName"
            onChange={(e) => signUpChangeHandler(e)}
            value={signUpUser.lastName}
          />
          <br />
          

          <p htmlFor="email">Email</p>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => signUpChangeHandler(e)}
            value={signUpUser.email}
          />
          <br />
          <p htmlFor="password">Password</p>
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            onChange={(e) => signUpChangeHandler(e)}
            value={signUpUser.password}
          />

        </div>
        <button className="login__button" onClick={signUpClickHandler}>
          Sign Up
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
    </div>
  )
}
export {Signup}