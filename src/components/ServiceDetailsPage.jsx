import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import './ServiceDetailsPage.css';

export default function ServiceDetailsPage({ service }) {
  // Example data structure for demonstration
  const details = {
    title: service?.title || 'Service Title',
    description: service?.description || 'Service description goes here.',
    brands: service?.brands || 'LG, Samsung, Whirlpool, IFB, Bosch, Haier, Panasonic, Godrej, Voltas Beko, Siemens',
    types: service?.types || 'Front Load, Top Load, Semi Automatic',
    image: service?.bgImage || '',
    contact: 'Call 9381283935 for fast doorstep service.',
    faqs: [
      {
        q: 'How quickly can you repair my appliance?',
        a: 'We offer same-day doorstep service for most repairs.'
      },
      {
        q: 'Do you use genuine spare parts?',
        a: 'Yes, we use only original and high-quality spare parts.'
      }
    ]
  };

  return (
    <div className="service-details-page" style={{ background: `url(${details.image}) center/cover no-repeat` }}>
      <div className="service-details-content">
        <h1>{details.title}</h1>
        <p className="service-desc">{details.description}</p>
        <div className="service-info">
          <div><strong>Brands:</strong> {details.brands}</div>
          <div><strong>Types:</strong> {details.types}</div>
        </div>
        <WhyChooseUs />
        <div className="service-contact">{details.contact}</div>
        <div className="service-faqs">
          <h2>Frequently Asked Questions</h2>
          {details.faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <strong>Q: {faq.q}</strong>
              <div>A: {faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
