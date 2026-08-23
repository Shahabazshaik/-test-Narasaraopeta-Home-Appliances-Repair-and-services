import "./MobileCTA.css";

export default function MobileCTA() {
  return (
    <div className="mobile-cta" aria-label="Contact options">
      <a href="tel:+919381283935" className="mobile-cta-action mobile-cta-call">
        <span className="mobile-cta-icon" aria-hidden="true">&#9742;</span>
        <span className="mobile-cta-label">
          <strong>Call Now</strong>
          <small>Open 24 Hours</small>
        </span>
      </a>
      <a
        href="https://wa.me/919381283935?text=I%20want%20to%20book%20a%20service"
        className="mobile-cta-action mobile-cta-whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <span className="mobile-cta-icon mobile-cta-wa-icon" aria-hidden="true"></span>
        <span>Book on WhatsApp</span>
      </a>
    </div>
  );
}
