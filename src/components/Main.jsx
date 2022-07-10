import React from 'react'
import './main.css'
import { skills_front, skills_back, experience } from '../data/data'

const Main = () => {
  return (
    <main className='main' id='#main'>
      <h1>Skills</h1>
      <div className='skills'>
        <h3>Frontend</h3>
        <ul className='frontend'>
          {skills_front.map((item) => {
            return (
              <>
                <li className='skills__list' key={item.name}>
                  {/* <p className='skills__name' >{item.name}</p> */}
                  <img className='skills__image' src={item.url} alt={item.name}/>
                  <span className={`${item.lvl} level`}></span>
                </li>
              </>
            )
          })}
        </ul>
        <h3>Backend</h3>
        <ul className='backend'>
          {skills_back.map((item) => {
            return (
              <>
                <li className='skills__list' key={item.name}>
                  {/* <p className='skills__name' >{item.name}</p> */}
                  <img className='skills__image' src={item.url} alt={item.name}/>
                  <span className={`${item.lvl} level`}></span>
                </li>
              </>
            )
          })}
        </ul>
        {/* <h3>Exprience</h3>
        <ul className='experience'>
          {experience.map((item) => {
            return (
              <>
                <li className='skills__list' key={item.name}>
                  <p className='skills__name' >{item.name}</p>
                  <span className={`${item.lvl} level`}></span>
                </li>
              </>
            )
          })}
        </ul> */}
      </div>
    </main>
  )
}

export default Main