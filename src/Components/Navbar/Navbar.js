import React from 'react'
import logo from "../../assets/Images/lootsy-logo.png"
import search from "../../assets/Images/search.svg"
import {Link} from "react-router-dom"

const Navbar=()=>{
    return(
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-logo">
                       <Link to="/"><img src={logo} alt="Logo" /></Link> 
                    </div>
                    <div className="navbar-search">
                        <form>
                        <input className='search-input' type='text' placeholder='Find a loot'/>
                        <img src={search} alt="Search" />
                        </form>
                    </div>
                    <div className="navbar-buttons">
                        <ul>
                            <li className="nav-item">Login</li>
                            <li className="nav-item">Sign Up</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;