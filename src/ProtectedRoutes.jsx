import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

export default function ProtectedRoutes(props) {   
  let user = null;

  if(localStorage.getItem('jwt')) {
    user = localStorage.getItem('jwt');
  }

  const { component: Component,
      ...rest } = props;


    if(user){
      return ( <Route {...rest} render={(props) => (<Component {...props}/>)}/>)
      } else {
        return <Redirect to='/'/> 
      }

}