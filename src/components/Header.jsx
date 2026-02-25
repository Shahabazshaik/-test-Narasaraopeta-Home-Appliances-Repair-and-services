import { useState, useEffect, useRef } from 'react'
import './Header.css'

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
      <div className="container">
        <div className="logo">
          <h1>Home Appliances Repair at Door Step</h1>
          <p> Narasaraopet Professional Repair Services</p>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
