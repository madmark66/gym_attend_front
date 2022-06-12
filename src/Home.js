import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import {AuthContext} from "./login.js";



function Home() {

  const user = useContext(AuthContext);
  
  return (

    <div className="App">

        <h1 align="center">HOME page</h1>
        
              
        {user}
        <a href='/'><Button>登入</Button></a>
        <a href='/register'><Button variant="secondary">新會員加入</Button></a>
        
      
    </div>
  
  );
}

export default Home;