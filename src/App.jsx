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
        <i className="fas fa-users-cog"></i>
        <span>TBH <span className="highlight">Labour</span></span>
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
          <i className="fas fa-briefcase"></i> Kenya's Leading Labour Export Agency
        </div>
        <h1>
          Connect Kenyan <br />
          <span className="gradient-text">Talent with UAE</span> Employers
        </h1>
        <p>
          We specialize in recruiting, vetting, and exporting skilled and semi-skilled 
          workers from Kenya to the United Arab Emirates. Your gateway to Gulf employment.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Register as Worker
          </button>
          <button className="btn btn-outline">
            <i className="fas fa-building"></i> Hire Talent
          </button>
        </div>
        <div className="stats">
          <div>
            <span className="stat-number">1,200+</span>
            <span className="stat-label">Workers Deployed</span>
          </div>
          <div>
            <span className="stat-number">97%</span>
            <span className="stat-label">Success Rate</span>
          </div>
          <div>
            <span className="stat-number">150+</span>
            <span className="stat-label">UAE Employers</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&crop=center" 
          alt="Workers in UAE" 
        />
        <div className="image-overlay">
          <h3>Dubai • Abu Dhabi • Sharjah</h3>
          <p>Building careers, building nations</p>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: 'fa-user-check',
      title: 'Recruitment & Screening',
      desc: 'Rigorous vetting of candidates to match UAE employer requirements across all sectors.'
    },
    {
      icon: 'fa-file-contract',
      title: 'Contract Management',
      desc: 'Transparent employment contracts compliant with UAE labour laws and Kenyan regulations.'
    },
    {
      icon: 'fa-passport',
      title: 'Visa & Work Permits',
      desc: 'End-to-end processing of UAE work visas, medicals, and labour cards.'
    },
    {
      icon: 'fa-plane',
      title: 'Deployment Logistics',
      desc: 'Managed travel arrangements including flights, airport transfers, and accommodation.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Skills Development',
      desc: 'Pre-departure training to ensure workers meet UAE industry standards.'
    },
    {
      icon: 'fa-headset',
      title: 'Post-Placement Support',
      desc: '24/7 support for workers and employers to ensure successful placements.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
        <p className="section-sub">
          Comprehensive workforce solutions connecting Kenyan talent with UAE opportunities.
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

// Destinations Component - UAE States where workers are placed
const Destinations = () => {
  const destinations = [
    {
      city: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&crop=center',
      sectors: 'Construction, Hospitality, Logistics',
      demand: 'High demand for skilled workers'
    },
    {
      city: 'Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop&crop=center',
      sectors: 'Oil & Gas, Healthcare, Engineering',
      demand: 'Growing industrial sector'
    },
    {
      city: 'Sharjah',
      image: 'https://images.unsplash.com/photo-1570168007204-db528c6958f9?w=600&h=400&fit=crop&crop=center',
      sectors: 'Manufacturing, Education, Retail',
      demand: 'Stable employment opportunities'
    },
    {
      city: 'Ras Al Khaimah',
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&h=400&fit=crop&crop=center',
      sectors: 'Tourism, Agriculture, Construction',
      demand: 'Emerging job market'
    }
  ];

  return (
    <section className="destinations" id="destinations">
      <div className="section-header">
        <h2 className="section-title">Where Our <span className="gradient-text">Workers Go</span></h2>
        <p className="section-sub">
          We place Kenyan workers across all seven emirates of the UAE.
        </p>
      </div>
      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div className="dest-card" key={index}>
            <div className="dest-image-wrapper">
              <img src={dest.image} alt={dest.city} loading="lazy" />
            </div>
            <h3>{dest.city}</h3>
            <p className="dest-sectors"><i className="fas fa-briefcase"></i> {dest.sectors}</p>
            <span className="dest-vibe">{dest.demand}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Labour Export Component - Main Focus
const LabourExport = () => {
  const sectors = [
    { icon: 'fa-hard-hat', name: 'Construction' },
    { icon: 'fa-hotel', name: 'Hospitality' },
    { icon: 'fa-heartbeat', name: 'Healthcare' },
    { icon: 'fa-truck', name: 'Logistics' },
    { icon: 'fa-industry', name: 'Manufacturing' },
    { icon: 'fa-home', name: 'Domestic Work' },
    { icon: 'fa-ship', name: 'Maritime' },
    { icon: 'fa-school', name: 'Education' }
  ];

  const process = [
    { step: '01', title: 'Registration', desc: 'Workers register with TBH Labour for assessment.' },
    { step: '02', title: 'Screening', desc: 'Skills verification, medical checks, and interviews.' },
    { step: '03', title: 'Matching', desc: 'We match candidates with UAE employer requirements.' },
    { step: '04', title: 'Deployment', desc: 'Visa processing, travel arrangements, and placement.' }
  ];

  return (
    <section className="labour-export" id="labour">
      <div className="labour-container">
        <div className="labour-content">
          <h2 className="section-title">
            <i className="fas fa-briefcase"></i> Labour <span className="gradient-text">Export</span>
          </h2>
          <p className="section-sub">
            TBH Labour is a licensed recruitment agency connecting Kenyan workers with 
            reputable employers across the United Arab Emirates.
          </p>
          
          <div className="labour-stats">
            <div className="labour-stat">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">Workers Placed</span>
            </div>
            <div className="labour-stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">UAE Employers</span>
            </div>
            <div className="labour-stat">
              <span className="stat-number">97%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="labour-stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Industry Sectors</span>
            </div>
          </div>

          <h3 className="sectors-title">We Place Workers In:</h3>
          <div className="labour-sectors">
            {sectors.map((sector, index) => (
              <span className="sector-tag" key={index}>
                <i className={`fas ${sector.icon}`}></i> {sector.name}
              </span>
            ))}
          </div>

          <div className="process-section">
            <h3 className="process-title">How It Works</h3>
            <div className="process-steps">
              {process.map((step, index) => (
                <div className="process-step" key={index}>
                  <span className="step-number">{step.step}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-buttons">
            <button className="btn btn-primary">
              <i className="fas fa-user-plus"></i> Register as Worker
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-building"></i> Hire Kenyan Talent
            </button>
          </div>
        </div>
        <div className="labour-image">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&crop=center" 
            alt="Working professionals" 
          />
          <div className="image-caption">
            <i className="fas fa-users"></i> Kenyan workers building the UAE
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Component - From workers and employers
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Grace Mwangi',
      from: 'Kenyan Worker, Dubai',
      text: 'TBH Labour helped me secure a hospitality job in Dubai. The process was smooth, and they supported me every step of the way. I\'ve been working here for 2 years now!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=center',
      rating: 5,
      type: 'worker'
    },
    {
      name: 'Ahmed Al Maktoum',
      from: 'Construction Company, Abu Dhabi',
      text: 'We\'ve hired over 50 Kenyan workers through TBH Labour. Their screening process is excellent, and the workers are skilled, reliable, and hardworking.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center',
      rating: 5,
      type: 'employer'
    },
    {
      name: 'James Ochieng',
      from: 'Kenyan Worker, Sharjah',
      text: 'From registration to deployment, TBH Labour made everything easy. I now work in manufacturing and send money home to support my family. Thank you, TBH!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=center',
      rating: 5,
      type: 'worker'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
        <p className="section-sub">
          Testimonials from workers and employers who trust TBH Labour.
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
                <span className={`badge-type ${t.type}`}>
                  {t.type === 'worker' ? '👷 Worker' : '🏢 Employer'}
                </span>
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
            <i className="fas fa-users-cog"></i>
            <span>TBH <span className="highlight">Labour</span></span>
          </div>
          <p>Licensed labour export agency connecting Kenyan workers with UAE employers since 2018.</p>
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
            <a href="#"><i className="fas fa-envelope"></i> info@tbhlabour.com</a>
            <a href="#"><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</a>
          </div>
          <div>
            <h4>Office Hours</h4>
            <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
            <p>Sat: 9:00 AM - 2:00 PM</p>
            <p>Sun: Closed</p>
            <p className="license">License #: LEA/2024/078</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 TBH Labour Export Agency. All rights reserved.</p>
        <p>Empowering Kenyans with <i className="fas fa-heart" style={{color: '#ef4444'}}></i> global employment</p>
      </div>
    </footer>
  );
};

// WhatsApp Button Component
const WhatsAppButton = () => {
  const phoneNumber = '254700123456';
  const message = 'Hello TBH Labour, I need assistance with labour export to the UAE.';
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