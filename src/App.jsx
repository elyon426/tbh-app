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
      <Testimonials />
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fas fa-plane-departure"></i>
        <span>Kenya<span className="highlight">2</span>UAE</span>
      </div>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#destinations">Destinations</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact" className="btn btn-small">Contact</a>
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
          <span className="gradient-text">Dubai & Abu Dhabi</span>
        </h1>
        <p>
          Seamless travel experiences from Nairobi to the United Arab Emirates.
          Visas, flights, hotels, and tours — all in one place.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Start Planning
          </button>
          <button className="btn btn-outline">
            <i className="fas fa-phone-alt"></i> Call Us
          </button>
        </div>
        <div className="stats">
          <div>
            <span className="stat-number">2,400+</span>
            <span className="stat-label">Happy Travelers</span>
          </div>
          <div>
            <span className="stat-number">98%</span>
            <span className="stat-label">Visa Success</span>
          </div>
          <div>
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <i className="fas fa-city"></i>
        <h3>Dubai Skyline</h3>
        <p>Burj Khalifa • Palm Jumeirah • Desert Safari</p>
        <small>✨ Premium travel experiences</small>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: 'fa-passport',
      title: 'Visa Assistance',
      desc: 'Fast-track UAE visa processing with 98% approval rate for Kenyan citizens.'
    },
    {
      icon: 'fa-plane',
      title: 'Flight Booking',
      desc: 'Best fares on Emirates, Kenya Airways, and Etihad with flexible dates.'
    },
    {
      icon: 'fa-hotel',
      title: 'Hotel Stays',
      desc: 'Curated stays from luxury resorts to budget-friendly apartments.'
    },
    {
      icon: 'fa-umbrella-beach',
      title: 'Tour Packages',
      desc: 'Desert safaris, city tours, and cultural experiences across the UAE.'
    },
    {
      icon: 'fa-car',
      title: 'Airport Transfers',
      desc: 'Private chauffeur services from DXB, AUH, and SHJ airports.'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Concierge',
      desc: 'Round-the-clock support in English, Swahili, and Arabic.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
        <p className="section-sub">
          End-to-end travel solutions tailored for Kenyan travelers heading to the UAE.
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

// Destinations Component
const Destinations = () => {
  const destinations = [
    {
      city: 'Dubai',
      emoji: '🌆',
      highlights: 'Burj Khalifa, Dubai Mall, Palm Jumeirah',
      vibe: 'Modern luxury'
    },
    {
      city: 'Abu Dhabi',
      emoji: '🏛️',
      highlights: 'Sheikh Zayed Mosque, Louvre, Ferrari World',
      vibe: 'Cultural elegance'
    },
    {
      city: 'Sharjah',
      emoji: '🏺',
      highlights: 'Museum of Islamic Civilization, Al Noor Island',
      vibe: 'Heritage & art'
    },
    {
      city: 'Ras Al Khaimah',
      emoji: '🏔️',
      highlights: 'Jebel Jais, desert camping, beaches',
      vibe: 'Adventure & nature'
    }
  ];

  return (
    <section className="destinations" id="destinations">
      <div className="section-header">
        <h2 className="section-title">Top <span className="gradient-text">Destinations</span></h2>
        <p className="section-sub">
          Discover the best of the UAE — from iconic skylines to hidden gems.
        </p>
      </div>
      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div className="dest-card" key={index}>
            <div className="dest-emoji">{dest.emoji}</div>
            <h3>{dest.city}</h3>
            <p className="dest-highlights">{dest.highlights}</p>
            <span className="dest-vibe">{dest.vibe}</span>
          </div>
        ))}
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
      text: 'Kenya2UAE made my first trip to Dubai stress-free. The visa was approved in 3 days and the hotel was amazing!',
      rating: 5
    },
    {
      name: 'James Ochieng',
      from: 'Kisumu, Kenya',
      text: 'Professional service from start to finish. They handled everything — flights, transfers, and even a desert safari.',
      rating: 5
    },
    {
      name: 'Faith Akinyi',
      from: 'Mombasa, Kenya',
      text: 'I travel to Abu Dhabi for business twice a year. Kenya2UAE is my go-to agency. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <h2 className="section-title">What Our <span className="gradient-text">Travelers Say</span></h2>
        <p className="section-sub">
          Real stories from Kenyans who traveled with us to the UAE.
        </p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {[...Array(t.rating)].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.from}</span>
            </div>
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
            <i className="fas fa-plane-departure"></i>
            <span>Kenya<span className="highlight">2</span>UAE</span>
          </div>
          <p>Your trusted travel partner for seamless Kenya-UAE journeys.</p>
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
            <a href="#testimonials">Testimonials</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="#"><i className="fas fa-phone"></i> +254 700 123 456</a>
            <a href="#"><i className="fas fa-envelope"></i> info@kenya2uae.com</a>
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
        <p>&copy; 2026 Kenya2UAE Travel Agency. All rights reserved.</p>
        <p>Crafted with <i className="fas fa-heart" style={{color: '#ef4444'}}></i> for Kenyan travelers</p>
      </div>
    </footer>
  );
};

export default App;