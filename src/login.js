import "./index.css";
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//import jwt_decode from "jwt-decode";
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
var moment = require('moment');



function Login() {

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refreshToken });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create()

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     let currentDate = new Date();
  //     const decodedToken = jwt_decode(user.accessToken);
  //     if (decodedToken.exp * 1000 < currentDate.getTime()) {
  //       const data = await refreshToken();
  //       config.headers["authorization"] = "Bearer " + data.accessToken;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", { username, password });
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    setSuccess(false);
    setError(false);
    try {
      await axiosJWT.delete("/users/" + id, {
        headers: { authorization: "Bearer " + user.accessToken },
      });
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };



  return (
    <div className="login">
       <h1 align="center">Welcome!!ようこそ！！歡迎!!</h1>
       <h1 align="center">悉力運動教室</h1>

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="register">加入會員</Navbar.Brand>
            
            
          </Container>
        </Navbar>

      <div class="form-container">

        <form class="register-form">
            {/* Uncomment the next line to show the success message */}
            {/* <div class="success-message">Success! Thank you for registering</div> */}
            <input
              id="first-name"
              class="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
            />
            {/* Uncomment the next line to show the error message */}
            {/* <span id="first-name-error">Please enter a first name</span> */}
            <input
              id="last-name"
              class="form-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
            />
            {/* Uncomment the next line to show the error message */}
            {/* <span id="last-name-error">Please enter a last name</span> */}
            <input
              id="email"
              class="form-field"
              type="text"
              placeholder="Email"
              name="email"
            />
            {/* Uncomment the next line to show the error message */}
            {/* <span id="email-error">Please enter an email address</span> */}
            <button class="form-field" type="submit">
              登入
            </button>
       </form>
      </div>
  </div>

  );

}

export default Login;