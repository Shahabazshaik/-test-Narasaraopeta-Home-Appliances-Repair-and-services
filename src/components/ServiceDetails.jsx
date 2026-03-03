import React from 'react';
import WhyChooseUs from './WhyChooseUs';

export default function ServiceDetails({ service }) {
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
    <div style={{
      minHeight: '100vh',
      background: `url(${service.bgImage}) center/cover no-repeat`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 0',
    }}>
      <div style={{
        borderRadius: '16px',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 4px 24px rgba(30,64,175,0.10)',
        padding: '32px',
        margin: '24px',
        background: 'transparent',
      }}>
        <h1 style={{ textAlign: 'center', color: '#1a237e', marginBottom: '16px', textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>{service.title}</h1>
        <p style={{ textAlign: 'center', color: '#fff', marginBottom: '16px', textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>{service.description}</p>
        {details.brands && (
          <div style={{ marginBottom: '10px', color: '#fff', textAlign: 'center', fontWeight: '500', textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
            <span style={{ color: '#ffd600' }}>Brands:</span> {details.brands}
          </div>
        )}
        {details.types && (
          <div style={{ marginBottom: '10px', color: '#fff', textAlign: 'center', fontWeight: '500', textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
            <span style={{ color: '#ffd600' }}>Types:</span> {details.types}
          </div>
        )}
        {details.extra && (
          <div style={{ marginBottom: '18px', color: '#fff', textAlign: 'center', textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
            {details.extra}
          </div>
        )}
        <WhyChooseUs />
      </div>
    </div>
  );
}
