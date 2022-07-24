import React from 'react'
import "./cloud.css"

const CloudComp = ({ item }) => {
  const { name, url, lvl } = item;
  return (
    <li className='cloud-li'>
      <div className='cl-image-wrapper'>
        <img className='cl-image' src={url} alt={name} />
        <p className='lvl'>{name}</p>
      </div>
    </li>
  )
}

export default CloudComp
// 729.600