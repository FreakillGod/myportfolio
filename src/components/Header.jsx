import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header id="header" className='header'>
            <nav className='nav'>
                <div className='logo'>LoGo</div>
                <ul className='nav-items'>
                    <li><a href='#'>hero</a></li>
                    <li><a href='#'>main</a></li>
                    <li><a href='#'>testimonials</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <li><a>Photo</a></li>
            </nav>
        </header>
    )
}

export default Header