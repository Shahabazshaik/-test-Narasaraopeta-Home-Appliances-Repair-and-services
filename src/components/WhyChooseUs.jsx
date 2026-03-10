
import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    title: '100% Genuine Products',
    description: 'We use only original and high-quality spare parts for all repairs and installations, ensuring long-lasting performance and safety for your appliances.',
    img: 'https://png.pngtree.com/png-clipart/20250710/original/pngtree-original-product-100-logo-vector-png-image_21305006.png',
    link: 'https://png.pngtree.com/png-clipart/20250710/original/pngtree-original-product-100-logo-vector-png-image_21305006.png',
    alt: '100% Genuine Products Logo',
  },
  {
    title: 'Certified Technicians',
    description: 'Our team consists of certified and experienced professionals who are experts in their respective fields, guaranteeing reliable and efficient service every time.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD3rQk-iH06A14APYxV96bN1WKX5gYcNLYLJQnQoDbw&s',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD3rQk-iH06A14APYxV96bN1WKX5gYcNLYLJQnQoDbw&s',
    alt: 'Certified Technicians Logo',
  },
  {
    title: 'Fast Doorstep Service',
    description: 'We value your time. Our technicians arrive promptly and complete repairs quickly, so you can get back to your routine without delay.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDttk6cbojgmdm_z0w4f5hlMwHUaAAWUPt2A&s',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDttk6cbojgmdm_z0w4f5hlMwHUaAAWUPt2A&s',
    alt: 'Fast Doorstep Service Logo',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden charges. We provide clear estimates and honest pricing for all our services.',
    img: null,
    link: null,
    alt: null,
  },
];

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us-container modern">
      <h1 className="modern-title">Why Choose Us?</h1>
      <div className="features-grid">
        {features.map((feature, idx) => (
          <div className="feature-card" key={idx}>
            {feature.img && (
              <a href={feature.link} target="_blank" rel="noopener noreferrer" className="feature-icon-link">
                <div className="feature-icon">
                  <img src={feature.img} alt={feature.alt} />
                </div>
              </a>
            )}
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
