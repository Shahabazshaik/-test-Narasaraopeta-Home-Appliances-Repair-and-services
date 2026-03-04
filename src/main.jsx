import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ServiceDetails from './components/ServiceDetails';
import ServiceDetailsPage from './components/ServiceDetailsPage';
import './index.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/service/:id" element={<ServiceDetailsWrapper />} />
        <Route path="/service-details/:id" element={<ServiceDetailsPageWrapper />} />
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
