import React, {useState,useEffect} from 'react';
import axios from 'axios';

const ProductsContext=React.createContext();

const ProductsProvider=(props)=>{
    const [data,setData]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const dataFetching= async ()=>{
        const response=await axios.get("https://ecomerce-master.herokuapp.com/api/v1/item")
        const products=response.data
        setData(products)
        setIsLoading(false)
    }

    useEffect(()=>{
        dataFetching()
    },[])
    
    const value={
        data,
        isLoading
    }

    return(
        <ProductsContext.Provider value={value} {...props}/>
    )
}

const useProductsContext=()=>{
    const context=React.useContext(ProductsContext)
    return context;
}

export{
    ProductsProvider,
    useProductsContext
}