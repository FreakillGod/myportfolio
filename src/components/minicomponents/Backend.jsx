import React from 'react'
import "./backend.css"

const Backend = ({ item }) => {
    const { name, lvl, url } = item;
    return (
        <div className='backend-card'>
            <h6>{name}</h6>
            <div className='backend-image-wrapper'>
                <img className='back-image' src={url} alt='lol' />
            </div>
            <p className='bk_lvl'>{lvl}</p>
        </div>
    )
}

export default Backend