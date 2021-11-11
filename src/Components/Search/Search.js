import React,{useState,useRef} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import {useProductsContext} from "../../Context/ProductsContext"
import {Link} from "react-router-dom"
import nopic from "../../assets/Images/nopic.png"
import "./Search.css"

function Search() {

    const context = useProductsContext();

    const [filteredData,setFilteredData]=useState([])
    const [searchValue,setSearchValue]=useState("")
    const resultControl=useRef(null)

    const handleFilter=(e)=>{
        const value=e.target.value
        const data=context.data
        setSearchValue(value)
        if (searchValue.length<=1){
            resultControl.current.style.display="none"
        }
        else if(searchValue!==""){
            resultControl.current.style.display="block"
            const getFilter=data.filter(product => {
                return product.product_name.toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredData(getFilter)
        }else{
            setFilteredData([])
        }
    }

    const handleCleanup = ()=>{
        setSearchValue("");
        setFilteredData([]);
    }


    return (
        <>
        <div className="navbar-search">
            <form>
            <input className='search-input' type='text' placeholder='Find a loot' onChange={handleFilter}/>
            </form>
            <button type='submit' alt="Search"><FontAwesomeIcon icon={faSearch}/></button>
            <div className='result-wrapper' ref={resultControl}>
                <div className='result'>
                {filteredData.length !== 0 && (
                filteredData.slice(0,10).map(product => {
                    return (
                    <Link onClick={handleCleanup} className='dataItem' to={"/product/"+product._id} key={product._id} >
                        <div className="searched-item">
                            <div className="searched-image">
                            <img src={product.image || product.images || nopic} alt="product" />
                            </div>
                            <p>{product.product_name}</p>
                        </div>
                    </Link>)
                })
                )}
            </div>
        </div>
        </div>
        </>
    )
}

export default Search
