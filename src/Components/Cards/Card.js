import React from 'react'
import "../../assets/css/cards.css"
import nopic from "../../assets/Images/nopic.png"
import {Link} from "react-router-dom"

function Card({product}) {
    return (
        <>
        <Link className="card" to={`/product/${product._id}`}>
                <div className="card-image">
                    <img src={product.image || product.images || nopic} alt="product" /> 
                </div>
                <div className="card-text">
                    <h3>{product.product_name}</h3>
                    <h4>{product.brand || "unknown"}</h4>
                    <h5>{product.category || "unknown"}</h5>
                </div>
                    <div className="card-price">
                        <p>${product.price || 0}</p>
                    </div>
        </Link>
        </>
    )
}

export default Card
