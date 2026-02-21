
import './Hero.css'
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [waitingToShow, setWaitingToShow] = useState(false);
  const scrollTimeout = useRef(null);
  const showTimeout = useRef(null);

  // Slideshow logic
  const images = [
    'https://img.freepik.com/premium-photo/appliance-repair-technician-fixing-washing-machine-with-tools-workshop_38013-136475.jpg?semt=ais_user_personalization&w=740&q=80',
    'https://www.rightcliq.in/images/services/about/rightcliq-service-about-12_886_450.webp?v=5',
    'https://5.imimg.com/data5/ZZ/VS/HA/SELLER-2656676/house-wiring.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-kfXzej64f5cTPDfsTOt2Yr2dvGan7EoMg&s',
    'https://img.freepik.com/premium-photo/appliance-repair-technician-fixing-washing-machine-with-tools-workshop_38013-136475.jpg?semt=ais_user_personalization&w=740&q=80',
    'https://www.rightcliq.in/images/services/about/rightcliq-service-about-12_886_450.webp?v=5',
    'https://5.imimg.com/data5/ZZ/VS/HA/SELLER-2656676/house-wiring.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-kfXzej64f5cTPDfsTOt2Yr2dvGan7EoMg&s'
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    let observer;
    if (contactSection) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          setShowArrow(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(contactSection);
    }

    // Show/hide arrow based on scroll activity
    const handleScroll = () => {
      setIsScrolling(true);
      setShowArrow(false);
      setWaitingToShow(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (showTimeout.current) clearTimeout(showTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        showTimeout.current = setTimeout(() => {
          setShowArrow(true);
          setWaitingToShow(false);
        }, 5000);
      }, 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (showTimeout.current) clearTimeout(showTimeout.current);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s',
          minHeight: '650px',
          width: '100%',
        }}
      >
        <div className="hero-content hero-overlay">
          <h2>Professional Repair Services</h2>
          <p> Keep your home running smoothly.</p>
          {/* ...existing code... */}
          {/* ...existing code... */}
          {/* ...existing code... */}
          {/* Down arrow for mobile users, fixed to the right side until Contact Us, only when not scrolling */}
          {showArrow && !isScrolling && !waitingToShow && (
            <div className="side-down-arrow">
              <span className="down-arrow-icon">&#8595;</span>
            </div>
          )}
          {/* Move quick response badge even further down for more separation */}
          <div style={{ marginTop: 64, marginBottom: 8 }}>
            <div className="hero-cta-column">
              <span className="cta-badge">quick responce is our speacility and reasonable price</span>
            </div>
          </div>
          <button
            className="cta-button"
            type="button"
            style={{ marginTop: 64 }}
            onClick={() => window.open('https://wa.me/919381283935?text=I%20want%20to%20book%20a%20service', '_blank')}
          >
            Book a Service
          </button>
        </div>
      </section>
      {/* Floating Call Button for Mobile */}
      <a
        href="tel:9381283935"
        className="floating-call-btn"
        title="Call Now"
        style={{
          position: 'fixed',
          right: 16,
          bottom: 24,
          zIndex: 9999,
          background: '#25d366',
          borderRadius: '50%',
          width: 90,
          height: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px #0003',
          animation: 'blink-call 1s infinite',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: 32,
          textDecoration: 'none',
          transition: 'background 0.2s',
        }}
      >
        <span role="img" aria-label="Call">📞</span>
        <span style={{ fontSize: 16, fontWeight: 'bold', marginTop: 4 }}>Call Now</span>
      </a>
      <style>{`
        @media (min-width: 768px) {
          .floating-call-btn { display: none !important; }
        }
        @keyframes blink-call {
          0%, 100% { box-shadow: 0 0 0 0 #25d36688; }
          50% { box-shadow: 0 0 0 12px #25d36633; }
        }
      `}</style>
    </>
  )
}
