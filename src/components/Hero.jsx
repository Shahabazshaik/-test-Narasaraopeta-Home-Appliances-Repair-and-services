
import './Hero.css'
import { useEffect, useState, useRef } from 'react';

function UpArrowIcon({ style }) {
  return (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 19a1 1 0 0 1-1-1V7.83l-4.29 4.3a1 1 0 1 1-1.42-1.42l6-6a1 1 0 0 1 1.42 0l6 6a1 1 0 1 1-1.42 1.42L13 7.83V18a1 1 0 0 1-1 1Z"/></svg>
  );
}

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const upArrowTimeout = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [waitingToShow, setWaitingToShow] = useState(false);
  const scrollTimeout = useRef(null);
  const showTimeout = useRef(null);

  // Slideshow logic with text sync
  const slides = [
    {
      image: 'https://tse3.mm.bing.net/th/id/OIP.O5VQWO_WKedPH2En-GF93QHaE7?w=650&h=433&rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Welcome to  Home Appliances Repair',
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
          if (entry.isIntersecting) setShowUpArrow(false);
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
      if (upArrowTimeout.current) clearTimeout(upArrowTimeout.current);

      setShowUpArrow(false);
      upArrowTimeout.current = setTimeout(() => {
        // Only show if not at top and not at contact section
        if (window.scrollY > 100 && !(contactSection && contactSection.getBoundingClientRect().top < window.innerHeight && contactSection.getBoundingClientRect().bottom > 0)) {
          setShowUpArrow(true);
        }
      }, 7000);

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
      if (upArrowTimeout.current) clearTimeout(upArrowTimeout.current);
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
          <h2 style={{
            color: '#fff',
            fontFamily: 'Poppins, Inter, Arial, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textShadow: '0 4px 16px #0006',
            fontSize: '2.1rem',
            marginBottom: 8,
            lineHeight: 1.2
          }}>
            {slides[currentSlide].title}
          </h2>
          <p style={{
            color: '#e3e6ea',
            fontFamily: 'Poppins, Inter, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '1.15rem',
            textShadow: '0 1px 6px #0005',
            marginBottom: 0,
            lineHeight: 1.5
          }}>
            {slides[currentSlide].text}
          </p>
          {/* ...existing code... */}
          {/* ...existing code... */}
          {/* ...existing code... */}
          {/* Down arrow removed as requested */}
          {/* Move quick response badge even further down for more separation */}
          <div style={{ marginTop: 64, marginBottom: 24 }}>
            <div className="hero-cta-column">
              <span className="cta-badge">Quick Response is Our Speciality and Reasonable Price</span>
            </div>
          </div>
          {/* Mobile: show text under badge, Desktop: show below button */}
          {window.innerWidth <= 768 && (
            <div className="hero-mobile-service-text">
             <sup> We are Service Provider for </sup>
                 <strong> Refrigerator Repair Services in Narasaraopet-AndhraPradesh, Washing Machine Repair Services in Narasaraopet-AndhraPradesh, AC (Air Condition) Repair Services in Narasaraopet-AndhraPradesh, House Electrical Repair Services in Narasaraopet-AndhraPradesh, plumbing work & Repair Services in Narasaraopet-AndhraPradesh, plumber  in Narasaraopet-AndhraPradesh, current Repair Services in Narasaraopet-AndhraPradesh, Geyser Repair Services in Narasaraopet-AndhraPradesh,</strong>
                 <small>. We have Expert Team of Engineers, they have more than 10 years exprience.</small>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
            <button
              className="cta-button modern-input-btn"
              type="button"
              style={{
                marginTop: 0,
                padding: '14px 25px',
                borderRadius: '12px',
                background: '#25d366',
                color: '#fff',
                fontWeight: 600,
                fontFamily: 'Poppins, Inter, Arial, sans-serif',
                fontSize: '1.08rem',
                boxShadow: '0 2px 8px rgba(37, 211, 102, 0.10)',
                border: '1.5px solid #25d366',
                letterSpacing: '0.3px',
                transition: 'all 0.2s',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
              onClick={() => window.open('https://wa.me/919381283935?text=I%20want%20to%20book%20a%20service', '_blank')}
              onMouseOver={e => {
                e.currentTarget.style.background = '#1ebe5d';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.border = '1.5px solid #1ebe5d';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = '#25d366';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.border = '1.5px solid #25d366';
              }}
            >
              Book a Service
              {/* <h6 style={{margin: 0, marginLeft: 8, fontWeight: 600, fontSize: '1.08rem', color: '#fff'}}>9381283935</h6> */}
            </button>
            {/* WhatsApp icon floating button, fixed at middle right */}
            <a
              href="https://wa.me/919381283935?text=I%20want%20to%20book%20a%20service"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              style={{
                position: 'fixed',
                top: '85%',
                right: 9,
                transform: 'translateY(-50%)',
                background: '#25d366',
                border: 'none',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px #25d36655',
                cursor: 'pointer',
                zIndex: 9999,
                transition: 'background 0.2s',
                padding: 0,
                textDecoration: 'none',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#1ebe5d';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = '#25d366';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 32 32" style={{display: 'block'}}>
                <g>
                  <circle cx="16" cy="16" r="16" fill="#25d366"/>
                  <path d="M16 7.2c-4.8 0-8.8 3.9-8.8 8.8 0 1.6.4 3.1 1.2 4.5L7 25l4.6-1.2c1.3.7 2.7 1.1 4.2 1.1 4.8 0 8.8-3.9 8.8-8.8s-4-8.8-8.8-8.8zm0 15.8c-1.3 0-2.6-.4-3.7-1l-.3-.2-2.7.7.7-2.6-.2-.3c-.7-1.1-1.1-2.4-1.1-3.7 0-3.9 3.2-7.1 7.1-7.1s7.1 3.2 7.1 7.1-3.2 7.1-7.1 7.1zm4-5.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.5.7-.7.8-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.5-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3 0-.1 0-.2 0-.3 0-.1-.2-.9-.4-1.2-.1-.3-.3-.3-.4-.3h-.3c-.1 0-.3 0-.5.2-.2.2-.7.6-.7 1.5 0 .9.7 1.8.8 1.9.1.1 1.4 2.2 3.5 3 .5.2.9.3 1.2.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.2-1 .2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2z" fill="#fff"/>
                </g>
              </svg>
            </a>
            {window.innerWidth > 768 && (
              <div style={{marginTop: '18px', textAlign: 'center'}}>
               
                 <sup> We are Service Provider for </sup>
               <strong> Refrigerator Repair Services in Narasaraopet-AndhraPradesh, Washing Machine Repair Services in Narasaraopet-AndhraPradesh, AC (Air Condition) Repair Services in Narasaraopet-AndhraPradesh, House Electrical Repair Services in Narasaraopet-AndhraPradesh, plumbing work & Repair Services in Narasaraopet-AndhraPradesh, plumber  in Narasaraopeta-AndhraPradesh, current Repair Services in Narasaraopeta-AndhraPradesh, Geyser Repair Services in Narasaraopet-AndhraPradesh,</strong>
                 <small>. We have Expert Team of Engineers, in Narasaraopeta they have more than 10 years exprience.</small>
                
              </div>
            )}
          </div>
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
          {/* WhatsApp SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" style={{marginRight: 10, minWidth: 28, minHeight: 28, verticalAlign: 'middle'}}>
            <circle cx="16" cy="16" r="16" fill="#25d366"/>
            <path d="M24.5 19.7c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.4-.8 1.2-1 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7 0 1.6 1.2 3.1 1.4 3.3.2.2 2.3 3.6 5.7 4.9.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.4-.2-.8-.4z" fill="#fff"/>
          </svg>
          <span style={{ fontSize: 18, fontWeight: 500, fontFamily: 'Poppins, Inter, Arial, sans-serif', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>Call 9381283935</span>
        </a>
      )}
      {/* Up Arrow Scroll-to-Top Button */}
      {showUpArrow && (
        <button
          className="scroll-up-btn"
          title="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            left: 16,
            bottom: 32,
            zIndex: 9999,
            background: '#0074D9',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px #0003',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.1s',
            animation: 'blink-up-arrow 1.2s infinite',
          }}
        >
          <UpArrowIcon style={{ width: 28, height: 28 }} />
        </button>
      )}
      <style>{`
        @media (min-width: 768px) {
          .floating-call-btn { display: none !important; }
          .scroll-up-btn { display: none !important; }
        }
        @keyframes blink-call {
          0%, 100% { box-shadow: 0 0 0 0 #25d36688; }
          100% { box-shadow: 0 0 0 56px #25d36633; }
        }
        @keyframes blink-up-arrow {
          0%, 100% { box-shadow: 0 0 0 0 #0074D988; }
          50% { box-shadow: 0 0 0 16px #0074D933; }
        }
      `}</style>
    </>
  )
}
