// App.jsx
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <LabourExport />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fas fa-globe-africa"></i>
        <span>TBH <span className="highlight">Travel</span></span>
      </div>
      <div className="nav-links" id="navLinks">
        <a href="#services">Services</a>
        <a href="#destinations">Destinations</a>
        <a href="#labour">Labour Export</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact" className="btn btn-small">Contact</a>
      </div>
      <div className="hamburger" onClick={() => {
        const nav = document.getElementById('navLinks');
        nav.classList.toggle('active');
      }}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge">
          <i className="fas fa-route"></i> Kenya → UAE
        </div>
        <h1>
          Your Gateway to <br />
          <span className="gradient-text">Dubai & Beyond</span>
        </h1>
        <p>
          Professional travel, tourism, and labour export services from Kenya to the United Arab Emirates. 
          We connect talent with opportunity.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Start Journey
          </button>
          <button className="btn btn-outline">
            <i className="fas fa-briefcase"></i> Labour Export
          </button>
        </div>
        <div className="stats">
          <div>
            <span className="stat-number">3,200+</span>
            <span className="stat-label">Travelers Placed</span>
          </div>
          <div>
            <span className="stat-number">97%</span>
            <span className="stat-label">Visa Success</span>
          </div>
          <div>
            <span className="stat-number">450+</span>
            <span className="stat-label">Workers Exported</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&crop=center" 
          alt="Dubai Skyline" 
        />
        <div className="image-overlay">
          <h3>Dubai • Abu Dhabi • Sharjah</h3>
          <p>Work • Travel • Thrive</p>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: 'fa-passport',
      title: 'Visa Processing',
      desc: 'Fast-track UAE visa services with 97% approval rate for Kenyan citizens.'
    },
    {
      icon: 'fa-plane',
      title: 'Flight Bookings',
      desc: 'Best fares on Emirates, Kenya Airways, and Etihad with flexible dates.'
    },
    {
      icon: 'fa-hotel',
      title: 'Accommodation',
      desc: 'Curated stays from luxury resorts to worker-friendly apartments.'
    },
    {
      icon: 'fa-briefcase',
      title: 'Labour Export',
      desc: 'Connecting Kenyan talent with UAE employers in construction, hospitality, and more.'
    },
    {
      icon: 'fa-car',
      title: 'Airport Transfers',
      desc: 'Private chauffeur services from DXB, AUH, and SHJ airports.'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Support',
      desc: 'Round-the-clock assistance in English, Swahili, and Arabic.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
        <p className="section-sub">
          Comprehensive travel and labour solutions tailored for Kenyans heading to the UAE.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-wrapper">
              <i className={`fas ${service.icon}`}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Destinations Component with Real Images
const Destinations = () => {
  const destinations = [
    {
      city: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&crop=center',
      highlights: 'Burj Khalifa, Dubai Mall, Palm Jumeirah',
      vibe: 'Modern Luxury'
    },
    {
      city: 'Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop&crop=center',
      highlights: 'Sheikh Zayed Mosque, Louvre, Ferrari World',
      vibe: 'Cultural Elegance'
    },
    {
      city: 'Sharjah',
      image: 'https://images.unsplash.com/photo-1570168007204-db528c6958f9?w=600&h=400&fit=crop&crop=center',
      highlights: 'Museum of Islamic Civilization, Al Noor Island',
      vibe: 'Heritage & Art'
    },
    {
      city: 'Ras Al Khaimah',
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&h=400&fit=crop&crop=center',
      highlights: 'Jebel Jais, Desert Camping, Beaches',
      vibe: 'Adventure & Nature'
    }
  ];

  return (
    <section className="destinations" id="destinations">
      <div className="section-header">
        <h2 className="section-title">Explore the <span className="gradient-text">UAE States</span></h2>
        <p className="section-sub">
          Discover iconic destinations across the United Arab Emirates.
        </p>
      </div>
      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div className="dest-card" key={index}>
            <div className="dest-image-wrapper">
              <img src={dest.image} alt={dest.city} loading="lazy" />
            </div>
            <h3>{dest.city}</h3>
            <p className="dest-highlights">{dest.highlights}</p>
            <span className="dest-vibe">{dest.vibe}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Labour Export Component
const LabourExport = () => {
  const labourStats = [
    { number: '450+', label: 'Workers Placed' },
    { number: '120+', label: 'Partner Companies' },
    { number: '92%', label: 'Retention Rate' },
    { number: '15+', label: 'Industry Sectors' }
  ];

  return (
    <section className="labour-export" id="labour">
      <div className="labour-container">
        <div className="labour-content">
          <h2 className="section-title">
            <i className="fas fa-briefcase"></i> Labour <span className="gradient-text">Export</span>
          </h2>
          <p className="section-sub">
            Bridging Kenyan talent with UAE employers. We facilitate legal, ethical, 
            and professional labour export across multiple sectors.
          </p>
          <div className="labour-stats">
            {labourStats.map((stat, index) => (
              <div className="labour-stat" key={index}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="labour-sectors">
            <span className="sector-tag">Construction</span>
            <span className="sector-tag">Hospitality</span>
            <span className="sector-tag">Healthcare</span>
            <span className="sector-tag">Logistics</span>
            <span className="sector-tag">Engineering</span>
            <span className="sector-tag">Domestic Work</span>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Register for Labour Export
          </button>
        </div>
        <div className="labour-image">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&crop=center" 
            alt="Working professionals" 
          />
          <div className="image-caption">
            <i className="fas fa-users"></i> Kenyan workers thriving in the UAE
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Grace Mwangi',
      from: 'Nairobi, Kenya',
      text: 'TBH Travel made my transition to Dubai seamless. The visa was approved in 3 days and they found me a great job in hospitality.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=center',
      rating: 5
    },
    {
      name: 'James Ochieng',
      from: 'Kisumu, Kenya',
      text: 'Professional service from start to finish. They handled everything — flights, visas, and even helped me secure a construction job in Abu Dhabi.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center',
      rating: 5
    },
    {
      name: 'Faith Akinyi',
      from: 'Mombasa, Kenya',
      text: 'I\'ve been working in Dubai for 2 years now, thanks to TBH Travel. Their labour export program is top-notch and fully transparent.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=center',
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <h2 className="section-title">Success <span className="gradient-text">Stories</span></h2>
        <p className="section-sub">
          Real stories from Kenyans who traveled and found work through TBH Travel.
        </p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img src={t.image} alt={t.name} className="testimonial-avatar" />
              <div>
                <strong>{t.name}</strong>
                <span>{t.from}</span>
              </div>
            </div>
            <div className="stars">
              {[...Array(t.rating)].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <i className="fas fa-globe-africa"></i>
            <span>TBH <span className="highlight">Travel</span></span>
          </div>
          <p>Your trusted partner for Kenya-UAE travel, tourism, and labour export.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#destinations">Destinations</a>
            <a href="#labour">Labour Export</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="#"><i className="fas fa-phone"></i> +254 700 123 456</a>
            <a href="#"><i className="fas fa-envelope"></i> info@tbhtravel.com</a>
            <a href="#"><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</a>
          </div>
          <div>
            <h4>Office Hours</h4>
            <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
            <p>Sat: 9:00 AM - 2:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 TBH Travel Agency. All rights reserved.</p>
        <p>Empowering Kenyans to <i className="fas fa-heart" style={{color: '#ef4444'}}></i> work and travel in the UAE</p>
      </div>
    </footer>
  );
};

// WhatsApp Button Component
const WhatsAppButton = () => {
  const phoneNumber = '254700123456';
  const message = 'Hello TBH Travel, I need assistance with travel to the UAE.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default App;