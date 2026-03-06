import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const services = [
    {
      title: 'Garden Design',
      description: 'Transform your outdoor space with our expert landscape design services tailored to your vision and lifestyle.',
      icon: '🌿',
      features: ['Custom Design', '3D Planning', 'Expert Consultation']
    },
    {
      title: 'Flower Planting',
      description: 'Professional seasonal planting services to create vibrant, colorful gardens that bloom year-round.',
      icon: '🌸',
      features: ['Seasonal Selection', 'Premium Plants', 'Guaranteed Growth']
    },
    {
      title: 'Garden Maintenance',
      description: 'Comprehensive maintenance plans to keep your garden healthy and beautiful throughout every season.',
      icon: '🌱',
      features: ['Weekly Care', 'Plant Health', 'Seasonal Cleanup']
    },
    {
      title: 'Lawn Mowing',
      description: 'Precision lawn care services that keep your grass perfectly manicured and healthy.',
      icon: '🌾',
      features: ['Edging', 'Fertilizing', 'Weed Control']
    },
    {
      title: 'Leaf Removal',
      description: 'Efficient leaf cleanup services to maintain your pristine appearance year-round.',
      icon: '🍂',
      features: ['Quick Cleanup', 'Mulching', 'Disposal']
    },
    {
      title: 'Pond Maintenance',
      description: 'Professional pond care ensuring crystal clear water and healthy aquatic ecosystem.',
      icon: '💧',
      features: ['Water Testing', 'Plant Care', 'Equipment Service']
    }
  ];

  return (
    <div className="dashboard">
      <section className="hero">
        <div className="hero-background" style={{
          backgroundImage: `url('https://picsum.photos/1920/800?random=10')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.4) contrast(1.2)'
        }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Le të sjellim jetë në kopshtin tuaj</h1>
            <p>Transformoni hapësirën tuaj të jashtme në një oazë të mahnitshme me shërbimet tona profesionale të peisazhimit dhe dizajnit të kopshtit.</p>
            <div className="hero-buttons">
              <button className="cta-button primary">Konsultim Falas</button>
              <button className="cta-button secondary">Shiko Punët Tona</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Award Winning</h3>
              <p>Recognized excellence in landscape design and garden maintenance services.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>5-Star Reviews</h3>
              <p>Trusted by hundreds of satisfied customers with exceptional service.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Eco-Friendly</h3>
              <p>Sustainable practices and organic solutions for a healthier environment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <div className="section-header">
            <h2>Why choose us?</h2>
            <p>We combine expertise, creativity, and passion to deliver exceptional outdoor spaces that exceed your expectations.</p>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-number">01</div>
              <h3>Expert Team</h3>
              <p>Certified professionals with years of experience in landscape design and horticulture.</p>
            </div>
            <div className="why-item">
              <div className="why-number">02</div>
              <h3>Quality Materials</h3>
              <p>Premium plants, sustainable materials, and eco-friendly solutions for lasting results.</p>
            </div>
            <div className="why-item">
              <div className="why-number">03</div>
              <h3>Satisfaction Guaranteed</h3>
              <p>We stand behind our work with comprehensive warranties and ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Premium Services</h2>
            <p>Comprehensive garden and landscape solutions tailored to your unique needs and preferences.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="service-button">Learn More</button>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <button className="cta-button primary">Get Free Consultation</button>
            <button className="cta-button secondary">Browse All Services</button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Punët Tona të Fundit</h2>
            <p>Eksploroni projektet më të fundit të peisazhimit dhe transformimeve të kopshtit.</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="https://picsum.photos/600/400?random=1" alt="Dizajnim Modern i Kopshtit" />
                <div className="portfolio-overlay">
                  <h3>Dizajnim Modern i Kopshtit</h3>
                  <p>Peisazhim bashkëkohor me bimë vendase dhe materiale të qëndrueshme.</p>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="https://picsum.photos/600/400?random=2" alt="Parajsë e Luleve" />
                <div className="portfolio-overlay">
                  <h3>Parajsë e Luleve</h3>
                  <p>Mbjellje sezonale me koordinim ekspert të ngjyrave.</p>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="https://picsum.photos/600/400?random=3" alt="Oazë i Mëharrë" />
                <div className="portfolio-overlay">
                  <h3>Oazë i Mëharrë</h3>
                  <p>Hapësirë e plotë jetese me veçori uji dhe ndriçim.</p>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="https://picsum.photos/600/400?random=4" alt="Peisazh i Qëndrueshëm" />
                <div className="portfolio-overlay">
                  <h3>Peisazh i Qëndrueshëm</h3>
                  <p>Dizajnim ekologjik me bimë rezistente ndaj thatësirës vendase.</p>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="https://picsum.photos/600/400?random=5" alt="Kopshti Zen Japonez" />
                <div className="portfolio-overlay">
                  <h3>Kopshti Zen Japonez</h3>
                  <p>Hapësirë e qetë me elemente tradicionale dhe zona meditimi.</p>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="https://picsum.photos/600/400?random=6" alt="Kompleks Komercial" />
                <div className="portfolio-overlay">
                  <h3>Kompleks Komercial</h3>
                  <p>Peisazhim profesional për ndërtesa zyrtare dhe hapësira dyqanore.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-cta">
            <button className="cta-button primary">Shiko Portofolin e Plotë</button>
            <button className="cta-button secondary">Planifiko Konsultim</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
