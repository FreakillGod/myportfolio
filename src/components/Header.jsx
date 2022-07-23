import { useRef, useEffect, useState } from 'react'
import './header.css'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef(null);

    const options = { root: null, threshold: 0, rootMargin: '-0px' }
    const observerFunc = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting)
    }
    useEffect(() => {
        const observer = new IntersectionObserver(observerFunc, options)        //default
        if (headerRef.current) observer.observe(headerRef.current)
        // add my header code

        return () => {
            if (headerRef.current) observer.unobserve(headerRef.current);
        }

    }, [headerRef, options])

    return (
        <header id="header" ref={headerRef} className='header'>
            <nav className={`nav ${isVisible ? "somthingthis" : "ormaybethi"}`}>
                <div className='logo'>LoGo</div>
                <ul className='nav-items'>
                    <li><a href='#hero'>hero</a></li>
                    <li><a href='#main'>main</a></li>
                    <li><a href='#testimonials'>testimonials</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <li><a>Photo</a></li>
            </nav>
        </header>
    )
}

export default Header