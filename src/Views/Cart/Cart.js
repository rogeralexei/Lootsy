import React from 'react'
import "./Cart.css"
import {CarProvider} from "../../Context/CarContext"
import CartProducts from '../../Components/CartProducts/CartProducts'
import CartPayment from '../../Components/CartPayment/CartPayment'
import Footer from "../../Components/Footer/Footer"

function Cart() {
    return (
        <>
            <CarProvider>
            <div className="cart">
                <div className="product-section">
                    <h2 className="shopping-cart-title">Shopping Cart</h2>
                    <CartProducts/>
                </div>
                <div className="payment-section">
                    <h2 className="shopping-cart-payment">Total</h2>
                    <CartPayment/>
                </div>
            </div>
            <Footer/>
            </CarProvider>
        </>
    )
}

export default Cart
