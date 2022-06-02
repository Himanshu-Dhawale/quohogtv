import React from 'react'
import {
  useState
} from "react";
import axios from "axios";
import { useAuth } from "../contexts/auth-context";
import "./login.css"
export default function Login() {


      const [userDetail, setUserDetail] = useState({
    email: "",
    password: ""
  });
  const { user,setUser } = useAuth();

    const changeHandler = (e) => {
      setUserDetail((previousState) => ({
        ...previousState,
        [e.target.name]: e.target.value,
      }));
    };
console.log(user)
    const loginHandler = async (isUser) => {
      try {
        const loginData = await axios.post(
          "/api/auth/login",

          { email: "adarshbalika@gmail.com", password: "adarshBalika123" }

        );
        setUser({
          user: loginData.data.foundUser,
          token: loginData.data.encodedToken,
        });

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
              <input name="password" onChange={(e) => changeHandler(e)} value={userDetail.password}
                type="password" placeholder="Enter password"
                className="input-field" />
              <br />
            </div>
            <button
              className="login__button"
              type="submit"
            >
              Test credentials
            </button>
            <button className="login__button" type="submit" onClick={loginHandler(false)}>
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