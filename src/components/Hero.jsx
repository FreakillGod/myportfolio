import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='section-hero' id='#hero'>
      <div className='hero-items'>
        <div>
        <h2>Hy! I am</h2>
        <h1><span>Vikash</span></h1>
        </div>
        <div>
          <p style={{marginBottom:".8rem"}}>Full Stack Developer</p>
          <p> I love writing <span>JavaScript</span>, and building projects</p>
        </div>
        <button className='btn btn-primary'>Contact me</button>
      </div>
      <div>
        LOL
      </div>
    </div>
  )
}

export default Hero