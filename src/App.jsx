import React, { useEffect, useState } from 'react';
import './App.css';

// Images - Assuming they were copied correctly to src/assets
import heroBg from './assets/hero-bg.png';
import aboutImg from './assets/about-img.png';
import guidanceImg from './assets/guidance-img.png';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Header background change on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app">
      {/* Header / Navigation */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo animate-fade">

            <span className="logo-text"><span>KakhiyA</span></span>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
          <div className="header-right">
            <div className="phone">
              <span>📞</span> +94 112 448 155
            </div>
            <button className="btn btn-gold">Get a Quote</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(rgba(15, 33, 30, 0.7), rgba(15, 33, 30, 0.7)), url(${heroBg})` }}>
        <div className="container hero-content">
          <span className="subtitle animate-fade">BEST HAJJ & UMRAH SERVICES IN SRI LANKA</span>
          <h1 className="animate-fade-up">Your Adventure <br/> Awaits with us !</h1>
          <p className="animate-fade-up" style={{ animationDelay: '0.1s' }}>Experience the sacred journey with Khakiya Travels & Tours. We provide comprehensive Hajj and Umrah solutions with excellence and integrity.</p>
          <div className="hero-btns animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <button className="btn btn-gold">Plan Your Journey <span>→</span></button>
            <button className="btn btn-outline">View Packages</button>
          </div>
        </div>

      </section>

      {/* Features Row - Services Overview */}
      <div className="features-row reveal reveal-up">
        <div className="features-container">
          <div className="container features-inner">
            <div className="feature-card">
              <div className="feature-icon float">🎫</div>
              <div className="feature-text">
                <h3>Ticketing Services</h3>
                <p>Global airline ticketing with the best rates and seamless booking experience for all destinations.</p>
              </div>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-card">
              <div className="feature-icon float" style={{ animationDelay: '0.5s' }}>🕌</div>
              <div className="feature-text">
                <h3>Hajj & Umrah</h3>
                <p>Licensed pilgrimage agency offering customized and group packages for your sacred travels.</p>
              </div>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-card">
              <div className="feature-icon float" style={{ animationDelay: '1s' }}>🌍</div>
              <div className="feature-text">
                <h3>Holiday Packages</h3>
                <p>Explore the world with our exclusive inbound and outbound tour packages tailored for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Airline Partners Section */}
      <section className="partners-section reveal reveal-up">
        <div className="container">
          <div className="partners-grid">
             <div className="partner-logo">EMIRATES</div>
             <div className="partner-logo">QATAR AIRWAYS</div>
             <div className="partner-logo">SRILANKAN</div>
             <div className="partner-logo">SAUDI ARABIAN</div>
             <div className="partner-logo">ETIHAD</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container about-grid">
          <div className="about-content reveal reveal-left">
            <span className="section-label">ABOUT US</span>
            <h5 className='about-start'>Building Trust Since 2005</h5>
            <h2>Khakiya Travels & Tours</h2>
            <p>At Khakiya Travels & Tours, we handle all aspects of travel, including airline ticketing (both inbound and outbound), hotel reservations, visa processing, and specialized Hajj and Umrah pilgrimage services.
<br /><br />
We never forget to whom we are working for. Our commitment to excellence and integrity ensures that your journey is comfortable, sacred, and worry-free. Whether it's a family vacation or a spiritual pilgrimage, we are your trusted partner in travel.</p>
            <button className="btn-link">Learn More <span>▼</span></button>
            
            <div className="visa-card reveal reveal-up">
               <div className="visa-img" style={{ backgroundImage: `url(${guidanceImg})` }}></div>
               <div className="visa-content">

                  <h3>Visa Assistance</h3>
                  <p>Book any part of your Hajj and Umrah trip with our professional visa processing, appointments, and documentation management.</p>
                  <button className="btn-link">Learn More <span>▼</span></button>
               </div>
            </div>
          </div>
          
          <div className="about-images reveal reveal-right">
            <div className="main-about-img" style={{ backgroundImage: `url(${aboutImg})` }}></div>
            <div className="guidance-overlay-card reveal reveal-scale">
               <h3>Licensed and Reliable Guidance</h3>
               <ul>
                 <li>Approved Hajj & Umrah Agency</li>
                 <li>Customized Holiday Packages</li>
                 <li>24/7 Professional Support</li>
               </ul>
               <button className="btn btn-dark">View Packages <span>→</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="packages-section" id="packages">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-label">FEATURED PACKAGES</span>
            <h2>Sacred Journeys Waiting For You</h2>
          </div>
          <div className="packages-grid">
            <div className="package-card reveal reveal-up">
              <div className="package-tag">POPULAR</div>
              <div className="package-img" style={{ backgroundImage: `url(${heroBg})` }}></div>
              <div className="package-info">
                <h3>Umrah 2025 January</h3>
                <p>15 Days Comprehensive Group Package</p>
                <ul>
                   <li>✓ Direct Flights</li>
                   <li>✓ 5-Star Hotel Stay</li>
                   <li>✓ Guided Ziyarat</li>
                </ul>
                <div className="package-footer">
                   <div className="price">LKR 450,000<span>/person</span></div>
                   <button className="btn btn-gold btn-sm">Join Now</button>
                </div>
              </div>
            </div>
            
            <div className="package-card reveal reveal-up" style={{ animationDelay: '0.2s' }}>
              <div className="package-img" style={{ backgroundImage: `url(${aboutImg})` }}></div>
              <div className="package-info">
                <h3>Turkey Explorer</h3>
                <p>10 Days Istanbul & Cappadocia Tour</p>
                <ul>
                   <li>✓ All-Inclusive Meals</li>
                   <li>✓ Luxury Boutique Hotels</li>
                   <li>✓ Hot Air Balloon Experience</li>
                </ul>
                <div className="package-footer">
                   <div className="price">LKR 680,000<span>/person</span></div>
                   <button className="btn btn-gold btn-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats-grid reveal reveal-up">
          <div className="stat-item">
            <h3>50k+</h3>
            <p>Pilgrims Assisted</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Hajj Completions</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>20+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container footer-grid reveal reveal-up">
          <div className="footer-col brand">
            <div className="logo white">
              <span className="logo-icon float">🌙</span>
              <span className="logo-text">Kakhiy<span>A</span></span>
            </div>
            <p>Building Trust Since 2005. We handle all aspects of travel with excellence and integrity.</p>
            <div className="footer-contact-info">
               <p>📞 +94 112 448 155</p>
               <p>📞 +94 772 448 155</p>
               <p>✉️ info@khakiya.com</p>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li>📍 No. 46, Hospital Street, Colombo 01, Sri Lanka</li>
              <li>📍 123-455 Al Maslaah St., Mecca (Branch)</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">FB</a>
              <a href="#">TW</a>
              <a href="#">IG</a>
              <a href="#">IN</a>
            </div>
            <button className="btn btn-gold footer-btn">Get a Quotation</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

