import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import "./ServiceDetailsPage.css";

export default function ServiceDetailsPage({ service }) {
  const serviceDetails = {
    1: {
      types: "Front Load, Top Load, Semi Automatic",
      extra:
        "Expert diagnosis and repair for household washing machines, including drum issues, water leakage, and motor problems. Our trained technicians offer reliable onsite support.",
      seoText:
        "Looking for washing machine repair in Narasaraopet? We fix common issues like drum problems, water leakage, noisy operation, motor faults, and drainage failures for homes and small businesses across Narasaraopet and nearby areas within 10 km.",
      faq: [
        {
          q: "Do you repair washing machines at home in Narasaraopet?",
          a: "Yes. We provide doorstep washing machine repair in Narasaraopet and nearby locations within approximately 10 km with quick on-site support.",
        },
        {
          q: "What washing machine brands do you service?",
          a: "We handle top-load, front-load, and semi-automatic models from major brands, including routine service, diagnostics, and part replacement.",
        },
      ],
    },
    2: {
      types: "Single Door, Double Door, Side-by-Side",
      extra:
        "Professional fridge service for cooling issues, gas refilling, compressor faults, and thermostat problems. We focus on efficient repairs and long-term reliability.",
      seoText:
        "Need fridge repair in Narasaraopet? Our team handles cooling problems, gas refilling, compressor issues, thermostat faults, noisy operation, and refrigerator servicing for homes within 10 km of Narasaraopet.",
      faq: [
        {
          q: "Can you repair a refrigerator at my home?",
          a: "Yes. We provide refrigerator repair at your doorstep in Narasaraopet and nearby areas, including gas refill and compressor checks.",
        },
        {
          q: "How quickly do you respond?",
          a: "We aim for fast response and on-time service so your appliance gets back to working condition as soon as possible.",
        },
      ],
    },
    3: {
      types: "Split AC, Window AC, Inverter AC",
      extra:
        "Complete AC servicing, installation, gas charging, and cooling checks to improve performance and keep your space comfortable.",
      seoText:
        "Need AC repair in Narasaraopet? We provide AC service, gas charging, cooling issue diagnosis, installation, and maintenance for homes and offices around Narasaraopet within 10 km.",
      faq: [
        {
          q: "Do you provide AC service near Narasaraopet?",
          a: "Yes. We serve Narasaraopet and nearby towns and surrounding localities within about 10 km for AC service and repair.",
        },
        {
          q: "Do you handle inverter and split ACs?",
          a: "Yes. We service split ACs, window ACs, and inverter ACs with troubleshooting, gas charging, and installation support.",
        },
      ],
    },
    4: {
      types: "New House Wiring, Switchboard, Lighting, Repairs",
      extra:
        "Safe and professional electrical work for homes, including wiring upgrades, switchboard installation, and fault repairs.",
      seoText:
        "Looking for an electrician in Narasaraopet? We provide home wiring, switchboard upgrades, lighting installation, fault repairs, and safe electrical solutions for residential properties in and around Narasaraopet.",
      faq: [
        {
          q: "Do you do home electrical work in Narasaraopet?",
          a: "Yes. We handle house wiring, switchboard installation, lighting, and electrical repair work for homes within the service area.",
        },
        {
          q: "Do you serve nearby localities?",
          a: "Yes, our service area includes Narasaraopet and surrounding residential areas within around 10 km.",
        },
      ],
    },
    5: {
      types: "Instant, Storage, Gas Geysers",
      extra:
        "Professional installation and repair for geysers, covering heating faults, leak issues, and electrical problems with dependable service.",
      seoText:
        "Need geyser repair in Narasaraopet? We fix water heater issues like no heating, leakage, thermostat faults, and electrical faults for homes in Narasaraopet and nearby areas.",
      faq: [
        {
          q: "Do you install and repair geysers?",
          a: "Yes. We provide geyser installation, repair, and troubleshooting for instant and storage water heaters.",
        },
        {
          q: "How fast can you respond?",
          a: "We prioritize quick local service so you get hot water back faster with professional doorstep support.",
        },
      ],
    },
    6: {
      types: "Kitchen, Bathroom, Water Tank, Piping",
      extra:
        "Fast and reliable plumbing support for leakages, blockages, and installation needs, delivered with efficient workmanship.",
      seoText:
        "Need plumber or home appliance support in Narasaraopet? We offer dependable local service for plumbing, installations, and repairs around your home and nearby areas within 10 km.",
      faq: [
        {
          q: "Do you serve nearby villages and areas around Narasaraopet?",
          a: "Yes. Our local service area includes Narasaraopet and nearby homes within approximately 10 km.",
        },
      ],
    },
    7: {
      types: "All Home Appliances",
      extra:
        "Comprehensive repair and maintenance for home appliances with genuine parts and skilled technicians at your doorstep.",
      seoText:
        "Looking for home appliance repair in Narasaraopet? We repair and maintain major household appliances with doorstep service, reliable diagnostics, and honest pricing across the local area.",
      faq: [
        {
          q: "Which appliances do you repair in Narasaraopet?",
          a: "We repair washing machines, refrigerators, ACs, geysers, fans, motors, and other household appliances with local doorstep support.",
        },
      ],
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
          <div className="service-extra">{details.extra}</div>
        )}

        {details.seoText && (
          <div className="seo-local-box">
            <h3>Service in Narasaraopet & Nearby Areas</h3>
            <p>{details.seoText}</p>
          </div>
        )}

        {details.faq && details.faq.length > 0 && (
          <div className="faq-block">
            <h3>Frequently Asked Questions</h3>
            {details.faq.map((item, index) => (
              <div className="faq-item" key={index}>
                <strong>{item.q}</strong>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        )}

        <WhyChooseUs />
        <div className="service-contact">
          Call 9381283935 for fast doorstep service in Narasaraopet within 10 km.
        </div>
      </div>
    </div>
  );
}
