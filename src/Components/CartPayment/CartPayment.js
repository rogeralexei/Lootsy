import React from 'react'
import "./CartPayment"
import {useCarContext} from "../../Context/CarContext"

function CartPayment() {
    const context=useCarContext();
    let total=0;

    return (
        <>
            <div className="main-payment"> 
           {context.car.map((product,index)=>{
               {total+=product.quantity*product.price}
               return(
               <div className="cart-payment" key={index}>
                <h4>{product.product_name}</h4>
                <p>{product.quantity} X ${product.price}</p>
                <p>${product.quantity*product.price}</p>
                </div>
           )
           })} 
           <div className="cart-total">
                <h4>Total:</h4>
                <h4>${total}</h4>
           </div>
           </div>
        </>
    )
}

export default CartPayment
