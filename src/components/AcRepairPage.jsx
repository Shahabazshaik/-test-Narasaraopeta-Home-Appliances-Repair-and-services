import Header from "./Header";
import Footer from "./Footer";
import "./AcRepairPage.css";

const phoneNumber = "+919381283935";
const whatsappUrl =
  "https://wa.me/919381283935?text=I%20want%20to%20book%20AC%20repair%20in%20Narasaraopet";

const acServices = [
  "AC not cooling",
  "AC cooling weakly",
  "AC not turning on",
  "AC making unusual noise",
  "AC water leakage",
  "AC ice formation",
  "AC outdoor unit problems",
  "AC indoor unit problems",
  "AC fan problems",
  "AC drainage problems",
  "AC electrical problems",
  "AC sensor-related problems",
  "AC remote or control problems",
  "AC inspection and diagnosis",
  "AC servicing and maintenance",
];

const faqs = [
  {
    question: "How much does AC repair cost in Narasaraopet?",
    answer:
      "The cost depends on the issue, parts required, and service work involved. The technician can explain the repair requirement and expected cost after inspecting the AC.",
  },
  {
    question: "Do you provide doorstep AC repair?",
    answer:
      "Yes. Narasaraopet Home Appliances Repair at Door Step provides doorstep AC inspection and service in Narasaraopet and nearby areas, subject to appointment availability.",
  },
  {
    question: "Do you repair split ACs?",
    answer:
      "Yes. We provide split AC repair in Narasaraopet, including inspection of cooling, drainage, indoor-unit, outdoor-unit, electrical, and control-related problems.",
  },
  {
    question: "Why is my AC not cooling properly?",
    answer:
      "Possible causes include airflow problems, dirty filters or coils, refrigerant-related issues, or another component fault. An inspection is needed before identifying the cause.",
  },
  {
    question: "Why is my AC leaking water?",
    answer:
      "Blocked drainage, installation issues, or other faults can cause water leakage. The AC should be inspected to identify the actual cause.",
  },
  {
    question: "Why is ice forming on my AC?",
    answer:
      "Ice formation can have multiple causes, including airflow or component-related issues. It should be diagnosed rather than automatically assuming low refrigerant.",
  },
  {
    question: "How can I book AC repair in Narasaraopet?",
    answer:
      "Call +91 9381283935 or send a WhatsApp message with your location and AC problem to request an appointment.",
  },
  {
    question: "How long does an AC inspection take?",
    answer:
      "Inspection time depends on the AC type, access, and symptoms. The technician can provide a better estimate after seeing the unit and understanding the problem.",
  },
];

