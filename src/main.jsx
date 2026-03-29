import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ServiceDetails from './components/ServiceDetails';
import ServiceDetailsPage from './components/ServiceDetailsPage';
import './index.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Hardcoded service data for static pages
const acRepairService = {
  id: 3,
  title: 'AC Repair in Narasaraopet',
  description: 'Complete AC servicing, installation, and gas charging. We improve cooling efficiency and offer fast doorstep service.',
  bgImage: 'https://cdnl.iconscout.com/lottie/free/preview/free-ac-installation-animation-gif-download-7922394.png?f=webp',
};
const washingMachineService = {
  id: 1,
  title: 'Washing Machine Repair in Narasaraopet',
  description: 'Expert diagnosis and repair for all major brands and models. Whether it’s drum issues, water leakage, or electrical faults, our certified technicians ensure your washing machine runs smoothly.',
  bgImage: 'https://a1appliances.com.au/wp-content/uploads/2024/09/washing-machine-thumbs.jpg',
};
const fridgeService = {
  id: 2,
  title: 'Fridge Repair in Narasaraopet',
  description: 'Our fridge service covers cooling issues, gas refilling, compressor replacement, and thermostat problems. We use genuine parts for all repairs.',
  bgImage: 'https://www.heisesplumbing.com/site/wp-content/uploads/refrigerator-repair-1.jpg',
};

const electricalService = {
  id: 4,
  title: 'Electrical Services in Narasaraopet',
  description: 'Safe and professional electrical work for homes, including new wiring, switchboard installation, and fault repairs.',
  bgImage: 'https://pictures-ghana.jijistatic.net/54889012_NjIwLTc3Ni1lNzYzMThlZDFm.webp',
};
const geyserService = {
  id: 5,
  title: 'Geyser Repair in Narasaraopet',
  description: 'Expert installation and repair for all types of geysers. We fix heating issues, leaks, and electrical faults.',
  bgImage: 'https://5.imimg.com/data5/SELLER/Default/2022/7/IG/GL/GL/1517266/instant-geyser-repairing-service-500x500.jpg',
};
const otherHomeAppliancesService = {
  id: 7,
  title: 'Other Home Appliances Repair in Narasaraopet',
  description: 'Comprehensive repair and service for all home appliances. Genuine parts and certified technicians.',
  bgImage: 'https://www.lg.com/in/images/washing-machines/md07518199/gallery/medium01.jpg',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/service/:id" element={<ServiceDetailsWrapper />} />
        <Route path="/service-details/:id" element={<ServiceDetailsPageWrapper />} />
          <Route path="/ac-repair-narasaraopet" element={<ServiceDetailsPage service={acRepairService} />} />
          <Route path="/washing-machine-repair-narasaraopet" element={<ServiceDetailsPage service={washingMachineService} />} />
          <Route path="/fridge-repair-narasaraopet" element={<ServiceDetailsPage service={fridgeService} />} />
          <Route path="/electrical-services-narasaraopet" element={<ServiceDetailsPage service={electricalService} />} />
          <Route path="/geyser-repair-narasaraopet" element={<ServiceDetailsPage service={geyserService} />} />
          <Route path="/other-home-appliances-repair" element={<ServiceDetailsPage service={otherHomeAppliancesService} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

function ServiceDetailsWrapper() {
  const location = useLocation();
  const service = location.state?.service || {};
  return <ServiceDetails service={service} />;
}

function ServiceDetailsPageWrapper() {
  const location = useLocation();
  const service = location.state?.service || {};
  return <ServiceDetailsPage service={service} />;
}
