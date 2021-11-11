import React,{useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"
import {useProductsContext} from "../../Context/ProductsContext"
import CardList from "../Cards/CardList"

function Pagination() {
    const [currentPage,setCurrentPage]= useState(1)
    const [productsPerPage] = useState(16)
    
    // DECLARE CONTEXT
    const context=useProductsContext();
    let isLoading=context.isLoading;

    // PAGINATION LOGIC
    const indexOfLast=currentPage * productsPerPage;
    const indexOfFirst=indexOfLast - productsPerPage;
    const currentProducts= context.data.slice(indexOfFirst, indexOfLast)

    // Change Page
    const handlePage=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const handleReturn=(pageNumber,pages)=>{
        if(pageNumber!==pages[0]){
            setCurrentPage(pageNumber-1)
        }
    }

    const handleNext=(pageNumber,pages)=>{
        if(pageNumber!==pages[pages.length -1]){
            setCurrentPage(pageNumber+1)
        }
    }
    
    const pageNumbers=[]
    const totalProducts=context.data.length;

    for (let i=1; i<=Math.ceil(totalProducts/productsPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <>
        {isLoading? <div className="loader">Loading...</div>:(
        <div>
        <CardList data={currentProducts}/>
        <nav className="bottom-pagination">
            <ul className="pagination">
                <li>
                    <button onClick={()=>handleReturn(currentPage,pageNumbers)} href="#!" className="page-link"><FontAwesomeIcon icon={faAngleLeft}/></button>
                </li>
                {pageNumbers.map(number =>
                    {
                        return(
                        <li key={number} className="page-item">
                            {number===currentPage?<button onClick={()=>handlePage(number)} href="#!" className="page-link isActive">{number}</button>:<button onClick={()=>handlePage(number)} href="#!" className="page-link ">{number}</button>}
                        </li>
                        )
                    }
                )}
                <li>
                    <button onClick={()=>handleNext(currentPage,pageNumbers)} href="#!" className="page-link"><FontAwesomeIcon icon={faAngleRight}/></button>
                </li>
            </ul>
        </nav>
        </div>
        )}
        </>
    )
}

export default Pagination;
