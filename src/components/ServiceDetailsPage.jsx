import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import './ServiceDetailsPage.css';

export default function ServiceDetailsPage({ service }) {
  // Detailed info for each service
  const serviceDetails = {
    1: {
      brands: 'LG, Samsung, Whirlpool, IFB, Bosch, Haier, Panasonic, Godrej, Voltas Beko, Siemens',
      types: 'Front Load, Top Load, Semi Automatic',
      extra: 'We provide expert diagnosis and repair for all major brands and models. Whether it’s drum issues, water leakage, or electrical faults, our certified technicians ensure your washing machine runs smoothly.'
    },
    2: {
      brands: 'LG, Samsung, Whirlpool, Godrej, Haier, Panasonic, Voltas Beko, Bosch, Siemens',
      types: 'Single Door, Double Door, Side-by-Side',
      extra: 'Our fridge service covers cooling issues, gas refilling, compressor replacement, and thermostat problems. We use genuine parts for all repairs.'
    },
    3: {
      brands: 'Voltas, Blue Star, LG, Samsung, Daikin, Hitachi, Carrier, Whirlpool, Godrej',
      types: 'Split AC, Window AC, Inverter AC',
      extra: 'Complete AC servicing, installation, and gas charging. We improve cooling efficiency and offer fast doorstep service.'
    },
    4: {
      brands: 'All electrical brands and wiring standards',
      types: 'New House Wiring, Switchboard, Lighting, Repairs',
      extra: 'Safe and professional electrical work for homes, including new wiring, switchboard installation, and fault repairs.'
    },
    5: {
      brands: 'Racold, Bajaj, AO Smith, Venus, Crompton, Havells, Usha',
      types: 'Instant, Storage, Gas Geysers',
      extra: 'Expert installation and repair for all types of geysers. We fix heating issues, leaks, and electrical faults.'
    },
    6: {
      brands: 'All major plumbing brands',
      types: 'Kitchen, Bathroom, Water Tank, Piping',
      extra: 'Professional plumbing services for leakages, blockages, and installations. Fast and reliable solutions.'
    },
    7: {
      brands: 'LG, Samsung, Whirlpool, IFB, Bosch, Haier, Panasonic, Godrej, Voltas Beko, Siemens',
      types: 'All Home Appliances',
      extra: 'Comprehensive repair and service for all home appliances. Genuine parts and certified technicians.'
    }
  };

  const details = serviceDetails[service.id] || {};

  return (
    <div className="service-details-page" style={{ background: `url(${service.bgImage}) center/cover no-repeat` }}>
      <div className="service-details-content">
        <h1>{service.title}</h1>
        <p className="service-desc">{service.description}</p>
        <div className="service-info">
          <div><strong>Brands:</strong> {details.brands}</div>
          <div><strong>Types:</strong> {details.types}</div>
        </div>
        {details.extra && (
          <div className="service-extra" style={{ marginBottom: '18px', color: '#3949ab', textAlign: 'center', fontWeight: '500' }}>{details.extra}</div>
        )}
        <WhyChooseUs />
        <div className="service-contact">Call 9381283935 for fast doorstep service.</div>
      </div>
    </div>
  );
}
