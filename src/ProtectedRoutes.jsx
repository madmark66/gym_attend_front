

import React, { useContext } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "./login";

const useAuth = () => {
  const user = useContext(AuthContext)
  const userFinal = { loggedIn: user };
  return userFinal && userFinal.loggedIn;
};

const ProtectedRoutes = () => {

  const isAuth = useAuth();
  //const isAuth = true;

  return (isAuth ? <Outlet /> : <Navigate to="/home" />);
};

export default ProtectedRoutes;