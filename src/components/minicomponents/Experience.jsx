import React from 'react'
import "./experience.css"

const Experience = ({ item }) => {
    const { name } = item;
    return (
        <div className='company-wrapper'>
            <div>{name}</div>
        </div>
    )
}

export default Experience