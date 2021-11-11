import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {store} from "react-notifications-component"
import axios from 'axios'
import "./SignUp.css"
import lootsy_logo from "../../assets/Images/lootsy-logo-white.png"

function SignUp() {
    const [person,setPerson]=useState({email:"",password:"",first_name:"", last_name:"", birth_date:"", gender:""})
    const history = useHistory();

    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setPerson({...person, [name]:value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        await axios.post("https://ecomerce-master.herokuapp.com/api/v1/signup", person)
        .then(response =>{
            if(response.status===200){
                history.push("/login")
            }else{
                console.log(response.status)
            }
        })
        .catch(err =>{
            store.addNotification({
                title: "There have been a problem while signing up",
                message: "Please try again",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true,
                  showIcon: true
                }
              });
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
                <h2>Register in <u>Lootsy</u> for free</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input id="role" type="text" name="role" onChange={handleChange} placeholder="Role"/>
                <input id="first_name" type="text" name="first_name" onChange={handleChange} placeholder="First Name" required/>
                <input id="last_name" type="text" name="last_name" onChange={handleChange} placeholder="Last Name" required/>
                <input id="birth_date" type="date" name="birth_date" onChange={handleChange} placeholder="Birth Date" required/>
                {/* TODO: SET DEFAULT VALUE */}
                <select onChange={handleChange} name="gender" id="gender" required>
                    <option value=""></option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
                <input id="email" type="email" name="email" onChange={handleChange} placeholder="Email" required/>
                <input id="password" type="password" name="password" onChange={handleChange} placeholder="Password" required/>
                <button type="submit" className="btn">Register</button>
            </form>
            <hr />
            <div className="extra-login">
            <h3>Already registered?</h3>
            <Link to="/login">
            <button className="btn">Login into your account</button>
            </Link>
            </div>
            </div>
            <div className="circle top-right"></div>
            <div className="circle bottom-left"></div>
            </div>
        </>
    )
}

export default SignUp;
