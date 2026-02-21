import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ravula. Rajesh Kumar',
      rating: 5,
      text: 'Excellent service! They came within 30 minutes and fixed my washing machine. Very professional team.',
      service: 'Washing Machine Repair'
    },
    {
      id: 2,
      name: ' V. Snati Priya ',
      rating: 5,
      text: 'Best electrical work I\'ve had done. Safe, efficient, and reasonably priced. Highly recommended!',
      service: 'Electrical Work'
    },
    {
      id: 3,
      name: 'Anil Kumar',
      rating: 5,
      text: 'My AC was not working. They came immediately and got it running in 2 hours. Great service!',
      service: 'AC Service'
    },
    {
      id: 4,
      name: 'Shaik Akbar',
      rating: 5,
      text: 'Refrigerator repair was done perfectly. They explained everything and used genuine parts.',
      service: 'Refrigerator Repair'
    },
    {
      id: 5,
      name: 'R.Vikram ',
      rating: 5,
      text: 'Fast, reliable, and affordable plumbing work. They fixed my leak within an hour!',
      service: 'Plumbing & Drainage'
    },
    {
      id: 6,
      name: 'Shiva Kumar',
      rating: 5,
      text: 'Geyser was not heating water. They diagnosed and fixed it same day. Very impressed!',
      service: 'Geyser Repair'
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    ))
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>Customer Ratings & Reviews</h2>
        <p className="section-subtitle">What our customers say about our services</p>
        
        <div className="rating-summary">
          <div className="overall-rating">
            <h3>4.9/5</h3>
            <div className="stars-large">
              {renderStars(5)}
            </div>
            <p>Based on 500+ Reviews</p>
          </div>
          
          <div className="rating-breakdown">
            <div className="rating-bar">
              <div className="rating-label">
                <span>5 ★</span>
                <div className="bar">
                  <div className="progress" style={{width: '95%'}}></div>
                </div>
                <span>475</span>
              </div>
            </div>
            <div className="rating-bar">
              <div className="rating-label">
                <span>4 ★</span>
                <div className="bar">
                  <div className="progress" style={{width: '3%'}}></div>
                </div>
                <span>15</span>
              </div>
            </div>
            <div className="rating-bar">
              <div className="rating-label">
                <span>3 ★</span>
                <div className="bar">
                  <div className="progress" style={{width: '2%'}}></div>
                </div>
                <span>10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="service-tag">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
