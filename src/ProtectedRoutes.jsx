import React from 'react';
//import { Navigate, Outlet } from "react-router-dom";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from "./login.js";
import Islogin from "./Islogin.js";


const ProtectedRoutes = ({ component: Component, ...rest }) => {
  

  return (
    <Route
      {...rest}
      render={props =>
        Islogin() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoutes;