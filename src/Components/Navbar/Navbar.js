import React,{useState,useEffect} from 'react'
import logo from "../../assets/Images/lootsy-logo.png"
import {Link} from "react-router-dom"
import Search from "../Search/Search"
import {ProductsProvider} from "../../Context/ProductsContext"
import axios from 'axios'

const Navbar=()=>{
    const [user,setUser]=useState({})
    let token=window.localStorage.getItem("token")

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
        if(token){
            fetchUser()
        }
    },[token])

    return(
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-logo">
                       <Link to="/"><img src={logo} alt="Logo" /></Link> 
                    </div>
                    <ProductsProvider>
                    <Search />
                    </ProductsProvider>
                    <div className="navbar-buttons">
                            {token?(
                            <ul>
                            <div className="nav-user">
                                <p className="user-name">Hello, {user.first_name}</p>
                            </div>
                            <Link className="nav-item" to="/logout">
                            <li>Logout</li>
                            </Link>
                            </ul>)
                            :
                            (<ul>
                            <Link className="nav-item" to="/login">
                            <li>Login</li>
                            </Link>
                            <Link className="nav-item" to="/signup">
                            <li >Sign Up</li>
                            </Link>
                            </ul>)}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;