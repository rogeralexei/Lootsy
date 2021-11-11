import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Test() {

    const [user,setUser]=useState({})
    const token=window.localStorage.getItem("token") || null;

    const fetchUser= async ()=>{
        await axios.get("https://ecomerce-master.herokuapp.com/api/v1/user/me",{
            headers:{
                "Authorization": `JWT ${token}`
            }
        }).then(response => {
            setUser(response.data.user);
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(()=>{
        if(token){
            fetchUser()
        }
    },[])

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Test
