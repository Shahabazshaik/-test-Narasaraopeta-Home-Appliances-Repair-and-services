import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Home Appliances Repair</h3>
            <p>Your trusted partner for all appliance and electrical repair needs. Professional, reliable, affordable.</p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Washing Machine Repair</a></li>
              <li><a href="#services">Refrigerator Repair</a></li>
              <li><a href="#services">AC Service</a></li>
              <li><a href="#services">Electrical Work</a></li>
              <li><a href="#services">Geyser Repair</a></li>
              <li><a href="#services">Plumbing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Home Appliances Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