export default function AcRepairPage() {
  return (
    <div className="ac-repair-page">
      <Header />
      <main>
        <section className="ac-repair-hero" aria-labelledby="ac-repair-title">
          <div className="ac-repair-hero-content">
            <p className="ac-repair-eyebrow">Local doorstep AC service</p>
            <h1 id="ac-repair-title">AC Repair in Narasaraopet</h1>
            <p>
              Narasaraopet Home Appliances Repair at Door Step provides doorstep AC
              repair and service in Narasaraopet. We inspect the air conditioner,
              explain the likely repair requirement, and carry out suitable service
              work when appropriate.
            </p>
            <div className="ac-repair-cta-group">
              <a className="ac-repair-button ac-repair-button-primary" href={`tel:${phoneNumber}`}>
                Call Now
              </a>
              <a
                className="ac-repair-button ac-repair-button-secondary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <a className="ac-repair-phone" href={`tel:${phoneNumber}`}>
              +91 9381283935
            </a>
          </div>
          <img
            className="ac-repair-hero-image"
            src="/images/air-conditioner.svg"
            alt="Air conditioner service illustration for AC repair in Narasaraopet"
            fetchpriority="high"
          />
        </section>

        <section className="ac-repair-section ac-repair-intro">
          <p className="ac-repair-kicker">AC service Narasaraopet</p>
          <h2>Home Air Conditioner Repair and Service</h2>
          <p>
            Looking for AC repair near me or home AC repair Narasaraopet? Our local
            team provides AC inspection and doorstep service in Narasaraopet and
            nearby areas. Visit our <a href="/">home page</a> for all services, or
            explore <a href="/washing-machine-repair-narasaraopet">washing machine repair</a>,
            <a href="/fridge-repair-narasaraopet"> refrigerator repair</a>, and
            <a href="/geyser-repair-narasaraopet"> geyser repair</a>.
          </p>
        </section>

        <section className="ac-repair-section" aria-labelledby="services-title">
          <h2 id="services-title">AC Repair Services</h2>
          <ul className="ac-repair-service-grid">
            {acServices.map((service) => <li key={service}>{service}</li>)}
          </ul>
          <p className="ac-repair-note">
            These symptoms can have different causes. The technician will inspect the
            AC and identify the cause before discussing the suitable repair or service.
          </p>
        </section>

        <section className="ac-repair-section ac-repair-two-column">
          <div>
            <h2>Types of AC Service</h2>
            <ul className="ac-repair-simple-list">
              <li>Split AC service</li>
              <li>Home air-conditioner repair</li>
              <li>AC general service</li>
              <li>AC inspection</li>
              <li>AC maintenance</li>
            </ul>
          </div>
          <div>
            <h2>Doorstep AC Repair in Narasaraopet</h2>
            <ol className="ac-repair-process-list">
              <li>Customer contacts us with the AC problem.</li>
              <li>A technician visits the customer&apos;s location by appointment.</li>
              <li>The AC is inspected and diagnosed.</li>
              <li>The issue and required repair are explained.</li>
              <li>Repair or service is carried out when appropriate.</li>
            </ol>
          </div>
        </section>

        <section className="ac-repair-section" aria-labelledby="common-problems-title">
          <h2 id="common-problems-title">Common AC Problems</h2>
          <div className="ac-repair-problem-sections">
            <article>
              <h3>AC Not Cooling</h3>
              <p>
                Weak cooling may relate to airflow issues, dirty filters or coils,
                refrigerant-related problems, or other component faults. The cause
                should be checked instead of assumed without an inspection.
              </p>
            </article>
            <article>
              <h3>AC Water Leakage</h3>
              <p>
                Blocked drainage, installation issues, or other faults can cause water
                leakage. Inspection helps identify the source and the suitable repair.
              </p>
            </article>
            <article>
              <h3>AC Ice Formation</h3>
              <p>
                Ice formation can have multiple causes. An inspection is needed rather
                than automatically assuming that low refrigerant is the reason.
              </p>
            </article>
            <article>
              <h3>AC Making Noise</h3>
              <p>
                Different noises can come from different indoor, outdoor, fan, or
                component issues. The sound and unit should be inspected to identify the cause.
              </p>
            </article>
          </div>
        </section>

        <section className="ac-repair-section" aria-labelledby="why-title">
          <h2 id="why-title">Why Choose Us</h2>
          <ul className="ac-repair-benefits">
            <li>Doorstep AC service</li>
            <li>Local Narasaraopet service</li>
            <li>Experienced technicians</li>
            <li>AC inspection and diagnosis</li>
            <li>Clear communication</li>
            <li>Home service</li>
            <li>Service availability across Narasaraopet</li>
          </ul>
        </section>

        <section className="ac-repair-section ac-repair-area" aria-labelledby="area-title">
          <h2 id="area-title">AC Service Areas</h2>
          <p>
            We receive AC repair enquiries in Narasaraopet, including Arundelpet,
            Ramireddy Peta, Navodaya Nagar, Prakash Nagar, and nearby Narasaraopet
            areas. Please contact us to confirm appointment availability for your location.
          </p>
        </section>

        <section className="ac-repair-section" aria-labelledby="maintenance-title">
          <h2 id="maintenance-title">AC Maintenance</h2>
          <p>
            Regular AC maintenance can help keep filters, coils, airflow, drainage,
            and the general operating condition under review. Maintenance needs vary
            by the unit and its use, so the technician can explain what inspection or
            cleaning is appropriate for your AC.
          </p>
        </section>

        <section className="ac-repair-section" aria-labelledby="faq-title">
          <h2 id="faq-title">Frequently Asked Questions</h2>
          <div className="ac-repair-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="ac-repair-final-cta" aria-labelledby="book-title">
          <h2 id="book-title">Book AC Repair in Narasaraopet</h2>
          <p>
            Narasaraopet Home Appliances Repair at Door Step is available for AC
            service enquiries at +91 9381283935.
          </p>
          <div className="ac-repair-cta-group">
            <a className="ac-repair-button ac-repair-button-primary" href={`tel:${phoneNumber}`}>
              Call Now
            </a>
            <a
              className="ac-repair-button ac-repair-button-secondary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
