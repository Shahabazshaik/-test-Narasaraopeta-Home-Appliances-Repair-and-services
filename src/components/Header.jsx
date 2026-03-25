
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [showServices, setShowServices] = useState(false)
  const [visible, setVisible] = useState(true)
  const prevScrollPos = useRef(typeof window !== 'undefined' ? window.pageYOffset : 0)
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const scrolledDown = currentScrollPos > prevScrollPos.current && currentScrollPos > 80
      setVisible(!scrolledDown)
      prevScrollPos.current = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
      <header className={`header ${visible ? 'header--visible' : 'header--hidden'}`}>
        <a className="header-phone-corner" href="tel:+919381283935" title="Call us">
          <span>📞</span> <span className="header-phone-number-corner">+91 9381283935</span>
        </a>
        <div className="container"> 
          <div className="logo">
            <h1>Narasaraopet Home Appliances & Electrical Services at Door Step</h1>
            {/* <h6>AC Repair | Washing Machine Repair | Fridge Repair | Electrical Works | Geyser Repair</h6> */}
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            {/* <a href="#services">Services</a> */}
            <Link to="/ac-repair-narasaraopet">AC Repair</Link>
            <Link to="/washing-machine-repair-narasaraopet">Washing Machine Repair</Link>
            <Link to="/fridge-repair-narasaraopet">Fridge Repair</Link>
            <Link to="/electrical-services-narasaraopet">Electrical Services</Link>
            {/* <a href="#about">About</a> */}
            {/* <a href="#testimonials">Reviews</a> */}
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
  )
}
