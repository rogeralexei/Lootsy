import React, {useState,useEffect} from 'react';
import axios from 'axios';

const UserContext=React.createContext();

const UserProvider=(props)=>{
    const [user,setUser]=useState({})
    const token=window.localStorage.getItem("token");

    const fetchUser= async ()=>{
        await axios.get("https://ecomerce-master.herokuapp.com/api/v1/user/me",{
            headers:{
                "Authorization": `JWT ${token}`
            }
        }).then(response => {
            setUser(response.data.user);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchUser()
    },[token])
    
    const value={
        user
    }

    return(
        <UserContext.Provider value={value} {...props}/>
    )
}

const useUserContext=()=>{
    const context=React.useContext(UserContext)
    return context;
}

export{
    UserProvider,
    useUserContext
}