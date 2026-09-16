import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              With over 10 years of experience in home appliances and electrical
              repair, we are the trusted local choice for homeowners and businesses
              in Narasaraopet and nearby areas within 10 km. Our trained technicians
              deliver quick, reliable, and affordable service for washing machines,
              refrigerators, air conditioners, electrical systems, geysers, and all
              major home appliance needs at your doorstep.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>5000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>10000+</h3>
                <p>Repairs Done</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="service-area-panel">
              <h3>Local Service Area</h3>
              <p>
                We provide doorstep appliance repair in Narasaraopet, including
                Ramireddy Pet and nearby residential areas within approximately
                10 km. Choose a service to learn more:
              </p>
              <nav className="service-area-links" aria-label="Popular repair services">
                <a href="/ac-repair-narasaraopet">AC repair</a>
                <a href="/washing-machine-repair-narasaraopet">
                  Washing machine repair
                </a>
                <a href="/fridge-repair-narasaraopet">Fridge repair</a>
                <a href="/geyser-repair-narasaraopet">Geyser repair</a>
                <a href="/electrical-services-narasaraopet">
                  Home electrician
                </a>
              </nav>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <p>Our Team at Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
