import React from 'react'
import "./cloud.css"

const CloudComp = ({ item }) => {
  const { name, url, lvl } = item;
  return (
    <div className='cloud'>
      <div className='cl-image-wrapper'>
        <img className='cl-image' src={url} alt={name} />
      </div>
      <h5>{name}</h5>
      <p className={lvl}>{lvl}</p>
    </div>
  )
}

export default CloudComp