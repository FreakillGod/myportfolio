import React from 'react'
import "./experience.css"
import { experience } from "../data/data"
import Experiencemini from './minicomponents/Experience'

const Experience = () => {
  return (
    <section id="#experience">
      <div className='experience-wrapper'>
        <div className='time-line'>
          <div className='company-wrapper'>company name</div>
          {/* {experience.map((item, i) => <Experiencemini key={i} item={item} />)} */}
        </div>
      </div>
    </section>
  )
}

export default Experience