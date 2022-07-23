import React from 'react'
import "./cloud.css"

const CloudComp = ({ item }) => {
  const { name, url, lvl } = item;
  return (
    <div>{name}</div>
  )
}

export default CloudComp