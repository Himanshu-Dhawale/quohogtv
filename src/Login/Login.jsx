import React from 'react'
import {useState} from "react";
import axios from "axios";
import { useAuth } from "../contexts/auth-context";
import "../Login/Login.css"
import { useLocation, useNavigate } from 'react-router-dom';
export default function Login() {
const navigate = useNavigate()
const location = useLocation();
const from = location.state?.from?.pathname || "/";

      const [userDetail, setUserDetail] = useState({
    email: "",
    password: ""
  });
  const { user,setUser } = useAuth();
console.log(user, "from login")
    const changeHandler = (e) => {
      setUserDetail((previousState) => ({
        ...previousState,
        [e.target.name]: e.target.value,
      }));
    };
    const guestLoginHandler = async (e) => {
      e.preventDefault()
      // console.log(guestLoginHandler)
      
      try {
        const loginData = await axios.post(
          "/api/auth/login",

          { email: "adarshbalika@gmail.com", password: "adarshBalika123" } );
          // console.log(loginData);
          localStorage.setItem(`token`, loginData.data.encodedToken)
        setUser({
          user: loginData.data.foundUser,
          token: loginData.data.encodedToken,
        });
        navigate(from, { replace: true });

      } catch (error) {
        console.log(error.response);
      }
    };
    const loginHandler = async (e) => {
      e.preventDefault()
      try {
        const loginData = await axios.post(
          "/api/auth/login",

          { email: "adarshbalika@gmail.com", password: "adarshBalika123" } );
          // console.log(loginData);
          localStorage.setItem(`token`, loginData.data.encodedToken)
        setUser({
          user: loginData.data.foundUser,
          token: loginData.data.encodedToken,
        });
        // navigate(from, { replace: true });
        console.log(loginData.data.encodedToken, "from token");


      } catch (error) {
        console.log(error.response);
      }
    };
    return (
      <div>
        <div className="login__outer">
          <form className="login">
            <h1 className="login__title">Log in</h1>
            <div className="login__fields">
              <p htmlFor="email">Email</p>
              < input name="email" onChange={(e) => changeHandler(e)} value={userDetail.email}
                type="email"
                placeholder="Enter email"
                className="input-field" />
              <br />
              <p htmlFor="password">Password</p>
                <input name='password' onChange={(e) => changeHandler(e)} value={userDetail.password}
                type="text" placeholder="Enter password"
                className="input-field" />
              <br />
            </div>
            <button
              className="login__button"
              type="submit"
              onClick={guestLoginHandler}
            >
              Test credentials
            </button>
            <button className="login__button" type="submit" onClick={ loginHandler}>
              Login
            </button>
            <div className="login__remember">
              <input type="checkbox" />
              <span> Remember me</span>
            </div>
            <p>
              Don't have an account ? SignUp
            </p>
          </form>
        </div>
      </div>
    )
  }
export {Login}