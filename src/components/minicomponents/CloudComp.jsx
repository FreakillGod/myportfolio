import React from 'react'
import "./cloud.css"

const CloudComp = ({ item }) => {
  const { name, url, lvl } = item;
  return (
    <div className='cloud'>
      <div className='cloud-title'>
        <div className='cl-image-wrapper'>
          <img className='cl-image' src={url} alt={name} />
        </div>
        <h6>{name}</h6>
      </div>
      <p className={`${lvl} lvl-bar`}></p>
      <p className='bk_lvl'>{`${lvl === "vg" ? "7/10" : "6/10"}`}</p>
    </div>
  )
}

export default CloudComp