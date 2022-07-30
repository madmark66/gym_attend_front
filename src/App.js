import React, { createContext,useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddClassRecord from "./addClassRecord";
import AddPaymentRecord from "./addPaymentRecord";
import ClassRecord from "./ClassRecord";
import Revenue from './revenue';
import PersonShowedUp from './personShowedUp';
import RemainingDeadline from './remainingDeadline';
import Payment from './payment';
import ProtectedRoutes from "./ProtectedRoutes.jsx";


export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(null);

  return (
  <Router>
       
          <UserContext.Provider value={{ user, setUser }}>            
            <Switch>
              
              <Route exact path='/' >
                <Login />
              </Route>

              <Route exact path='/register' >
                <Register />
              </Route>

              <ProtectedRoutes path="/ClassRecord" exact component={ClassRecord}/>
              <ProtectedRoutes path="/addClassRecord" exact component={AddClassRecord}/>
              <ProtectedRoutes path="/payment" exact component={Payment}/>
              <ProtectedRoutes path="/addPaymentRecord" exact component={AddPaymentRecord}/>
              <ProtectedRoutes path="/revenue" exact component={Revenue}/>
              <ProtectedRoutes path="/personShowedUp" exact component={PersonShowedUp}/>
              <ProtectedRoutes path="/remainingDeadline" exact component={RemainingDeadline}/>

            </Switch>
          </UserContext.Provider>  

  </Router>
  );
}

export default App;
