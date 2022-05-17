import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import AddClassRecord from "./addClassRecord";
import AddPaymentRecord from "./addPaymentRecord";
import ClassRecord from "./ClassRecord";
import Revenue from './revenue';
import PersonShowedUp from './personShowedUp';
import RemainingDeadline from './remainingDeadline';
import Payment from './payment';
import ProtectedRoutes from "./ProtectedRoutes.jsx";


function App() {

  return (
  <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
              <Route element={<ProtectedRoutes />}>
                <Route path='/ClassRecord' element={<ClassRecord />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/addClassRecord' element={<AddClassRecord/>} />
                <Route path='/addPaymentRecord' element={<AddPaymentRecord/>} />
                <Route path='/revenue' element={<Revenue/>} />
                <Route path='/personShowedUp' element={<PersonShowedUp/>} />
                <Route path='/remainingDeadline' element={<RemainingDeadline/>} />
              </Route>
          </Routes>

  </Router>
  );
}

export default App;
