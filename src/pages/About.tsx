import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import { useBrand } from '../context/BrandContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Assets
import pageTitleBg from '../assets/img/page-title-bg.jpg';
import mission1 from '../assets/img/mision-1.jpg';
import journeyImg from '../assets/img/journey.png';
import lookingAheadImg from '../assets/img/looking-ahead.png';
import pannechandSarda from '../assets/img/team/pannechand-sarda sample 2.jpg';
import manishSarda from '../assets/img/team/manish1.png';
import rishikaSarda from '../assets/img/team/rishika1.png';
import shubhamSarda from '../assets/img/team/subham-sarda sample 2.jpg';

// Core Values Images
import integrityImg from '../assets/img/testimonials/integrity (1).jpg';
import customerFocusImg from '../assets/img/testimonials/customer-focus.jpg';
import innovationImg from '../assets/img/testimonials/innovation.jpg';
import sustainabilityImg from '../assets/img/testimonials/sustainablity.jpg';
import safetyImg from '../assets/img/testimonials/safety-2.jpg';
import excellenceImg from '../assets/img/testimonials/excellence-2.jpg';
import collaborationImg from '../assets/img/testimonials/collaboration.jpg';
import responsibilityImg from '../assets/img/testimonials/responsibility.jpg';
import qualityImg from '../assets/img/testimonials/quality-2.webp';

