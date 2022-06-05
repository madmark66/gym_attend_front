import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";
//import { LoginContext } from './login';
import { useContext } from 'react';
//import {UseAuth} from './login';



const ProtectedRoutes = (props) => {

  const [auth, setAuth] = useState(false);
  const isAuth = () =>{
    // if(props.user){
    //   setAuth(true);
    // }else {
    //   setAuth(null);
    // }

    // if (auth) {
    //   return (auth ? <Outlet /> : <Navigate to="/" />);
    // }

    if(props.user){
        setAuth(true);
      }

  }

  
  
  console.log(auth);

  useEffect(() => {
    isAuth();
  }, [setAuth]);
  

  return (auth ? <Outlet /> : <Navigate to="/home" />);
};

export default ProtectedRoutes;