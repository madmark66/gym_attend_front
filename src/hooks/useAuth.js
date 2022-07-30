import { useState, useContext, useEffect } from 'react'; 
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App';  

export default function useAuth() {
    let history = useHistory();
    const {user, setUser}   = useContext(UserContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(localStorage.getItem('jwt')) {
          setUser(localStorage.getItem('jwt'));
        }
    }, []);
      
    useEffect(() => {
        localStorage.setItem('jwt', user);
    }, [user]);


    //set user after receiving data by using get method from server
    const setUserContext = async () => {
        const instance = axios.create({
            withCredentials: true
          })
        return await instance.get('http://localhost:8080/user').then(res => {         
            setUser(res.data.currentUser._id);  
            history.push('/ClassRecord');                     
            })
    }

    //register user  
    const registerUser = async (data) => {
        
        const instance = axios.create({
            withCredentials: true
          })
        const { name, email, password } = data;
            return instance.post("http://localhost:8080/register", {
                  name,
                  email,
                  password
            
                }, {withCredentials: true}).then(async () => {
                    await setUserContext();
                })
        };

    //login user 
    const loginUser = async (data) => {
        const instance = axios.create({
            withCredentials: true
          })
        const { email, password } = data;
            return instance.post('http://localhost:8080/login', {
                email,
                password,
            }, {withCredentials: true}).then(async () => {
                await setUserContext();
            })
            
        };

    return {
        registerUser,
        loginUser,
       
    }
}


