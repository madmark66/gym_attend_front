import React from 'react';
import { Navigate, Outlet } from "react-router-dom";


const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  //const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;