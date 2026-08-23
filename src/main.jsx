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
    "Complete AC servicing, installation, and gas charging. We improve cooling efficiency and offer fast doorstep service.",
  bgImage:
    "https://cdnl.iconscout.com/lottie/free/preview/free-ac-installation-animation-gif-download-7922394.png?f=webp",
};
const washingMachineService = {
  id: 1,
  title: "Washing Machine Repair in Narasaraopet",
  description:
    "Expert diagnosis and repair for all major brands and models. Whether it’s drum issues, water leakage, or electrical faults, our certified technicians ensure your washing machine runs smoothly.",
  bgImage:
    "https://a1appliances.com.au/wp-content/uploads/2024/09/washing-machine-thumbs.jpg",
};
const fridgeService = {
  id: 2,
  title: "Fridge Repair in Narasaraopet",
  description:
    "Our fridge service covers cooling issues, gas refilling, compressor replacement, and thermostat problems. We use genuine parts for all repairs.",
  bgImage:
    "https://www.heisesplumbing.com/site/wp-content/uploads/refrigerator-repair-1.jpg",
};

const electricalService = {
  id: 4,
  title: "Electrical Services in Narasaraopet",
  description:
    "Safe and professional electrical work for homes, including new wiring, switchboard installation, and fault repairs.",
  bgImage:
    "https://pictures-ghana.jijistatic.net/54889012_NjIwLTc3Ni1lNzYzMThlZDFm.webp",
};
const geyserService = {
  id: 5,
  title: "Geyser Repair in Narasaraopet",
  description:
    "Expert installation and repair for all types of geysers. We fix heating issues, leaks, and electrical faults.",
  bgImage:
    "https://5.imimg.com/data5/SELLER/Default/2022/7/IG/GL/GL/1517266/instant-geyser-repairing-service-500x500.jpg",
};
const otherHomeAppliancesService = {
  id: 7,
  title: "Narasaraopet Home Appliances repair at Door Step",
  description:
    "Comprehensive repair and service for all home appliances. Genuine parts and certified technicians.",
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
        "Washing Machine Repair & AC Service in Narasaraopet | Open 24 Hours",
      description:
        "Open 24 hours for washing machine repair and AC service in Narasaraopet. We provide fast doorstep visits for leaks, drainage, spin, cooling, installation and electrical repairs.",
    },
    "/ac-repair-narasaraopet": {
      title: "AC Repair & Service in Narasaraopet | Open 24 Hours",
      description:
        "Open 24 hours for AC repair and service in Narasaraopet. We provide doorstep AC servicing, installation, gas charging, cooling repairs, and inverter AC support.",
      service: "AC repair and air conditioner service",
    },
    "/washing-machine-repair-narasaraopet": {
      title:
        "Washing Machine Repair in Narasaraopet | Open 24 Hours",
      description:
        "Open 24 hours for washing machine repair in Narasaraopet. We fix drum, drainage, water leakage, spin, and electrical problems with fast doorstep service.",
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
        name: "Narasaraopeta Home Appliances Repair",
        telephone: "+919381283935",
        url: siteUrl,
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
