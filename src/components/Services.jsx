import ServiceCard from './ServiceCard'
import './Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Washing Machine Repair',
      description: 'Expert diagnosis and repair for all brands and models, fixing issues like drum problems, water leakage, and electrical faults.',
      icon: '🧺',
      features: ['All Brands', 'Automatic','semiautomatic','Top load', 'Drum Issues'],
      bgImage: 'https://a1appliances.com.au/wp-content/uploads/2024/09/washing-machine-thumbs.jpg'
    },
    {
      id: 2,
      title: 'Refrigerator Repair',
      description: 'Quick solutions for cooling issues, gas refilling, compressor replacement, and thermostat problems.',
      icon: '🧊',
      features: ['Single Door','Double Door', 'Compressor Repair', 'Gas Refilling'],
      bgImage: 'https://www.heisesplumbing.com/site/wp-content/uploads/refrigerator-repair-1.jpg'
    },
    {
      id: 3,
      title: 'Air Conditioner Service',
      description: 'Complete AC servicing, gas charging, cooling efficiency improvement, and installation.',
      icon: '❄️',
      features: ['AC Servicing', 'Gas Charging', 'Installation'],
      bgImage: 'https://acrepairpro.online/wp-content/uploads/2025/08/maintenance-technician-installs-air-conditioning.webp'
    },
    {
      id: 4,
      title: 'Electrical Work & New House Wiring',
      description: 'Safe and professional wiring, switchboard installation, lighting setup, and fault repairs.',
      icon: '⚡',
      features: ['Wiring', 'Switchboard', 'Light Installation'],
      bgImage: 'https://pictures-ghana.jijistatic.net/54889012_NjIwLTc3Ni1lNzYzMThlZDFm.webp'
    },
    {
      id: 5,
      title: 'Geyser installation & Repair',
      description: 'Fixing heating issues, thermostat replacement, and new geyser setup for instant hot water.',
      icon: '🔥',
      features: ['Heating Issues', 'Thermostat Fix', 'Installation'],
      bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfW_uFZROU96-7BV5qMppxIeuOTN8Mt2xtKebBPfL1oQ&s'
    },
    {
      id: 6,
      title: 'Plumbing, water line Repair',
      description: 'Leak repairs, pipe fitting, tap replacement, and bathroom/kitchen plumbing solutions.',
      icon: '🔧',
      features: ['Leak Repair', 'Pipe Fitting', 'Tap Replacement'],
      bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEAGtjFJYdiTwykU-3T8YiIQg971fGZYOlQ&s'
    },
    {
      id: 7,
      title: 'Other Home Appliances Repair',
      description: 'Repair and maintenance for other home appliances like TV, fans, submersible motors, and more.',
      icon: '🛠️',
      features: ['TV Repair', 'Submersible Motor', 'General Appliances'],
      bgImage: ''
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Reliable and professional repair services for all your needs</p>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
