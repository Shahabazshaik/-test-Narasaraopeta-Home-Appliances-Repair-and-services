import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import "./ServiceDetailsPage.css";

export default function ServiceDetailsPage({ service }) {
  // Detailed info for each service
  const serviceDetails = {
    1: {
      types: "Front Load, Top Load, Semi Automatic",
      extra:
        "Expert diagnosis and repair for household washing machines, including drum issues, water leakage, and motor problems. Our trained technicians offer reliable onsite support.",
    },
    2: {
      types: "Single Door, Double Door, Side-by-Side",
      extra:
        "Professional fridge service for cooling issues, gas refilling, compressor faults, and thermostat problems. We focus on efficient repairs and long-term reliability.",
    },
    3: {
      types: "Split AC, Window AC, Inverter AC",
      extra:
        "Complete AC servicing, installation, gas charging, and cooling checks to improve performance and keep your space comfortable.",
    },
    4: {
      types: "New House Wiring, Switchboard, Lighting, Repairs",
      extra:
        "Safe and professional electrical work for homes, including wiring upgrades, switchboard installation, and fault repairs.",
    },
    5: {
      types: "Instant, Storage, Gas Geysers",
      extra:
        "Professional installation and repair for geysers, covering heating faults, leak issues, and electrical problems with dependable service.",
    },
    6: {
      types: "Kitchen, Bathroom, Water Tank, Piping",
      extra:
        "Fast and reliable plumbing support for leakages, blockages, and installation needs, delivered with efficient workmanship.",
    },
    7: {
      types: "All Home Appliances",
      extra:
        "Comprehensive repair and maintenance for home appliances with genuine parts and skilled technicians at your doorstep.",
    },
  };

  const details = serviceDetails[service.id] || {};

  return (
    <div
      className="service-details-page"
      style={{ background: `url(${service.bgImage}) center/cover no-repeat` }}
    >
      <div className="service-details-content">
        <h1>{service.title}</h1>
        <p className="service-desc">{service.description}</p>
        <div className="service-info">
          <div>
            <strong>Appliance Types:</strong> {details.types}
          </div>
        </div>
        {details.extra && (
          <div
            className="service-extra"
            style={{
              marginBottom: "18px",
              color: "#3949ab",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            {details.extra}
          </div>
        )}
        <WhyChooseUs />
        <div className="service-contact">
          Call 9381283935 for fast doorstep service.
        </div>
      </div>
    </div>
  );
}
