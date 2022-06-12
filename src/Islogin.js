import { useContext } from 'react';
import {AuthContext} from "./login.js";


function Islogin() {
    const user = useContext(AuthContext);
    console.log(user);

    const userFinal = { loggedIn: true };
    return userFinal && userFinal.loggedIn;
  };


  export default Islogin;