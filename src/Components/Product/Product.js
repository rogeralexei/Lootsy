import React,{useState} from 'react'
import "./product.css"
import {Link} from "react-router-dom"
import {useCarContext} from "../../Context/CarContext"
import {store} from "react-notifications-component"

function Product({product}) {
    const [counter, setCounter]=useState(1)
    const carContext = useCarContext()
    const token=window.localStorage.getItem("token")



    const addCart = () => {
        const productToAdd = {...product, quantity: counter}
        carContext.setCar([...carContext.car, productToAdd])
        store.addNotification({
            title: "Product Added Successfully",
            message: `${counter} ${product.product_name} added to the car`,
            type: "success",
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
    }

    return (
        <div id="main">
        <div  className="product">
            <div className="product-image">
                <img src={product.image || product.images} alt="" />
            </div>
            <div className="product-content">
                <h2>{product.product_name}</h2>
                <p>{product.description}</p>
                <h4>{product.brand}</h4>
                <h5>Category: {product.category}</h5>
                <div className="product-counter">
                    <button onClick={()=>setCounter(counter>1?counter-1:counter)}>-</button>
                    <p>{counter}</p>
                    <button onClick={()=>setCounter(counter+1)}>+</button>
                </div>
                {token?<button className="purchase-btn" onClick={addCart}>BUY</button>:(
                <div>
                <button className="purchase-btn deactivated">BUY</button>
                <p className="call-log">You should <Link className="login-link" to="/login">login</Link> in order to buy this product</p>
                </div>)}

            </div>
        </div>
        </div>
    )
}

export default Product
