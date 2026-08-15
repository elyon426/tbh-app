// App.jsx
import React, { useEffect } from 'react';
import './App.css';

// Loads the Font Awesome icon library once, on mount, so every <i className="fas fa-...">
// icon in this file actually renders. Without this, the icon classes exist in the markup
// but there's no stylesheet defining them, so nothing shows up.
const useFontAwesome = () => {
  useEffect(() => {
    const existing = document.querySelector('link[data-font-awesome]');
    if (existing) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    link.setAttribute('data-font-awesome', 'true');
    document.head.appendChild(link);
  }, []);
};

const App = () => {
  useFontAwesome();

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
          <i className="fas fa-briefcase"></i> Kenya's Trusted Labour Export Agency
        </div>
        <h1>
          Taking Kenyan Talent <br />
          <span className="gradient-text">Home to Work in the UAE</span>
        </h1>
        <p>
          From Nairobi to Mombasa, Kisumu to Eldoret, we recruit, vet and place skilled and
          semi-skilled Kenyan workers with reputable employers across the United Arab Emirates —
          fully licensed by Kenya's National Employment Authority (NEA).
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
            <span className="stat-label">Kenyans Deployed</span>
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
          alt="Kenyan workers deployed in the UAE" 
        />
        <div className="image-overlay">
          <h3>Dubai • Abu Dhabi • Sharjah</h3>
          <p>Kenyan hands, Gulf opportunities</p>
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
      desc: 'Rigorous vetting of candidates from across Kenya\'s 47 counties to match UAE employer requirements.'
    },
    {
      icon: 'fa-file-contract',
      title: 'Contract Management',
      desc: 'Transparent employment contracts compliant with UAE labour law and Kenya\'s Employment Act, 2007.'
    },
    {
      icon: 'fa-passport',
      title: 'Visa & Work Permits',
      desc: 'End-to-end processing of UAE work visas, medicals and labour cards, coordinated with Kenya\'s Directorate of Immigration Services.'
    },
    {
      icon: 'fa-plane',
      title: 'Deployment Logistics',
      desc: 'Managed travel from JKIA and Moi International Airport, including flights, airport transfers and accommodation.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Pre-Departure Training',
      desc: 'NITA-aligned skills and orientation training so every worker leaves Kenya ready for the UAE workplace.'
    },
    {
      icon: 'fa-headset',
      title: 'Post-Placement Support',
      desc: '24/7 support for workers and employers, with a local Nairobi office your family can always reach.'
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
      image: 'https://images.unsplash.com/photo-1566555108172-f8a02274a3d3?w=600&h=400&fit=crop&crop=center',
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
    { step: '01', title: 'Registration', desc: 'Workers register at our Nairobi office or via our online portal for assessment.' },
    { step: '02', title: 'Screening', desc: 'Skills verification, government medical checks, and one-on-one interviews.' },
    { step: '03', title: 'Matching', desc: 'We match candidates with vetted UAE employer requirements.' },
    { step: '04', title: 'Deployment', desc: 'Visa processing, pre-departure briefing, travel arrangements and placement.' }
  ];

  return (
    <section className="labour-export" id="labour">
      <div className="labour-container">
        <div className="labour-content">
          <h2 className="section-title">
            <i className="fas fa-briefcase"></i> Labour <span className="gradient-text">Export</span>
          </h2>
          <p className="section-sub">
            TBH Labour is a licensed recruitment agency, registered with Kenya's National
            Employment Authority (NEA), connecting Kenyan workers with reputable employers
            across the United Arab Emirates. Harambee — we grow together, at home and abroad.
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
              <span className="stat-number">47</span>
              <span className="stat-label">Counties Reached</span>
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
            alt="Kenyan working professionals" 
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
      from: 'From Nakuru, now in Dubai',
      text: 'TBH Labour helped me secure a hospitality job in Dubai. The process was smooth, and they supported me every step of the way. I\'ve been working here for 2 years now, and I still send money home to my family every month.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=center',
      rating: 5,
      type: 'worker'
    },
    {
      name: 'Ahmed Al Maktoum',
      from: 'Construction Company, Abu Dhabi',
      text: 'We\'ve hired over 50 Kenyan workers through TBH Labour. Their screening process is excellent, and the workers are skilled, reliable and hardworking.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center',
      rating: 5,
      type: 'employer'
    },
    {
      name: 'James Ochieng',
      from: 'From Kisumu, now in Sharjah',
      text: 'From registration at the Nairobi office to deployment, TBH Labour made everything easy and above board. I now work in manufacturing and I am building a home for my family back in Kisumu. Asante, TBH!',
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
          Testimonials from Kenyan workers and UAE employers who trust TBH Labour.
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
          <p>Licensed labour export agency connecting Kenyan workers with UAE employers since 2018. Registered with Kenya's National Employment Authority.</p>
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
            <a href="#"><i className="fas fa-envelope"></i> info@tbhlabour.co.ke</a>
            <a href="#"><i className="fas fa-map-marker-alt"></i> Kimathi Street, Nairobi CBD, Kenya</a>
          </div>
          <div>
            <h4>Office Hours</h4>
            <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
            <p>Sat: 9:00 AM - 2:00 PM</p>
            <p>Sun: Closed</p>
            <p className="license">NEA License #: NEA/2024/0078</p>
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
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.398.638 4.686 1.85 6.69L4 29l7.51-1.828A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.94 0-3.842-.52-5.5-1.5l-.395-.234-4.457 1.085 1.166-4.34-.257-.41A9.63 9.63 0 0 1 5.3 15c0-5.9 4.8-10.7 10.704-10.7 5.9 0 10.7 4.8 10.7 10.7s-4.8 10.7-10.7 10.7Zm5.86-8.017c-.32-.16-1.895-.936-2.19-1.043-.294-.107-.508-.16-.722.16-.213.32-.828 1.043-1.016 1.257-.187.213-.374.24-.694.08-.32-.16-1.35-.498-2.573-1.587-.951-.848-1.593-1.895-1.78-2.216-.187-.32-.02-.494.14-.653.144-.144.32-.374.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.722-1.74-.99-2.383-.26-.626-.526-.541-.722-.551l-.615-.011c-.213 0-.56.08-.854.4-.293.32-1.12 1.095-1.12 2.67 0 1.574 1.147 3.095 1.307 3.308.16.213 2.256 3.446 5.467 4.833.764.33 1.36.527 1.826.674.767.244 1.465.21 2.017.127.615-.092 1.895-.774 2.163-1.522.267-.747.267-1.388.187-1.522-.08-.134-.293-.213-.613-.373Z"/>
      </svg>
    </a>
  );
};

export default App;