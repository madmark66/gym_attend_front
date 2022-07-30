import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function useFindUser() {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() =>{
        async function findUser() {
        await axios.get('http://localhost:8080/user')
        .then(res => {
            console.log('useFindUser', res.data.currentUser._id)
            setUser(res.data.currentUser);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
        });
        }
        
        findUser();  
    }, []);
    
    return (
        user,
        setUser,
        isLoading
    )
}