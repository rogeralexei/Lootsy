import React,{useState} from 'react'
import "./product.css"

function Product({product}) {
    const [counter, setCounter]=useState(1)

    return (
        <div id="main">
        <div  className="product">
            <div className="product-image">
                <img src={product.image} alt="" />
            </div>
            <div className="product-content">
                <h2>{product.product_name}</h2>
                {/* TODO: Add length logic */}
                <p>{product.description}</p>
                <h4>{product.brand}</h4>
                <h5>Category: {product.category}</h5>
                <div className="product-counter">
                    {/* TODO: Add -1 logic */}
                    <button onClick={()=>setCounter(counter-1)}>-</button>
                    <p>{counter}</p>
                    <button onClick={()=>setCounter(counter+1)}>+</button>
                </div>
                <button className="purchase-btn">BUY</button>
            </div>
        </div>
        </div>
    )
}

export default Product
