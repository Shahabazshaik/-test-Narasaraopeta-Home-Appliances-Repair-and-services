import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              With over 10 years of experience in home appliances and electrical repair, we have become the trusted choice for homeowners and businesses. Our team of certified technicians is dedicated to providing quick, reliable, and affordable repair services for washing machines, refrigerators, air conditioners, electrical systems, geysers, and plumbing needs.
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
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <p>Our Team at Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
