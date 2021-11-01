import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Footer from "../../Components/Footer/Footer"
import Product from "../../Components/Product/Product"

// TODO: Work on Product Page
function ProductPage() {
    const [product,setProduct]= useState({})
    const {id}=useParams()

    const dataFetching= async ()=>{
        const response=await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`)
        const product=response.data
        setProduct(product)
    }

    useEffect(() => {
        dataFetching()
    },[])

    return (
        <>
            <Product product={product}/>
            <Footer/>
        </>
    )
}

export default ProductPage;
