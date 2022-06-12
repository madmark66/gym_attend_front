import React, { useState, useEffect, useContext, createContext } from 'react';
import './App.css';
import MaterialTable from 'material-table'

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./login";
import {AppContextProvider} from "./login";
import Register from "./register";
import AddClassRecord from "./addClassRecord";
import AddPaymentRecord from "./addPaymentRecord";
import ClassRecord from "./ClassRecord";
import Revenue from './revenue';
import PersonShowedUp from './personShowedUp';
import RemainingDeadline from './remainingDeadline';
import Payment from './payment';
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Home from "./Home"




function App() {
//<Home />
  return (
    <Router>
        <Switch>
                    <AppContextProvider>                         
                      <Route exact path='/home'> <Home /> </Route>  
                      <Route exact path='/'>     <Login /></Route>
                      <Route exact path='/register'> <Register />     </Route> 
                        <Route exact element={<ProtectedRoutes />}>
                          <Route path='/ClassRecord' exact element={<ClassRecord />} />
                          <Route path='/ClassRecord' exact element={<ClassRecord />} />
                          <Route path='/payment' exact element={<Payment />} />
                          <Route path='/addClassRecord' exact element={<AddClassRecord/>} />
                          <Route path='/addPaymentRecord' exact element={<AddPaymentRecord/>} />
                          <Route path='/revenue' exact element={<Revenue/>} />
                          <Route path='/personShowedUp' exact element={<PersonShowedUp/>} />
                          <Route path='/remainingDeadline' exact element={<RemainingDeadline/>} />
                        </Route> 
                    </AppContextProvider>
        </Switch>
    </Router>
  );
}

export default App;
