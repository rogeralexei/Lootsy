import React, {useState,useEffect} from 'react';

const CarContext=React.createContext();

const CarProvider=(props)=>{
    const [car,setCar]=useState([])
    
    useEffect(()=>{
        const data= localStorage.getItem("car")
        if(data){
            setCar(JSON.parse(data))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('car',JSON.stringify(car))
    })

    const value={
        car,
        setCar
    }

    return(
        <CarContext.Provider value={value} {...props}/>
    )
}

const useCarContext=()=>{
    const context=React.useContext(CarContext)
    return context;
}

export{
    CarProvider,
    useCarContext
}