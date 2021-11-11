import React from 'react'
import {useCarContext} from "../../Context/CarContext"
import "./CartProducts.css"

function CartProducts() {
    const context = useCarContext()
    
    const deleteCard=(index)=>{
        console.log(index)
        const remaining=context.car.filter(value=>{
            return context.car.indexOf(value)!==index;
        })
        context.setCar(remaining)
    }

    const editQuantity=(index)=>{
        return
    }

    console.log(context.car)
    return (
        <>
            {context.car.map((product,index) =>{
                return(
                    <div className="product-card" key={index}>
                        <div className="product-card-content">
                        <div className="product-card-image">
                            <img src={product.image} alt={product.product_name} />
                        </div>
                        <div className="product-card-information">
                            <h3>{product.product_name}</h3>
                            <p>{product.category}</p>
                            <p>{product.brand}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>Price: ${product.price}</p>
                            <div className="product-card-buttons">
                                <button className="btn-delete"onClick={()=>deleteCard(index)}>Delete</button>
                                <button className="btn-edit" onClick={()=>editQuantity(index)}>Edit</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CartProducts
