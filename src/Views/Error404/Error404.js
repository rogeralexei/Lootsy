import React from "react";
import {useHistory} from "react-router-dom"
import "./Error404.css"

const Error404=()=>{
    const history = useHistory()

    const handleClick = ()=>{
        history.goBack()
    }

    return (
        <>
        <div className="container-404">
            <div className="content-404">
            <h2>404</h2>
            <p>We are sorry! Website not found.</p>
            <button onClick={handleClick}>Go Back</button>
            </div>
        </div>
        </>
    )
}

export default Error404;