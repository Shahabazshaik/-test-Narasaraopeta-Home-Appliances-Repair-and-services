
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [showServices, setShowServices] = useState(false)
  const [visible, setVisible] = useState(true)
  const prevScrollPos = useRef(typeof window !== 'undefined' ? window.pageYOffset : 0)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServices(false)
      }
    }
    if (showServices) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showServices])

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
    <header className={`header ${visible ? 'header--visible' : 'header--hidden'}`} style={{ position: 'relative' }}>
      <a className="header-phone-corner" href="tel:+919381283935" title="Call us">
        <span>📞</span> <span className="header-phone-number-corner">+91 9381283935</span>
      </a>
      {/* Hamburger menu at top left */}
      <button
        className="hamburger"
        aria-label="Open services menu"
        onClick={() => setShowServices((s) => !s)}
        style={{
          position: 'absolute',
          top: '18px',
          left: '18px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0',
          fontSize: '2.2rem',
          zIndex: 1100,
        }}
      >
        <span style={{ display: 'block', lineHeight: '1' }}>≡</span>
      </button>
      {/* Small horizontal menu under hamburger and heading */}
      <div style={{
        position: 'absolute',
        top: '70px',
        left: '18px',
        right: 0,
        zIndex: 1050,
        fontSize: '0.78rem',
        color: '#d5e1ec',
        display: 'flex',
        gap: '1.2rem',
        alignItems: 'center',
        fontWeight: 500,
        letterSpacing: '0.01em',
        opacity: 0.85,
        background: 'transparent',
        pointerEvents: 'auto',
      }}>
        <Link to="/ac-repair-narasaraopet" style={{ color: '#e8ecef', textDecoration: 'none' }}>AC Repair</Link>
        <Link to="/washing-machine-repair-narasaraopet" style={{ color: '#e5ebf0', textDecoration: 'none' }}>Washing Machine</Link>
        <Link to="/fridge-repair-narasaraopet" style={{ color: '#eef2f6', textDecoration: 'none' }}>Fridge</Link>
        <Link to="/geyser-repair-narasaraopet" style={{ color: '#ebeef1', textDecoration: 'none' }}>Geyser</Link>
        <Link to="/electrical-services-narasaraopet" style={{ color: '#e8ebee', textDecoration: 'none' }}>Electrical</Link>
        <Link to="/other-home-appliances-repair" style={{ color: '#f1f5f9', textDecoration: 'none' }}>Other</Link>
      </div>
      {showServices && (
        <div
          ref={dropdownRef}
          className="services-dropdown"
          style={{
            position: 'absolute',
            top: '60px',
            left: '18px',
            background: '#fff',
            boxShadow: '0 2px 8px #0002',
            borderRadius: '8px',
            zIndex: 1200,
            minWidth: '220px',
            padding: '0.5rem 0',
          }}
        >
          <Link to="/ac-repair-narasaraopet" className="dropdown-link" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#005baa', textDecoration: 'none' }} onClick={() => setShowServices(false)}>
            AC Repair
          </Link>
          <Link to="/washing-machine-repair-narasaraopet" className="dropdown-link" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#005baa', textDecoration: 'none' }} onClick={() => setShowServices(false)}>
            Washing Machine Repair
          </Link>
          <Link to="/fridge-repair-narasaraopet" className="dropdown-link" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#005baa', textDecoration: 'none' }} onClick={() => setShowServices(false)}>
            Fridge Repair
          </Link>
          <Link to="/geyser-repair-narasaraopet" className="dropdown-link" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#005baa', textDecoration: 'none' }} onClick={() => setShowServices(false)}>
            Geyser Repair
          </Link>
          <Link to="/electrical-services-narasaraopet" className="dropdown-link" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#005baa', textDecoration: 'none' }} onClick={() => setShowServices(false)}>
            Electrical Services
          </Link>
          <Link to="/other-home-appliances-repair" className="dropdown-link" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#005baa', textDecoration: 'none' }} onClick={() => setShowServices(false)}>
            Other Home Appliances
          </Link>
          <a href="#contact" className="dropdown-link" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#005baa', textDecoration: 'none' }} onClick={() => setShowServices(false)}>
            Contact Us
          </a>
          <a href="#reviews" className="dropdown-link" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#005baa', textDecoration: 'none' }} onClick={() => setShowServices(false)}>
            Reviews
          </a>
        </div>
      )}
      <div className="container"> 
        <div className="logo" style={{ marginLeft: '56px' }}>
          <h1>Narasaraopet Home Appliances & Electrical Services at Door Step</h1>
        </div>
        <nav className="nav" style={{ position: 'relative' }}>
          {/* <a href="#home">Home</a>
          <a href="#contact">Contact</a> */}
        </nav>
      </div>
    </header>
  )
}
