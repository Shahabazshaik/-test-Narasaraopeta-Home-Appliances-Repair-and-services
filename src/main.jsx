import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ServiceDetails from "./components/ServiceDetails";
import ServiceDetailsPage from "./components/ServiceDetailsPage";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Hardcoded service data for static pages
const acRepairService = {
  id: 3,
  title: "AC Repair in Narasaraopet",
  description:
    "Complete AC servicing, installation, and gas charging for better cooling and efficient performance. Fast doorstep support for homes and small businesses.",
  bgImage:
    "https://cdnl.iconscout.com/lottie/free/preview/free-ac-installation-animation-gif-download-7922394.png?f=webp",
};
const washingMachineService = {
  id: 1,
  title: "Washing Machine Repair in Narasaraopet",
  description:
    "Expert diagnosis and repair for household washing machines, including drum, drainage, water leakage, and motor issues. Our trained technicians provide reliable onsite support.",
  bgImage:
    "https://a1appliances.com.au/wp-content/uploads/2024/09/washing-machine-thumbs.jpg",
};
const fridgeService = {
  id: 2,
  title: "Fridge Repair in Narasaraopet",
  description:
    "Reliable service for cooling problems, gas refilling, thermostat issues, and compressor faults. We keep repairs efficient and affordable.",
  bgImage:
    "https://www.heisesplumbing.com/site/wp-content/uploads/refrigerator-repair-1.jpg",
};

const electricalService = {
  id: 4,
  title: "Electrical Services in Narasaraopet",
  description:
    "Safe and professional electrical work for homes, including new wiring, switchboard installation, lighting, and fault repairs.",
  bgImage:
    "https://pictures-ghana.jijistatic.net/54889012_NjIwLTc3Ni1lNzYzMThlZDFm.webp",
};
const geyserService = {
  id: 5,
  title: "Geyser Repair in Narasaraopet",
  description:
    "Professional installation and repair for instant and storage geysers, including heating faults, leak issues, and electrical faults.",
  bgImage:
    "https://5.imimg.com/data5/SELLER/Default/2022/7/IG/GL/GL/1517266/instant-geyser-repairing-service-500x500.jpg",
};
const otherHomeAppliancesService = {
  id: 7,
  title: "Home Appliance Repair & Maintenance",
  description:
    "Comprehensive service for home appliances, available at your doorstep with genuine parts and skilled technicians.",
  bgImage:
    "https://www.lg.com/in/images/washing-machines/md07518199/gallery/medium01.jpg",
};

const serviceAreas = [
  "Satulur, Andhra Pradesh, India",
  "Ravipadu, Andhra Pradesh, India",
  "Rompicharla, Andhra Pradesh, India",
  "Narasaraopeta, Andhra Pradesh, India",
  "Chilakaluripet, Andhra Pradesh, India",
  "Uppalapadu, Andhra Pradesh 522603, India",
  "Issapalem, Mulakaluru, Andhra Pradesh 522603, India",
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteSEO />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/service/:id" element={<ServiceDetailsWrapper />} />
        <Route
          path="/service-details/:id"
          element={<ServiceDetailsPageWrapper />}
        />
        <Route
          path="/ac-repair-narasaraopet"
          element={<ServiceDetailsPage service={acRepairService} />}
        />
        <Route
          path="/washing-machine-repair-narasaraopet"
          element={<ServiceDetailsPage service={washingMachineService} />}
        />
        <Route
          path="/fridge-repair-narasaraopet"
          element={<ServiceDetailsPage service={fridgeService} />}
        />
        <Route
          path="/electrical-services-narasaraopet"
          element={<ServiceDetailsPage service={electricalService} />}
        />
        <Route
          path="/geyser-repair-narasaraopet"
          element={<ServiceDetailsPage service={geyserService} />}
        />
        <Route
          path="/other-home-appliances-repair"
          element={<ServiceDetailsPage service={otherHomeAppliancesService} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

function RouteSEO() {
  const location = useLocation();
  const siteUrl = "https://www.narasaraopetrepair.com";
  const seoByPath = {
    "/": {
      title:
        "Home Appliance Repair in Narasaraopet | AC, Fridge & Washing Machine Service",
      description:
        "Reliable home appliance repair in Narasaraopet for AC, washing machine, refrigerator, geyser, and electrical work. Fast doorstep service and local support in Andhra Pradesh.",
      service: "Home appliance repair service",
    },
    "/ac-repair-narasaraopet": {
      title: "AC Repair in Narasaraopet | Fast Doorstep Service",
      description:
        "Professional AC repair and service in Narasaraopet with doorstep maintenance, installation, gas charging, cooling checks, and electrical troubleshooting.",
      service: "AC repair and maintenance",
    },
    "/washing-machine-repair-narasaraopet": {
      title:
        "Washing Machine Repair in Narasaraopet | Local Service",
      description:
        "Washing machine repair in Narasaraopet covering drum, spin, drainage, water leakage, and motor issues with quick onsite support.",
      service: "Washing machine repair",
    },
  };

  useEffect(() => {
    const page = seoByPath[location.pathname] || seoByPath["/"];

    const canonicalUrl = `${siteUrl}${location.pathname}`;
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      page.description,
    );
    document.querySelector('meta[property="og:title"]')?.setAttribute(
      "content",
      page.title,
    );
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      page.description,
    );
    document.querySelector('meta[property="og:url"]')?.setAttribute(
      "content",
      canonicalUrl,
    );
    document.querySelector('meta[name="twitter:title"]')?.setAttribute(
      "content",
      page.title,
    );
    document.querySelector('meta[name="twitter:description"]')?.setAttribute(
      "content",
      page.description,
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute(
      "href",
      canonicalUrl,
    );

    let structuredData = document.getElementById("service-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "service-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.service || "Home appliance repair",
      serviceType: page.service || "Home appliance repair",
      areaServed: serviceAreas.map((area) => ({
        "@type": "Place",
        name: area,
      })),
      provider: {
        "@type": "LocalBusiness",
        name: "Narasaraopet Home Appliance Service",
        telephone: "+91 9381283935",
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ramireddy Pet, Narasaraopet",
          addressLocality: "Narasaraopet",
          addressRegion: "Andhra Pradesh",
          postalCode: "522601",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "16.2335",
          longitude: "80.0362",
        },
        openingHours: "Mo-Su 00:00-23:59",
      },
    });
  }, [location.pathname]);

  return null;
}

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
