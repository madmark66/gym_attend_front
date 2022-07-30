import "./index.css";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import useAuth from './hooks/useAuth';


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const { registerUser, error } = useAuth();

  let values = {
  name: name,  
  email: email,
  password: password 
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  //sending out registration values when clicking submit button
  const handleRegistration = async (e) => {
      await registerUser(values);
  }

  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required",
            minLength: {
              value: 6,
              message: "Name must have at least 6 characters"
            } 
    },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  const handleNameChange = (e) => { 
  setName(e.target.value) 
  }

  const handleEmailChange = (e) => { 
    setEmail(e.target.value) 
  }

  const handlePasswordChange = (e) => { 
    setPassword(e.target.value) 
  }

    return (
      <div className="Register">
        <div class="form-container">
          <form class="register-form" onSubmit={handleSubmit(handleRegistration, handleError)}>
              <label>帳號</label>
              <input
                id="name"
                class="form-field"
                type="text"
                placeholder="Name"
                name="name"            
                {...register('name', registerOptions.name )}
                value={name} onChange={handleNameChange}
              />
              <small className="text-danger">
                {errors?.name && errors.name.message}
              </small>
              
              <label>電子信箱</label>
              <input
                id="email"
                class="form-field"
                type="email"
                placeholder="Email"
                name="email"           
                {...register('email', registerOptions.email)}
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
                {...register('password', registerOptions.password)}
                value={password} onChange={handlePasswordChange}

              />
              <small className="text-danger">
                {errors?.password && errors.password.message}
              </small>

              <button class="form-field" type="submit" >
                申請會員
              </button>
        </form>
        </div>
      </div>
    );
}


export default Register;