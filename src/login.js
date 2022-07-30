import "./index.css";
import React, { useContext, useState, useEffect, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import useAuth from './hooks/useAuth';
import { UserContext } from './App'; 
var moment = require('moment');

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {user, setUser}   = useContext(UserContext);

  const { loginUser } = useAuth();

  let values = {  
    email: email,
    password: password 
  };

  //sending out login values when clicking submit button
  const handleLogin = async () => {  
    await loginUser(values);
  };

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
        
          <form class="register-form" onSubmit={handleSubmit(handleLogin)}>
              
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

export default Login;




 