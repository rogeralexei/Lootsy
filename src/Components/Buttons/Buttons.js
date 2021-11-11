import React from 'react'
import {Link} from 'react-router-dom'
import "./Buttons.css"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useCarContext} from "../../Context/CarContext"

function Buttons() {
    const {car}=useCarContext();
    const role=window.localStorage.getItem("role");
    const token=window.localStorage.getItem("token");

    return (
        <>
        {token &&
        <div className="buttons">
        <Link className="new-product" to="/newproduct">
            {role==="ADMIN" && <div className="add-item">
                <p>+</p>
            </div>}
        </Link>
        <Link className="shopping-cart" to="/cart">
        <div className="shopping-car">
            <div className="red-circle">
                <p>{car.length}</p>
                </div>
            <FontAwesomeIcon className="shopping-icon" icon={faShoppingCart}/>
        </div> 
        </Link> 
        </div>
        }
        </>
    )
}

export default Buttons;
