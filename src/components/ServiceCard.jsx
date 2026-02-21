import './ServiceCard.css'

export default function ServiceCard({ service }) {
  const getImagePath = (id) => {
    const paths = {
      1: 'https://cdn.vectorstock.com/i/500p/32/30/washing-machine-repair-technician-vector-60763230.jpg',
      2: 'https://thumbs.dreamstime.com/b/cartoon-mover-carefully-relocating-blue-fridge-recycle-bin-illustration-delivery-man-recycling-flat-style-404803200.jpg',
      3: 'https://cdnl.iconscout.com/lottie/free/preview/free-ac-installation-animation-gif-download-7922394.png?f=webp',
      4: 'https://img.freepik.com/premium-vector/young-electrician-professional-checking-testing-wire-using-multimeter-power-supply-wiring_135661-50.jpg?semt=ais_hybrid&w=740&q=80',
      5: 'https://udaipurcare.com/wp-content/uploads/2020/02/1539166302.jpg',
      6: 'https://image.shutterstock.com/image-vector/plumber-repairing-kitchen-sink-piping-260nw-2190706209.jpg',
      7: 'https://www.shutterstock.com/shutterstock/photos/2184010063/display_1500/stock-vector-modern-minimalist-home-appliance-store-logo-refrigerator-stove-and-washing-machine-icon-2184010063.jpg'
    };
    return paths[id] || service.image;
  };

    return (
      <div
        className="service-card"
        style={service.bgImage ? {
          position: 'relative',
          minHeight: '340px',
          borderRadius: '16px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          background: 'none',
        } : {}}
      >
        {service.bgImage && (
          <div
            className="service-bg-image"
            style={{
              backgroundImage: `url(${service.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '16px',
            }} />
          </div>
        )}
        <div style={{ position: 'relative', zIndex: 1 }}>
      <div className="service-icon">
        <img 
          src={getImagePath(service.id)} 
          alt={service.title}
          className="service-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <span className="fallback-icon">{service.icon}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="features">
        <h4>Why Choose Us:</h4>
        <ul>
          {service.features.map((feature, idx) => (
            <li key={idx}>✓ {feature}</li>
          ))}
        </ul>
      </div>
      <button
        className="service-button"
        type="button"
        onClick={() => window.open('https://wa.me/919381283935?text=I%20want%20to%20book%20a%20service%20for%20' + encodeURIComponent(service.title), '_blank')}
      >
        Book Service
      </button>
    </div>
    </div>
  )
}
