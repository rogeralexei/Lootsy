import React from 'react'
import Card from './Card'
import "../../assets/css/cards.css"

function CardList({data}) {
    return (
        <>
            <div className="card-list">
            {data.map(product=>{
                return <Card key={product._id} product={product} />
            })}
            </div>
        </>
    )
}

export default CardList;
