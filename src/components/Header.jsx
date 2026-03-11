import './Header.css'

export default function Header() {
  const [showServices, setShowServices] = useState(false)
  const [visible, setVisible] = useState(true)
  const prevScrollPos = useRef(typeof window !== 'undefined' ? window.pageYOffset : 0)
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const scrolledDown = currentScrollPos > prevScrollPos.current && currentScrollPos > 80
      setVisible(!scrolledDown)
      prevScrollPos.current = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${visible ? 'header--visible' : 'header--hidden'}`}>
      <div className="container">
        <div className="logo">
          <h1>Narasaraopet Home Appliances & Electrical Services at Door Step</h1>
          <p> Narasaraopet AC Repair | Washing Machine Repair | Fridge Repair | Electrical Works | Geyser Repair</p>
        </div>
        <nav className="nav">
          {/* Use React Router Link for internal navigation */}
          <Link to="/">Home</Link>
          {/* <Link to="/services">Services</Link> */}
          <Link to="/ac-repair-narasaraopet">AC Repair</Link>
          <Link to="/washing-machine-repair-narasaraopet">Washing Machine Repair</Link>
          <Link to="/fridge-repair-narasaraopet">Fridge Repair</Link>
          <Link to="/electrical-services-narasaraopet">Electrical Services</Link>
          <Link to="/about">About</Link>
          <Link to="/testimonials">Reviews</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
// Add import for Link from react-router-dom
import { Link } from 'react-router-dom';
