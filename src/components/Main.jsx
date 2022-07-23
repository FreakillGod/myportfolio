import React from 'react'
import './main.css'
import { skills_front, skills_back, experience } from '../data/data'
import Card from "./minicomponents/Card"

const Main = () => {
    return (
        <main className='main'>
            <h2>Skills</h2>
            <div className='main-container' id='#main'>
                <h3>Frontend</h3>
                <div className='card-wrapper'>
                    {skills_front.map((data, i) => (<Card key={i} data={data} />))}
                </div>
            </div>
        </main>
    )
}

export default Main