// Custom Premium SVG Illustrations
const JourneyIllustration: React.FC = () => (
  <svg viewBox="0 0 500 400" className="w-100 h-auto" style={{ maxWidth: '450px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="journeyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0d42ff" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#001973" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#30b1ff" />
        <stop offset="100%" stopColor="#0d42ff" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Background Grid Lines */}
    <g opacity="0.15">
      <path d="M 50,0 L 50,400 M 150,0 L 150,400 M 250,0 L 250,400 M 350,0 L 350,400 M 450,0 L 450,400" stroke="#0d42ff" strokeWidth="1" strokeDasharray="5 5" />
      <path d="M 0,50 L 500,50 M 0,150 L 500,150 M 0,250 L 500,250 M 0,350 L 500,350" stroke="#0d42ff" strokeWidth="1" strokeDasharray="5 5" />
    </g>

    {/* Curved Path of Growth */}
    <path d="M 80,320 C 150,320 180,180 250,180 C 320,180 350,80 420,80" stroke="url(#journeyGrad)" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
    <path d="M 80,320 C 150,320 180,180 250,180 C 320,180 350,80 420,80" stroke="url(#accentGrad)" strokeWidth="2" strokeLinecap="round" />

    {/* Nodes */}
    {/* Node 1: Beginning */}
    <circle cx="80" cy="320" r="14" fill="#ffffff" stroke="#0d42ff" strokeWidth="4" />
    <circle cx="80" cy="320" r="6" fill="#0d42ff" />

    {/* Node 2: Growth */}
    <circle cx="250" cy="180" r="18" fill="#ffffff" stroke="#0d42ff" strokeWidth="4" filter="url(#glow)" />
    <path d="M 244,174 H 256 V 186 H 244 Z" fill="url(#accentGrad)" />
    <circle cx="250" cy="180" r="4" fill="#ffffff" />

    {/* Node 3: Present / Network */}
    <circle cx="420" cy="80" r="22" fill="#ffffff" stroke="#0d42ff" strokeWidth="5" filter="url(#glow)" />
    <circle cx="420" cy="80" r="10" fill="url(#journeyGrad)" />
    <path d="M 414,80 H 426 M 420,74 V 86" stroke="#ffffff" strokeWidth="1.5" />

    {/* Connected Dots */}
    <line x1="250" y1="180" x2="310" y2="240" stroke="#0d42ff" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="310" cy="240" r="8" fill="#30b1ff" opacity="0.8" />

    <line x1="80" y1="320" x2="140" y2="260" stroke="#0d42ff" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="140" cy="260" r="6" fill="#0d42ff" opacity="0.6" />

    <line x1="420" y1="80" x2="350" y2="120" stroke="#0d42ff" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="350" cy="120" r="7" fill="#001973" opacity="0.8" />

    {/* Badges */}
    <g transform="translate(140, 260)" opacity="0.95">
      <rect x="0" y="0" width="120" height="38" rx="19" fill="#ffffff" stroke="rgba(13, 66, 255, 0.12)" strokeWidth="1" />
      <text x="60" y="24" fill="#001973" fontSize="11px" fontWeight="700" textAnchor="middle" fontFamily="Poppins">
        🤝 Partnership
      </text>
    </g>

    <g transform="translate(290, 30)" opacity="0.95">
      <rect x="0" y="0" width="120" height="38" rx="19" fill="#ffffff" stroke="rgba(13, 66, 255, 0.12)" strokeWidth="1" />
      <text x="60" y="24" fill="#001973" fontSize="11px" fontWeight="700" textAnchor="middle" fontFamily="Poppins">
        📈 Value Chain
      </text>
    </g>
  </svg>
);

const FutureIllustration: React.FC = () => (
  <svg viewBox="0 0 500 400" className="w-100 h-auto" style={{ maxWidth: '450px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ecoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2ec4b6" />
        <stop offset="100%" stopColor="#0d42ff" />
      </linearGradient>
      <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Spheres */}
    <circle cx="250" cy="200" r="150" stroke="rgba(48, 177, 255, 0.1)" strokeWidth="1" />
    <circle cx="250" cy="200" r="100" stroke="rgba(13, 66, 255, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="250" cy="200" r="50" stroke="rgba(13, 66, 255, 0.2)" strokeWidth="1" />

    {/* Globe */}
    <ellipse cx="250" cy="200" rx="150" ry="50" stroke="rgba(13, 66, 255, 0.08)" strokeWidth="1" />
    <ellipse cx="250" cy="200" rx="50" ry="150" stroke="rgba(13, 66, 255, 0.08)" strokeWidth="1" />

    {/* Molecular Bonds */}
    <line x1="250" y1="200" x2="170" y2="130" stroke="#0d42ff" strokeWidth="3" />
    <line x1="250" y1="200" x2="330" y2="130" stroke="#0d42ff" strokeWidth="3" />
    <line x1="250" y1="200" x2="250" y2="300" stroke="#0d42ff" strokeWidth="3" />
    <line x1="170" y1="130" x2="120" y2="180" stroke="#0d42ff" strokeWidth="2" strokeDasharray="3 3" />
    <line x1="330" y1="130" x2="380" y2="180" stroke="#0d42ff" strokeWidth="2" strokeDasharray="3 3" />

    {/* Nodes */}
    <circle cx="250" cy="200" r="24" fill="#ffffff" stroke="#0d42ff" strokeWidth="6" filter="url(#glow2)" />
    <circle cx="250" cy="200" r="12" fill="url(#ecoGrad)" />

    <circle cx="170" cy="130" r="18" fill="#ffffff" stroke="#0d42ff" strokeWidth="4" />
    <circle cx="170" cy="130" r="8" fill="#30b1ff" />
    <circle cx="170" cy="130" r="3" fill="#ffffff" />

    <circle cx="330" cy="130" r="18" fill="#ffffff" stroke="#2ec4b6" strokeWidth="4" filter="url(#glow2)" />
    <path d="M 324,136 C 324,128 332,124 336,124 C 336,132 328,136 324,136 Z" fill="#2ec4b6" />
    <path d="M 336,124 C 336,132 328,136 324,136" stroke="#ffffff" strokeWidth="1" />

    <circle cx="250" cy="300" r="20" fill="#ffffff" stroke="#001973" strokeWidth="4" />
    <rect x="246" y="290" width="8" height="12" fill="#001973" rx="1" />
    <path d="M 242,302 H 258 L 255,296 H 245 Z" fill="#001973" />

    {/* Orbiting Elements */}
    <circle cx="120" cy="180" r="6" fill="#30b1ff" />
    <circle cx="380" cy="180" r="6" fill="#2ec4b6" />
    <circle cx="200" cy="280" r="4" fill="#0d42ff" />
    <circle cx="300" cy="280" r="5" fill="#0d42ff" />

    {/* Labels */}
    <g transform="translate(20, 60)" opacity="0.95">
      <rect x="0" y="0" width="130" height="36" rx="18" fill="#ffffff" stroke="rgba(46, 196, 182, 0.15)" strokeWidth="1" />
      <text x="65" y="22" fill="#2ec4b6" fontSize="10.5px" fontWeight="700" textAnchor="middle" fontFamily="Poppins">
        🌱 Eco-Conscious
      </text>
    </g>

    <g transform="translate(320, 240)" opacity="0.95">
      <rect x="0" y="0" width="120" height="36" rx="18" fill="#ffffff" stroke="rgba(13, 66, 255, 0.12)" strokeWidth="1" />
      <text x="60" y="22" fill="#0d42ff" fontSize="10.5px" fontWeight="700" textAnchor="middle" fontFamily="Poppins">
        ⚡ Innovation
      </text>
    </g>
  </svg>
);

export const About: React.FC = () => {
  const brand = useBrand();
  const { companyName } = brand;
  const isJupiter = companyName === 'Jupiter Organics';

  useEffect(() => {
    const swiperInstance = new Swiper('.swiper', {
      modules: [Pagination, Autoplay],
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
      },
    });

    return () => {
      swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <>
      {/* Page Title */}
      <div
        className="page-title position-relative d-flex align-items-center justify-content-center"
        data-aos="fade"
        style={{
          backgroundImage: `url(${pageTitleBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: '120px 0 80px 0'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        <div className="container-fluid container-xl position-relative text-center z-10">
          <h1 className="text-white font-extrabold tracking-tight mt-2" data-aos="fade-up" data-aos-delay="200" style={{ fontSize: '3.2rem' }}>
            Company Overview
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto mt-3" data-aos="fade-up" data-aos-delay="300" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Founded in {isJupiter ? '2006' : '1997'} by Mr. Pannechand Sarda & Mr. Manish Kumar Sarda, {companyName} has grown to
            become a leading player in the chemical trading industry. With a steadfast commitment to quality and
            customer satisfaction, we have established a strong reputation for reliability and excellence. Our company
            specializes in sourcing, distributing, and marketing a wide range of chemicals, catering to the textile
            industry.
          </p>
          <nav className="breadcrumbs d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-delay="400">
            <ol className="d-flex list-unstyled gap-2 m-0 p-0 text-slate-300" style={{ fontSize: '14.5px' }}>
              <li><Link to="/" className="text-slate-400 hover:text-white transition">Home</Link></li>

              <li className="text-white font-semibold">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about section" style={{ padding: '80px 0' }}>
        <div className="container-fluid container-xl">
          <div className="row align-items-center gy-5">
            {/* Left Column: Founder's Message and Vision */}
            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">

              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: 800, color: 'var(--heading-color)' }}>Founder's Vision</h2>

              <div className="founder-message-card mb-5">
                <p className="fst-italic mb-4" style={{ fontSize: '16.5px', color: '#334155', lineHeight: 1.7 }}>
                  "{companyName} was built on the core belief that quality products and absolute transparency
                  form the foundation of enduring partnerships. Our journey is driven by a dedication to empower the
                  textile industry with sustainable and innovative chemical solutions."
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="founder-signature">
                    — Mr. Pannechand Sarda & Mr. Manish Kumar Sarda
                    <span className="d-block text-xs font-normal text-muted mt-1">Co-Founders & Directors</span>
                  </div>
                </div>
              </div>

              <p className="mb-5" style={{ color: '#555e6b', lineHeight: 1.7, fontSize: '15px' }}>
                With their entrepreneurial spirit and visionary leadership, our founders laid the foundation of {companyName} in {isJupiter ? '2006' : '1997'}. Over the past two decades, their deep industry intelligence and commitment
                to client satisfaction have guided the enterprise's expansion, establishing it as a hallmark of reliability.
              </p>

              {/* Cards Grid for Mission and Vision */}
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="about-mv-card">
                    <div className="about-mv-icon-wrapper">
                      <i className="bi bi-bullseye"></i>
                    </div>
                    <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#001973', marginBottom: '12px' }}>Our Mission</h4>
                    <p style={{ fontSize: '14.5px', color: '#555e6b', lineHeight: 1.6, margin: 0 }}>
                      To provide high-quality chemical products and exceptional service, fostering innovation and sustainability
                      to be a trusted partner in the textile industry.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-mv-card">
                    <div className="about-mv-icon-wrapper">
                      <i className="bi bi-eye"></i>
                    </div>
                    <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#001973', marginBottom: '12px' }}>Our Vision</h4>
                    <p style={{ fontSize: '14.5px', color: '#555e6b', lineHeight: 1.6, margin: 0 }}>
                      To be a global leader in chemical trading, recognized for our commitment to quality, eco-conscious practices,
                      and supply chain responsiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Image showcase with badge */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="position-relative" style={{ width: '100%', maxWidth: '520px' }}>
                {/* Backdrop decorative element */}
                <div
                  className="position-absolute rounded-3xl"
                  style={{
                    inset: '-10px 10px 10px -10px',
                    border: '2px solid rgba(13, 66, 255, 0.15)',
                    zIndex: 0,
                    borderRadius: '24px'
                  }}
                ></div>

                {/* Main Image */}
                <img
                  src={mission1}
                  className="img-fluid position-relative shadow-2xl transition duration-500 hover:scale-[1.02]"
                  alt={`${companyName} Core`}
                  style={{
                    borderRadius: '24px',
                    zIndex: 1,
                    width: '100%',
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                    border: '6px solid #ffffff'
                  }}
                />

                {/* Overlapping Floating Badge */}
                <div
                  className="position-absolute bg-white/80 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-white/40 d-flex align-items-center gap-3"
                  style={{
                    bottom: '25px',
                    left: '25px',
                    maxWidth: '300px',
                    zIndex: 2
                  }}
                >
                  <div
                    className="text-white rounded-xl d-flex align-items-center justify-content-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: isJupiter ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' : 'linear-gradient(135deg, #0d42ff 0%, #002aa3 100%)',
                      boxShadow: isJupiter ? '0 8px 16px rgba(var(--primary-rgb), 0.3)' : '0 8px 16px rgba(13, 66, 255, 0.3)'
                    }}
                  >
                    <i className="bi bi-patch-check-fill" style={{ fontSize: '22px' }}></i>
                  </div>
                  <div>
                    <h5 className="mb-0 font-bold" style={{ fontSize: '14px', fontWeight: 700, color: isJupiter ? 'var(--primary)' : '#001973' }}>Established {isJupiter ? '2006' : '1997'}</h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{isJupiter ? '20+' : '27+'} Years of Chemical Trading</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Title */}
      <div className="container-fluid container-xl section-title" data-aos="fade-up">
        <span>Core Competencies<br /></span>
        <h2>Core Competencies</h2>
      </div>

      {/* Featured Services Section */}
      <section id="featured-services" className="featured-services section" style={{ padding: '80px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f4f7ff 100%)' }}>
        <div className="container-fluid container-xl">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="premium-competency-card">
                <div className="premium-competency-icon-wrapper">
                  <i className="fa-solid fa-boxes-stacked"></i>
                </div>
                <h4>Extensive Product Portfolio</h4>
                <p>
                  We offer a diverse and robust range of high-performance textile chemicals, ensuring that we meet the precise
                  needs of our clients across sizing, pre-treatment, dyeing, and printing processes.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="premium-competency-card">
                <div className="premium-competency-icon-wrapper">
                  <i className="fa-solid fa-award"></i>
                </div>
                <h4>Quality Assurance</h4>
                <p>
                  Our commitment to quality is absolute. We source from world-class manufacturers and perform strict checks
                  to guarantee complete compliance with international standards.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="premium-competency-card">
                <div className="premium-competency-icon-wrapper">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <h4>Customer Service</h4>
                <p>
                  Our expert professionals deliver responsive support, technical advice, and agile solutions, ensuring
                  a seamless logistics experience from orders to deliveries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team section" style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container-fluid container-xl text-center mb-5" data-aos="fade-up">
          <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--heading-color)', marginBottom: '15px' }}>Our Team</h2>
          <div className="mx-auto" style={{ width: '50px', height: '4px', background: '#0d42ff', borderRadius: '2px' }}></div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="team-profile-card" style={{ width: '100%' }}>
                <div className="team-image-wrapper">
                  <img src={pannechandSarda} alt="Panne Chand Sarda" />
                </div>
                <div className="team-info-block">
                  <h4>Panne Chand Sarda</h4>
                  <span className="role-badge">Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="team-profile-card" style={{ width: '100%' }}>
                <div className="team-image-wrapper">
                  <img src={manishSarda} alt="Manish Kumar Sarda" />
                </div>
                <div className="team-info-block">
                  <h4>Manish Kumar Sarda</h4>
                  <span className="role-badge">Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="team-profile-card" style={{ width: '100%' }}>
                <div className="team-image-wrapper">
                  <img src={rishikaSarda} alt="CA Rishika Sarda" />
                </div>
                <div className="team-info-block">
                  <h4>CA Rishika Sarda</h4>
                  <span className="role-badge">CFO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
              <div className="team-profile-card" style={{ width: '100%' }}>
                <div className="team-image-wrapper">
                  <img src={shubhamSarda} alt="Shubham Sarda" />
                </div>
                <div className="team-info-block">
                  <h4>Shubham Sarda</h4>
                  <span className="role-badge">CMO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section-custom">
        <div className="container-fluid container-xl">
          {/* Item 1: Our Journey */}
          <div className="row gy-5 align-items-center mb-5 pb-5">
            <div className="col-lg-5 col-md-12 d-flex justify-content-center" data-aos="zoom-out" data-aos-delay="100">
              <div className="premium-glass-frame" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
                <div className="frame-inner" style={{ border: 'none', background: 'transparent', boxShadow: 'none', overflow: 'visible' }}>
                  {isJupiter ? (
                    <img 
                      src={journeyImg} 
                      alt="Our Journey" 
                      className="img-fluid transition duration-500 hover:scale-[1.02]" 
                      style={{ borderRadius: '16px', maxWidth: '100%', height: 'auto', boxShadow: '0 15px 35px rgba(217, 133, 27, 0.15)' }} 
                    />
                  ) : (
                    <JourneyIllustration />
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12" data-aos="fade-up" data-aos-delay="150">
              <div className="premium-story-card">

                <h3>Our Journey</h3>
                <p className="lead mb-4" style={{ fontSize: '16px', color: '#555e6b', lineHeight: '1.7' }}>
                  From a small chemical trading house in {isJupiter ? '2006' : '1997'} to a signature of reliability, {companyName} has built a legacy of trust, partnership, and absolute quality.
                </p>

                {/* Milestone Timeline */}
                <div className="timeline-wrapper">
                  <div className="timeline-item-custom">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content-custom">
                      <span className="timeline-year">{isJupiter ? '2006' : '1997'}</span>
                      <h4 className="timeline-title">Humble Beginnings</h4>
                      <p className="timeline-desc">Started with a small dedicated team and limited resources, laying down a customer-first philosophy.</p>
                    </div>
                  </div>

                  <div className="timeline-item-custom">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content-custom">
                      <span className="timeline-year">{isJupiter ? '2008 - 2018' : '2005 - 2018'}</span>
                      <h4 className="timeline-title">Strategic Growth</h4>
                      <p className="timeline-desc">Expanded operations by forging alliances with top-tier global manufacturers and introducing rigorous quality controls.</p>
                    </div>
                  </div>

                  <div className="timeline-item-custom">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content-custom">
                      <span className="timeline-year">Present</span>
                      <h4 className="timeline-title">Established Value Chain</h4>
                      <p className="timeline-desc">Operating a robust, agile supply chain that delivers high-performance chemicals and competitive pricing to the textile industry.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Item 2: Looking Ahead */}
          <div className="row gy-5 align-items-center">
            <div className="col-lg-7 col-md-12 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <div className="premium-story-card">

                <h3>Looking Ahead</h3>
                <p className="lead mb-4" style={{ fontSize: '16px', color: '#555e6b', lineHeight: '1.7' }}>
                  We embrace the future with optimism, continuous learning, and a focus on steering the chemical trading sector towards greener, smarter solutions.
                </p>

                {/* Pillars of Future */}
                <div className="pillar-list">
                  <div className="pillar-item">
                    <div className="pillar-icon-box">
                      <i className="bi bi-lightbulb-fill"></i>
                    </div>
                    <div className="pillar-text">
                      <h4>Innovation & Adaptability</h4>
                      <p>Sourcing and introducing cutting-edge textile formulations that keep pace with rapid manufacturing changes.</p>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-icon-box">
                      <i className="bi bi-recycle"></i>
                    </div>
                    <div className="pillar-text">
                      <h4>Eco-Conscious Chemistry</h4>
                      <p>Championing eco-certified raw materials to minimize ecological impact and support green certifications.</p>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-icon-box">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <div className="pillar-text">
                      <h4>Enduring Partnerships</h4>
                      <p>Fostering collaborative relationships with customers and suppliers through transparency and expert service.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5 col-md-12 order-1 order-lg-2 d-flex justify-content-center" data-aos="zoom-out" data-aos-delay="250">
              <div className="premium-glass-frame" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
                <div className="frame-inner" style={{ border: 'none', background: 'transparent', boxShadow: 'none', overflow: 'visible' }}>
                  {isJupiter ? (
                    <img 
                      src={lookingAheadImg} 
                      alt="Looking Ahead" 
                      className="img-fluid transition duration-500 hover:scale-[1.02]" 
                      style={{ borderRadius: '16px', maxWidth: '100%', height: 'auto', boxShadow: '0 15px 35px rgba(217, 133, 27, 0.15)' }} 
                    />
                  ) : (
                    <FutureIllustration />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="core-values-slider-section section">
        <div className="container-fluid container-xl text-center mb-5" data-aos="fade-up">

          <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--heading-color)', marginBottom: '15px' }}>Core Values</h2>
          <div className="mx-auto" style={{ width: '50px', height: '4px', background: '#0d42ff', borderRadius: '2px' }}></div>
        </div>

        <div className="container-fluid container-xl" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper">
            <div className="swiper-wrapper">

              {/* Value 1: Integrity */}
              <div className="swiper-slide">
                <div className="value-slider-card" style={{ '--value-accent-color': '#0d42ff', '--value-accent-rgb': '13, 66, 255' } as React.CSSProperties}>
                  <div className="value-slider-img-wrapper">
                    <img src={integrityImg} className="value-slider-img" alt="Integrity" />
                    <div className="value-slider-badge">
                      <i className="bi bi-shield-check"></i>
                    </div>
                  </div>
                  <h3>Integrity</h3>
                  <p>
                    We conduct our business with the highest ethical standards, ensuring absolute transparency, reliability, and honesty in all our dealings.
                  </p>
                </div>
              </div>

              {/* Value 2: Customer Focus */}
              <div className="swiper-slide">
                <div className="value-slider-card" style={{ '--value-accent-color': '#ff5252', '--value-accent-rgb': '255, 82, 82' } as React.CSSProperties}>
                  <div className="value-slider-img-wrapper">
                    <img src={customerFocusImg} className="value-slider-img" alt="Customer Focus" />
                    <div className="value-slider-badge">
                      <i className="bi bi-people-fill"></i>
                    </div>
                  </div>
                  <h3>Customer Focus</h3>
                  <p>
                    Our customers are at the heart of everything we do. We are dedicated to deeply understanding their needs and consistently exceeding their expectations.
                  </p>
                </div>
              </div>

              {/* Value 3: Innovation */}
              <div className="swiper-slide">
                <div className="value-slider-card" style={{ '--value-accent-color': '#9c27b0', '--value-accent-rgb': '156, 39, 176' } as React.CSSProperties}>
                  <div className="value-slider-img-wrapper">
                    <img src={innovationImg} className="value-slider-img" alt="Innovation" />
                    <div className="value-slider-badge">
                      <i className="bi bi-lightbulb-fill"></i>
                    </div>
                  </div>
                  <h3>Innovation</h3>
                  <p>
                    We embrace industry changes and foster creativity, constantly seeking new formulations, processes, and better ways to serve our clients.
                  </p>
                </div>
              </div>

              {/* Value 4: Sustainability */}
              <div className="swiper-slide">
                <div className="value-slider-card" style={{ '--value-accent-color': '#2ec4b6', '--value-accent-rgb': '46, 196, 182' } as React.CSSProperties}>
                  <div className="value-slider-img-wrapper">
                    <img src={sustainabilityImg} className="value-slider-img" alt="Sustainability" />
                    <div className="value-slider-badge">
                      <i className="bi bi-recycle"></i>
                    </div>
                  </div>
                  <h3>Sustainability</h3>
                  <p>
                    We are deeply committed to environmental stewardship, actively promoting sustainable chemistry and minimizing our ecological footprint.
                  </p>
                </div>
              </div>

              {/* Value 5: Safety */}
              <div className="swiper-slide">
                <div className="value-slider-card" style={{ '--value-accent-color': '#ff9800', '--value-accent-rgb': '255, 152, 0' } as React.CSSProperties}>
                  <div className="value-slider-img-wrapper">
                    <img src={safetyImg} className="value-slider-img" alt="Safety" />
                    <div className="value-slider-badge">
                      <i className="bi bi-shield-fill-exclamation"></i>
                    </div>
                  </div>
                  <h3>Safety</h3>
                  <p>
                    The well-being of our team, clients, and communities is our highest priority. We adhere to strict safety protocols at every link of our supply chain.
                  </p>
                </div>
              </div>

              {/* Value 6: Excellence */}
              <div className="swiper-slide">
                <div className="value-slider-card" style={{ '--value-accent-color': '#6366f1', '--value-accent-rgb': '99, 102, 241' } as React.CSSProperties}>
                  <div className="value-slider-img-wrapper">
                    <img src={excellenceImg} className="value-slider-img" alt="Excellence" />
                    <div className="value-slider-badge">
                      <i className="bi bi-award-fill"></i>
                    </div>
                  </div>
                  <h3>Excellence</h3>
                  <p>
                    We pursue perfection in all dimensions of our business—from raw material quality check to technical customer support and logistical precision.
                  </p>
                </div>
              </div>

              {/* Value 7: Collaboration */}
              <div className="swiper-slide">
                <div className="value-slider-card" style={{ '--value-accent-color': '#00bcd4', '--value-accent-rgb': '0, 188, 212' } as React.CSSProperties}>
                  <div className="value-slider-img-wrapper">
                    <img src={collaborationImg} className="value-slider-img" alt="Collaboration" />
                    <div className="value-slider-badge">
                      <i className="fa-solid fa-handshake"></i>
                    </div>
                  </div>
                  <h3>Collaboration</h3>
                  <p>
                    We believe in the power of shared success, working in synergy with our global suppliers and regional textile houses to build resilient partnerships.
                  </p>
                </div>
              </div>

              {/* Value 8: Responsibility */}
              <div className="swiper-slide">
                <div className="value-slider-card" style={{ '--value-accent-color': '#607d8b', '--value-accent-rgb': '96, 125, 139' } as React.CSSProperties}>
                  <div className="value-slider-img-wrapper">
                    <img src={responsibilityImg} className="value-slider-img" alt="Responsibility" />
                    <div className="value-slider-badge">
                      <i className="bi bi-globe2"></i>
                    </div>
                  </div>
                  <h3>Responsibility</h3>
                  <p>
                    We own our actions and their broader impact. We ensure {companyName} operates as a positive, responsible force in our industry.
                  </p>
                </div>
              </div>

              {/* Value 9: Quality Assurance */}
              <div className="swiper-slide">
                <div className="value-slider-card" style={{ '--value-accent-color': '#1a237e', '--value-accent-rgb': '26, 35, 126' } as React.CSSProperties}>
                  <div className="value-slider-img-wrapper">
                    <img src={qualityImg} className="value-slider-img" alt="Quality Assurance" />
                    <div className="value-slider-badge">
                      <i className="bi bi-patch-check-fill"></i>
                    </div>
                  </div>
                  <h3>Quality Assurance</h3>
                  <p>
                    Our quality commitment is unwavering. We source from accredited world-class manufacturers and perform systematic checks to guarantee high compliance.
                  </p>
                </div>
              </div>

            </div>
            <div className="swiper-pagination" style={{ bottom: '-10px' }}></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
