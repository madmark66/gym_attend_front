import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddClassRecord from "./addClassRecord";
import AddPaymentRecord from "./addPaymentRecord";
import Home from "./home";
import Revenue from './revenue';
import PersonShowedUp from './personShowedUp';
import RemainingDeadline from './remainingDeadline';
import Payment from './payment';


function App() {

  return (
  <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/addClassRecord' element={<AddClassRecord/>} />
            <Route path='/addPaymentRecord' element={<AddPaymentRecord/>} />
            <Route path='/revenue' element={<Revenue/>} />
            <Route path='/personShowedUp' element={<PersonShowedUp/>} />
            <Route path='/remainingDeadline' element={<RemainingDeadline/>} />
          </Routes>

  </Router>
  );
}

export default App;
