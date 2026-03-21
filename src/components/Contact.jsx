import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  // Replace with your real email address so form submissions are sent to you
  const OWNER_EMAIL = 'youremail@example.com'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [rating, setRating] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Build WhatsApp message
    const phoneNumber = '919390609601'; // WhatsApp number in international format, no +
    const messageLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.service}`,
      `Rating: ${rating} / 5`,
      formData.message ? `Message: ${formData.message}` : ''
    ].filter(Boolean);
    const message = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Local feedback and reset
    alert('Your request will be sent via WhatsApp.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setRating(0);
  }

  const handleStarClick = (value) => {
    setRating(value)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="section-subtitle">Get in touch for a free quote or emergency service</p>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <h3>📞 Call Us</h3>
              <button
                type="button"
                style={{
                  background: 'linear-gradient(90deg, #1e40af 0%, #2563eb 100%)',
                  color: '#fff',
                  fontWeight: 500,
                  fontFamily: 'Poppins, Inter, Arial, sans-serif',
                  border: 'none',
                  borderRadius: 8,
                  padding: '8px 18px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginBottom: 8,
                  boxShadow: '0 2px 8px rgba(30,64,175,0.10)',
                  letterSpacing: '0.3px'
                }}
                onClick={() => window.open('tel:9381283935')}
              >
                Call +91 9381283935
              </button>
              <p>Available 24/7 for emergencies</p>
            </div>
            <div className="info-item">
              <h3>💬 WhatsApp</h3>
              <button
                type="button"
                style={{
                  background: 'linear-gradient(90deg, #25D366 0%, #13bfa6 100%)',
                  color: '#fff',
                  fontWeight: 500,
                  fontFamily: 'Poppins, Inter, Arial, sans-serif',
                  border: 'none',
                  borderRadius: 8,
                  padding: '8px 18px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginBottom: 8,
                  boxShadow: '0 2px 8px rgba(37,211,102,0.10)',
                  letterSpacing: '0.3px'
                }}
                onClick={() => window.open('https://wa.me/919381283935?text=Hello%2C%20I%20want%20to%20book%20a%20service', '_blank')}
              >
                Text Me on WhatsApp
              </button>
              <p>Quick response guaranteed</p>
            </div>
            <div className="info-item">
              <h3>⏰ Business Hours</h3>
              <p>Monday - Sunday: 8:00 AM - 10:00 PM</p>
              <p>Emergency Service: 24/7</p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div style={{ gridColumn: '1 / -1', margin: '32px 0', textAlign: 'center' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.745499157957!2d80.03364167460322!3d16.233518435019935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a81139be02dd9%3A0xb0d8a129b97d8797!2sNarasaraopet%20Home%20Appliances%20Repair%20at%20doorstep!5e0!3m2!1sen!2sin!4v1774110395119!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 12, maxWidth: 600, width: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Narasaraopet Home Appliances Repair at doorstep Map"
            ></iframe>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            {/* Removed email and phone fields */}

            <div className="form-group">
              <label htmlFor="service">Service Needed *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="washing-machine">Washing Machine Repair</option>
                <option value="refrigerator">Refrigerator Repair</option>
                <option value="ac">Air Conditioner Service</option>
                <option value="electrical">Electrical Work</option>
                <option value="geyser">Geyser & Water Heater</option>
                <option value="plumbing">Plumbing & Drainage</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Removed rate our service field */}

            <div className="form-group">
              <label htmlFor="message">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Describe your repair needs..."
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Request</button>
          </form>
        </div>
      </div>
    </section>
  )
}
