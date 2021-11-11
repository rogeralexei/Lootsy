import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import axios from 'axios'
import "./Login.css"
import lootsy_logo from "../../assets/Images/lootsy-logo-white.png"

function Login() {
    const [person,setPerson]=useState({email:"",password:""})
    const history=useHistory()

    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setPerson({...person, [name]:value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        await axios.post("https://ecomerce-master.herokuapp.com/api/v1/login", person)
        .then(response=>{
            if(response.status===200){
                window.localStorage.setItem("token", response.data.token);
                window.localStorage.setItem("role", response.data.role);
                history.push("/")
            }else{
                console.log("Error: " + response.status)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <>
            <div className="form-container">
                <Link className="form-logo" to="/">
                <img src={lootsy_logo} alt="" />
                </Link> 
                <div className="form-content">
                    <h2>Log in to your account</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input id="email" type="text" name="email" onChange={handleChange} placeholder="Email Address" />
                    <input id="password" type="password" name="password" onChange={handleChange} placeholder="Password" />
                    <button type="submit" className="btn">Login</button>
                </form>
                <hr />
                <div className="extra-register">
                <h3>Not registered yet?</h3>
                <Link to="/signup">
                <button className="btn">Register for free</button>
                </Link>
                </div>
                </div>
                <div className="circle top-right"></div>
                <div className="circle bottom-left"></div>
            </div>
        </>
    )
}

export default Login
