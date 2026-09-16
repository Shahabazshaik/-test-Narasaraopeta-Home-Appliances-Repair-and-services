import Header from "./Header";
import Footer from "./Footer";
import "./WashingMachineRepairPage.css";

const phoneNumber = "+919381283935";
const whatsappUrl =
  "https://wa.me/919381283935?text=I%20want%20to%20book%20washing%20machine%20repair%20in%20Narasaraopet";

const repairProblems = [
  "Washing machine not starting",
  "Washing machine not spinning",
  "Water not draining",
  "Water leakage",
  "Washing machine making unusual noise",
  "Drum problems",
  "Motor-related problems",
  "Electrical faults",
  "Door or lid problems",
  "PCB or control-panel related problems",
  "Washing machine vibration",
  "Washing machine not taking water",
  "Washing machine not washing properly",
];

const faqs = [
  {
    question: "How much does washing machine repair cost in Narasaraopet?",
    answer:
      "The cost depends on the problem, parts required, and the work involved. The technician can explain the repair requirement and expected cost after inspecting the machine.",
  },
  {
    question: "Do you repair automatic washing machines?",
    answer:
      "Yes. We provide automatic washing machine repair for common washing, drainage, spin, motor, electrical, and control-related problems.",
  },
  {
    question: "Do you repair semi-automatic washing machines?",
    answer:
      "Yes. We provide semi automatic washing machine repair, including checks for washing, spinning, drainage, leakage, and electrical faults.",
  },
  {
    question: "Do you provide doorstep washing machine repair?",
    answer:
      "Yes. Narasaraopet Home Appliances Repair at Door Step provides doorstep washing machine diagnosis and repair in Narasaraopet and surrounding areas, subject to appointment availability.",
  },
  {
    question: "My washing machine is not draining water. Can you repair it?",
    answer:
      "We can inspect drainage problems such as blocked hoses, pump issues, or related faults and explain the repair needed before proceeding.",
  },
  {
    question: "My washing machine is making a loud noise. What could be the problem?",
    answer:
      "Loud noise can be related to an unbalanced load, drum, bearing, motor, or another mechanical issue. An inspection is needed to identify the cause.",
  },
  {
    question: "How can I book washing machine repair?",
    answer:
      "Call +91 9381283935 or send a WhatsApp message with your location and washing machine problem to request an appointment.",
  },
];

export default function WashingMachineRepairPage() {
  return (
    <div className="washing-machine-page">
      <Header />
      <main>
        <section className="washing-machine-hero" aria-labelledby="washing-machine-title">
          <div className="washing-machine-hero-content">
            <p className="washing-machine-eyebrow">Local doorstep appliance service</p>
            <h1 id="washing-machine-title">Washing Machine Repair in Narasaraopet</h1>
            <p>
              Get practical washing machine diagnosis and repair at your doorstep in
              Narasaraopet. We inspect the problem, explain the repair requirement,
              and help with automatic, semi-automatic, front-load, and top-load
              washing machines.
            </p>
            <div className="washing-machine-cta-group">
              <a className="washing-machine-button washing-machine-button-primary" href={`tel:${phoneNumber}`}>
                Call Now
              </a>
              <a
                className="washing-machine-button washing-machine-button-secondary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <a className="washing-machine-phone" href={`tel:${phoneNumber}`}>
              +91 9381283935
            </a>
          </div>
          <img
            className="washing-machine-hero-image"
            src="https://a1appliances.com.au/wp-content/uploads/2024/09/washing-machine-thumbs.jpg"
            alt="Washing machine repair technician in Narasaraopet"
            fetchpriority="high"
          />
        </section>

        <section className="washing-machine-section washing-machine-intro">
          <p className="washing-machine-kicker">Washing machine service Narasaraopet</p>
          <h2>Doorstep Washing Machine Diagnosis and Repair</h2>
          <p>
            Narasaraopet Home Appliances Repair at Door Step provides doorstep
            washing-machine diagnosis and repair in Narasaraopet and surrounding
            areas. For a related appliance request, visit our <a href="/">home page</a>
            or explore our <a href="/ac-repair-narasaraopet">AC repair</a>,
            <a href="/fridge-repair-narasaraopet"> refrigerator repair</a>, and
            <a href="/geyser-repair-narasaraopet"> geyser repair</a> services.
          </p>
        </section>

        <section className="washing-machine-section" aria-labelledby="problems-title">
          <h2 id="problems-title">Washing Machine Problems We Repair</h2>
          <ul className="washing-machine-problem-grid">
            {repairProblems.map((problem) => <li key={problem}>{problem}</li>)}
          </ul>
        </section>

        <section className="washing-machine-section washing-machine-two-column">
          <div>
            <h2>Types of Washing Machines</h2>
            <ul className="washing-machine-simple-list">
              <li>Fully automatic washing machines</li>
              <li>Semi-automatic washing machines</li>
              <li>Top-load washing machines</li>
              <li>Front-load washing machines</li>
            </ul>
          </div>
          <div>
            <h2>Doorstep Washing Machine Repair</h2>
            <ol className="washing-machine-process-list">
              <li>Customer contacts us with the appliance problem.</li>
              <li>A technician visits the location by appointment.</li>
              <li>The washing machine is inspected.</li>
              <li>The problem and repair requirement are explained.</li>
              <li>Repair work is discussed and performed when appropriate.</li>
            </ol>
          </div>
        </section>

        <section className="washing-machine-section" aria-labelledby="why-title">
          <h2 id="why-title">Why Choose Us</h2>
          <ul className="washing-machine-benefits">
            <li>Doorstep service</li>
            <li>Local Narasaraopet service</li>
            <li>Experienced technicians</li>
            <li>Automatic and semi-automatic washing-machine service</li>
            <li>Front-load and top-load service</li>
            <li>Clear communication</li>
            <li>Service availability across Narasaraopet</li>
          </ul>
        </section>

        <section className="washing-machine-section washing-machine-area" aria-labelledby="area-title">
          <h2 id="area-title">Washing Machine Repair Service Areas</h2>
          <p>
            We receive washing machine repair enquiries in Narasaraopet, including
            Arundelpet, Ramireddy Peta, Navodaya Nagar, Prakash Nagar, and nearby
            Narasaraopet areas. Please contact us to confirm appointment availability
            for your location.
          </p>
        </section>

        <section className="washing-machine-section" aria-labelledby="faq-title">
          <h2 id="faq-title">Frequently Asked Questions</h2>
          <div className="washing-machine-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="washing-machine-final-cta" aria-labelledby="book-title">
          <h2 id="book-title">Book Washing Machine Repair in Narasaraopet</h2>
          <p>Call +91 9381283935 to discuss your washing machine problem and request an appointment.</p>
          <div className="washing-machine-cta-group">
            <a className="washing-machine-button washing-machine-button-primary" href={`tel:${phoneNumber}`}>
              Call Now
            </a>
            <a
              className="washing-machine-button washing-machine-button-secondary"
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