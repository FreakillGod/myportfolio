import React from 'react'
import { skills_front, skills_back, experience, cloud } from '../data/data'
import "./Backend.css"
import BackendCard from './minicomponents/Backend'
import CloudComp from './minicomponents/CloudComp'

const Backend = () => {
  return (
    <>
      <section className='section-wrapper'>
        <div className='others'>
          <h3>Backend {"&"} Cloud</h3>
        </div>
        <div className='tech-wrapper'>
          <div className='backend-tech'>
            {skills_back.map((item, i) => {
              return <BackendCard key={i} item={item} />
            })}
          </div>
          <div className='cloud-tech'>
            {cloud.map((item, i) => {
              return (<CloudComp key={i} item={item} />)
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Backend