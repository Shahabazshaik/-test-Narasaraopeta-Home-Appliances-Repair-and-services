import React from "react";
import WhyChooseUs from "./WhyChooseUs";

export default function ServiceDetails({ service }) {
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
    7: {
      types: "All Home Appliances",
      extra:
        "Comprehensive repair and maintenance for home appliances with genuine parts and skilled technicians at your doorstep.",
    },
  };

  const details = serviceDetails[service.id] || {};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url(${service.bgImage}) center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          borderRadius: "16px",
          maxWidth: "800px",
          width: "100%",
          boxShadow: "0 4px 24px rgba(30,64,175,0.10)",
          padding: "32px",
          margin: "24px",
          background: "transparent",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1a237e",
            marginBottom: "16px",
            textShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          {service.title}
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "16px",
            textShadow: "0 2px 8px rgba(0,0,0,0.25)",
          }}
        >
          {service.description}
        </p>
        {details.types && (
          <div
            style={{
              marginBottom: "10px",
              color: "#fff",
              textAlign: "center",
              fontWeight: "500",
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            <span style={{ color: "#ffd600" }}>Appliance Types:</span> {details.types}
          </div>
        )}
        {details.extra && (
          <div
            style={{
              marginBottom: "18px",
              color: "#fff",
              textAlign: "center",
              textShadow: "0 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            {details.extra}
          </div>
        )}
        <WhyChooseUs />
      </div>
    </div>
  );
}
