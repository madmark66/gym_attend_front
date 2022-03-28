import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddClassRecord from "./addClassRecord";
import Home from "./home";

function App() {

  return (
  <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addClassRecord' element={<AddClassRecord/>} />
              
          </Routes>

  </Router>
  );
}

export default App;
