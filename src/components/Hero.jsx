
import './Hero.css'
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [waitingToShow, setWaitingToShow] = useState(false);
  const scrollTimeout = useRef(null);
  const showTimeout = useRef(null);

  // Slideshow logic with text sync
  const slides = [
    {
      image: 'https://img.freepik.com/premium-photo/appliance-repair-technician-fixing-washing-machine-with-tools-workshop_38013-136475.jpg?semt=ais_user_personalization&w=740&q=80',
      title: 'Washing Machine Repair',
      text: 'Fast and Reliable Washing Machine Repair Services.'
    },
    {
      image: 'https://www.rightcliq.in/images/services/about/rightcliq-service-about-12_886_450.webp?v=5',
      title: 'Geyser Repair & Installation',
      text: 'Fast, Reliable, and Affordable repairs.'
    },
    {
      image: 'https://5.imimg.com/data5/ZZ/VS/HA/SELLER-2656676/house-wiring.png',
      title: 'Home Electrical Services',
      text: 'Safe House  Wiring and House Wiring Repair.'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-kfXzej64f5cTPDfsTOt2Yr2dvGan7EoMg&s',
      title: 'plumbing Services',
      text: 'Home plumbing works & Repair.'
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

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
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: window.innerWidth <= 768 ? 'contain' : 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          transition: 'background-image 0.5s',
          minHeight: window.innerWidth <= 768 ? '220px' : '350px',
          width: '100%',
          marginTop: window.innerWidth <= 768 ? '-24px' : '-40px',
        }}
      >
        <div className="hero-content hero-overlay">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].text}</p>
          {/* ...existing code... */}
          {/* ...existing code... */}
          {/* ...existing code... */}
          {/* Down arrow removed as requested */}
          {/* Move quick response badge even further down for more separation */}
          <div style={{ marginTop: 64, marginBottom: 8 }}>
            <div className="hero-cta-column">
              <span className="cta-badge">Quick Responce is Our Speaciality and Reasonable Price</span>
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
      {showArrow && !isScrolling && !waitingToShow && (
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
            borderRadius: '35px',
            width: 220,
            height: 48,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px #0003',
            animation: 'blink-call 1s infinite',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: 3,
            textDecoration: 'none',
            transition: 'background 0.1s',
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 'bold', whiteSpace: 'nowrap' }}>Call Now 9381283935</span>
        </a>
      )}
      <style>{`
        @media (min-width: 768px) {
          .floating-call-btn { display: none !important; }
        }
        @keyframes blink-call {
          0%, 100% { box-shadow: 0 0 0 0 #25d36688; }
          100% { box-shadow: 0 0 0 56px #25d36633; }
        }
      `}</style>
    </>
  )
}
