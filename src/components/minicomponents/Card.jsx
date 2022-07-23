import React from 'react'
import "./card.css"

const Card = ({data}) => {
    const {name,url,lvl}= data;
    return (
        <div className='card'>
            <h6>{name}</h6>
            <div className='image-container'>
                <img className='card-image' src={url} alt="logo" />
            </div>
            {/* <p>lvl</p> */}
            <p className='lvl'>{lvl}</p>
        </div>
    )
}

export default Card