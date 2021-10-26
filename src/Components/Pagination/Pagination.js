import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"

function Pagination({productsPerPage,totalProducts, handlePage, currentPage,handleReturn,handleNext}) {
    const pageNumbers=[]

    for (let i=1; i<=Math.ceil(totalProducts/productsPerPage);i++){
        pageNumbers.push(i)
    }

    // TODO: Fix logic (No more than 8, no less than 1)
    return (
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
    )
}

export default Pagination;
