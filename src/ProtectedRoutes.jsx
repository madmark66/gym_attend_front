import React, { useContext } from 'react';
//import { Navigate, Outlet } from "react-router-dom";
import {AuthContext} from "./login";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';



const isAuthenticated = () => {
  //const user = useContext(AuthContext);
  //console.log(user);
  const userFinal = { loggedIn: false };
  return userFinal && userFinal.loggedIn;
};

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoutes;