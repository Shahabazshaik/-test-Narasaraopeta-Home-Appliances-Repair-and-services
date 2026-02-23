
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
      image: 'https://tse3.mm.bing.net/th/id/OIP.O5VQWO_WKedPH2En-GF93QHaE7?w=650&h=433&rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Welcome to Narasaraopeta Home Appliances Repair',
      text:  'Your trusted home appliance repair service in Narasaraopeta.'
    },
    {
      image: 'https://media.istockphoto.com/id/2140182550/photo/a-repairman-using-a-screwdriver-to-removes-the-front-lid-of-a-washing-machine.jpg?s=612x612&w=0&k=20&c=B4ctP71R7Gr2_XLacOqOpLpeiMYJfyZtTf_Y_3K2uxQ=',
      title: 'Washing Machine Repair',
      text: 'Fast and Reliable Washing Machine Repair Services.'
    },
    {
      image: 'https://media.istockphoto.com/id/847612846/photo/male-technician-checking-refrigerator.webp?a=1&b=1&s=612x612&w=0&k=20&c=4LvYNl7-vaix9ICCL-rDI3_zietH0IvJQH3tArecqfw=',
      title: 'Refrigerator Repair',
      text: 'Expert Refrigerator Repair Services.'
    },
    {
      image: 'https://media.istockphoto.com/id/1490247522/photo/repair-and-maintenance-of-boilers-the-hand-of-a-plumber-installs-a-thermostat-in-a-boiler.jpg?s=612x612&w=0&k=20&c=Lm5HdI2sf4mp2NOJq7yxwwmcAIgLG8Q7x26P5b6DjXA=',
      title: 'Geyser Repair & Installation',
      text: 'Fast, Reliable, and Affordable repairs.'
    },
    {
      image: 'https://5.imimg.com/data5/ZZ/VS/HA/SELLER-2656676/house-wiring.png',
      title: 'Home Electrical Services',
      text: 'Safe House  Wiring and House Wiring Repair.'
    },
    {
      image: 'https://media.istockphoto.com/id/482988553/photo/repairing-sink.jpg?s=612x612&w=0&k=20&c=FXvXGE08ZtyhhsnLALnAMFg70hOt872dDjtAG57QMfI=',
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
          <h2 style={{ color: '#f4f6f8', fontFamily: 'fangsong, ', fontWeight: 700, letterSpacing: '1px', textShadow: '0 6px 19px #0008' }}>
            {slides[currentSlide].title}
          </h2>
          <p style={{ color: '#fff', fontFamily: '-moz-initial  ', fontWeight: 400, fontSize: '1.2rem', textShadow: '0 1px 4px #0007' }}>
            {slides[currentSlide].text}
          </p>
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
