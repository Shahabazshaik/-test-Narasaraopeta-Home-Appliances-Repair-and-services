import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [showServices, setShowServices] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(
    typeof window !== "undefined" ? window.pageYOffset : 0,
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServices(false);
      }
    };
    if (showServices) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showServices]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrolledDown =
        currentScrollPos > prevScrollPos.current && currentScrollPos > 80;
      setVisible(!scrolledDown);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${visible ? "header--visible" : "header--hidden"}`}
    >
      <a
        className="header-phone-corner"
        href="tel:+919381283935"
        title="Call us"
      >
        <span>📞</span>{" "}
        <span className="header-phone-number-corner">+91 9381283935</span>
      </a>
      {/* Hamburger menu at top left */}
      <button
        className="hamburger"
        aria-label="Open services menu"
        onClick={() => setShowServices((s) => !s)}
      >
        <span>≡</span>
      </button>
      {/* Small horizontal menu under hamburger and heading */}
      <div className="header-mini-menu">
        <Link to="/ac-repair-narasaraopet" className="mini-menu-link">
          AC Repair
        </Link>
        <Link
          to="/washing-machine-repair-narasaraopet"
          className="mini-menu-link"
        >
          Washing Machine
        </Link>
        <Link to="/fridge-repair-narasaraopet" className="mini-menu-link">
          Fridge
        </Link>
        <Link to="/geyser-repair-narasaraopet" className="mini-menu-link">
          Geyser
        </Link>
        <Link to="/electrical-services-narasaraopet" className="mini-menu-link">
          Electrical
        </Link>
        <Link to="/other-home-appliances-repair" className="mini-menu-link">
          Other
        </Link>
      </div>
      {showServices && (
        <div ref={dropdownRef} className="services-dropdown">
          <Link
            to="/ac-repair-narasaraopet"
            className="dropdown-link"
            onClick={() => setShowServices(false)}
          >
            AC Repair
          </Link>
          <Link
            to="/washing-machine-repair-narasaraopet"
            className="dropdown-link"
            onClick={() => setShowServices(false)}
          >
            Washing Machine Repair
          </Link>
          <Link
            to="/fridge-repair-narasaraopet"
            className="dropdown-link"
            onClick={() => setShowServices(false)}
          >
            Fridge Repair
          </Link>
          <Link
            to="/geyser-repair-narasaraopet"
            className="dropdown-link"
            onClick={() => setShowServices(false)}
          >
            Geyser Repair
          </Link>
          <Link
            to="/electrical-services-narasaraopet"
            className="dropdown-link"
            onClick={() => setShowServices(false)}
          >
            Electrical Services
          </Link>
          <Link
            to="/other-home-appliances-repair"
            className="dropdown-link"
            onClick={() => setShowServices(false)}
          >
            Other Home Appliances
          </Link>
          <a
            href="#contact"
            className="dropdown-link"
            onClick={() => setShowServices(false)}
          >
            Contact Us
          </a>
          <a
            href="#reviews"
            className="dropdown-link"
            onClick={() => setShowServices(false)}
          >
            Reviews
          </a>
        </div>
      )}
      <div className="container">
        <div className="logo">
          <h1>
            <span className="heading-line1">Narasaraopet Home Appliancesrepair at Door Step</span>
            <br />
            <span className="heading-line2">Repairs & services at your doorstep </span>
          </h1>
        </div>
        <nav className="nav">
          {/* <a href="#home">Home</a>
          <a href="#contact">Contact</a> */}
        </nav>
      </div>
    </header>
  );
}
