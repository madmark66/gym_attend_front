import "./index.css";
import React, { useContext, useState, useEffect, createContext } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//import jwt_decode from "jwt-decode";
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./Home"
var moment = require('moment');

export const AuthContext = createContext();

export const AppContextProvider = ({ children }) => {
        return(
        <AuthContext.Provider value='test1'>
                    {children}
        </AuthContext.Provider>
        )
        
}

function Login() {

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  let history = useHistory();
  

  const handleLogin = async () => {
    //e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post("http://localhost:8080/login", 
      { email, password });
      
      //const serverRes = await res.data;
      setUser(res.data);

      // if(serverRes){
      //   setUser(res.data);
      //   return (<ProtectedRoutes user={user}/>);
      // }
      
      history.push('/ClassRecord'); //login帳號OK就轉到classRecord
    } catch (err) {
      console.log(err);
    }
  };

  const handleError = (errors) => {};

  

  const loginOptions = {
    
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };
  
  const handleEmailChange = (e) => { 
      setEmail(e.target.value) 
  }
  
  const handlePasswordChange = (e) => { 
      setPassword(e.target.value) 
  }


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
        
          <form class="register-form" onSubmit={handleSubmit(handleLogin, handleError)}>
              
              <label>電子信箱</label>
              <input
                id="email"
                class="form-field"
                type="email"
                placeholder="Email"
                name="email"           
                {...register('email', loginOptions.email)}
                value={email} onChange={handleEmailChange}
              />
              <small className="text-danger">
                {errors?.email && errors.email.message}
              </small>
              
              <label>密碼</label>
              <input
                id="password"
                class="form-field"
                type="password"
                placeholder="Password"
                name="password"
                {...register('password', loginOptions.password)}
                value={password} onChange={handlePasswordChange}

              />
              <small className="text-danger">
                {errors?.password && errors.password.message}
              </small>

              <button class="form-field" type="submit" >
                會員登入
              </button>
              
              
        </form>
        </div>   
           
      
  </div>

  
  );
  
  
}

// function UseAuth (props) {
  
//   if (props.user){
//     return true;
//   } else {
//     return false;
//   }
  
// }

//export {Login, UseAuth};

export default Login;




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



  // const handleDelete = async (id) => {
  //   setSuccess(false);
  //   setError(false);
  //   try {
  //     await axiosJWT.delete("/users/" + id, {
  //       headers: { authorization: "Bearer " + user.accessToken },
  //     });
  //     setSuccess(true);
  //   } catch (err) {
  //     setError(true);
  //   }
  // };





// {/* <div class="form-container">

// <form class="register-form">
//     {/* Uncomment the next line to show the success message */}
//     {/* <div class="success-message">Success! Thank you for registering</div> */}
//     <input
//       id="first-name"
//       class="form-field"
//       type="text"
//       placeholder="First Name"
//       name="firstName"
//     />
//     {/* Uncomment the next line to show the error message */}
//     {/* <span id="first-name-error">Please enter a first name</span> */}
//     <input
//       id="last-name"
//       class="form-field"
//       type="text"
//       placeholder="Last Name"
//       name="lastName"
//     />
//     {/* Uncomment the next line to show the error message */}
//     {/* <span id="last-name-error">Please enter a last name</span> */}
//     <input
//       id="email"
//       class="form-field"
//       type="text"
//       placeholder="Email"
//       name="email"
//     />
//     {/* Uncomment the next line to show the error message */}
//     {/* <span id="email-error">Please enter an email address</span> */}
//     <button class="form-field" type="submit">
//       登入
//     </button>
// </form>
// </div> */}



  // const refreshToken = async () => {
  //   try {
  //     const res = await axios.post("/refresh", { token: user.refreshToken });
  //     setUser({
  //       ...user,
  //       accessToken: res.data.accessToken,
  //       refreshToken: res.data.refreshToken,
  //     });
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const axiosJWT = axios.create()