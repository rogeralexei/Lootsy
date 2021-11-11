import React,{useState,useRef} from 'react'
import "./NewProduct.css"
import {useUserContext} from "../../Context/UserContext"
import Footer from "../../Components/Footer/Footer"
import axios from "axios"
import {store} from "react-notifications-component"

function NewProduct() {
    const {user}=useUserContext()
    const [product,setProduct] = useState({})
    const token=window.localStorage.getItem("token")
    const formRef=useRef(null)

    const handleChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setProduct({...product,[name]:value})
    }

    const handleSubmit=async (e)=>{
        console.log(e)
        e.preventDefault()
        await axios.post("https://ecomerce-master.herokuapp.com/api/v1/item",product,{
            headers:{
                "Authorization": `JWT ${token}`
            }
        })
        .then(response=>{
            console.log(response)
            store.addNotification({
                title: "Congratulations!",
                message: "Product added succesfully",
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
            formRef.current.reset()
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <>
            <div className="createNewProduct">
                <div className="new-product-header">
                    <h2 className="new-title">Hello {user.first_name}!</h2>
                    <p>It seems that you want to sell something new. Let's do it!</p>
                </div>
                <div className="new-product-form">
                    <form onSubmit={handleSubmit} ref={formRef}>
                    <input type="text" name="product_name" placeholder="Product name"  onChange={handleChange} required/>
                    <input type="text" name="description" placeholder="Description"  onChange={handleChange} required/>
                    <input type="number" name="price" placeholder="Price"  onChange={handleChange} required/>
                    <input type="text" name="category" placeholder="Category"  onChange={handleChange} required/>
                    <input type="text" name="brand" placeholder="Brand"  onChange={handleChange} required/>
                    <input type="text" name="sku" placeholder="SKU"  onChange={handleChange} required/>
                    <input type="text" name="image" placeholder="Image Link" onChange={handleChange} required/>
                    <button type="submit">Añadir Producto</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default NewProduct
