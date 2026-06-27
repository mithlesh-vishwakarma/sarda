import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Assets
import pageTitleBg from '../assets/img/page-title-bg.jpg';
import mission1 from '../assets/img/mision-1.jpg';
import pannechandSarda from '../assets/img/team/pannechand-sarda sample 2.jpg';
import manishSarda from '../assets/img/team/manish-sarda sample 2.jpg';
import rishikaSarda from '../assets/img/team/rishika_sarda-updated.png';
import shubhamSarda from '../assets/img/team/subham-sarda sample 2.jpg';
import journey1 from '../assets/img/journey-1.png';
import lookingAhead from '../assets/img/looking-ahead.png';
import testimonialsBg from '../assets/img/testimonials-bg.jpg';

// Testimonial Swiper Images
import integrityImg from '../assets/img/testimonials/integrity (1).jpg';
import customerFocusImg from '../assets/img/testimonials/customer-focus.jpg';
import innovationImg from '../assets/img/testimonials/innovation.jpg';
import sustainabilityImg from '../assets/img/testimonials/sustainablity.jpg';
import safetyImg from '../assets/img/testimonials/safety-2.jpg';
import excellenceImg from '../assets/img/testimonials/excellence-2.jpg';
import collaborationImg from '../assets/img/testimonials/collaboration.jpg';
import responsibilityImg from '../assets/img/testimonials/responsibility.jpg';
import qualityImg from '../assets/img/testimonials/quality-2.webp';

export const About: React.FC = () => {
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
        767: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 10,
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
        className="page-title" 
        data-aos="fade" 
        style={{ backgroundImage: `url(${pageTitleBg})` }}
      >
        <div className="container-fluid container-xl position-relative" style={{ zIndex: 2 }}>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', marginBottom: '15px' }}>Company Overview</h1>
          <p style={{ maxWidth: '850px', margin: '0 auto 25px auto', fontSize: '16.2px', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.92)' }}>
            Founded in 1997 by Mr. Pannechand Sarda & Mr. Manish Kumar Sarda, Sarda Chemical Corporation has grown to
            become a leading player in the chemical trading industry. With a steadfast commitment to quality and
            customer satisfaction, we have established a strong reputation for reliability and excellence. Our company
            specializes in sourcing, distributing, and marketing a wide range of chemicals, catering to the textile
            industry.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">About</li>
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
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ background: 'rgba(13, 66, 255, 0.08)', color: '#0d42ff', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#0d42ff', borderRadius: '50%', display: 'inline-block' }}></span>
                Leadership
              </div>
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: 800, color: 'var(--heading-color)' }}>Founder's Vision</h2>
              
              <div className="founder-message-card mb-5">
                <p className="fst-italic mb-4" style={{ fontSize: '16.5px', color: '#334155', lineHeight: 1.7 }}>
                  "Sarda Chemical Corporation was built on the core belief that quality products and absolute transparency 
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
                With their entrepreneurial spirit and visionary leadership, our founders laid the foundation of Sarda 
                Chemical Corporation in 1997. Over the past two decades, their deep industry intelligence and commitment 
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
            <div 
              className="col-lg-6 d-flex justify-content-center" 
              data-aos="fade-up"
              data-aos-delay="200"
            >
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
                  alt="Sarda Chemical Corporation Core" 
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
                      background: 'linear-gradient(135deg, #0d42ff 0%, #002aa3 100%)',
                      boxShadow: '0 8px 16px rgba(13, 66, 255, 0.3)'
                    }}
                  >
                    <i className="bi bi-patch-check-fill" style={{ fontSize: '22px' }}></i>
                  </div>
                  <div>
                    <h5 className="mb-0 font-bold text-[#001973]" style={{ fontSize: '14px', fontWeight: 700 }}>Established 1997</h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>27+ Years of Chemical Trading</p>
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
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ background: 'rgba(13, 66, 255, 0.08)', color: '#0d42ff', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#0d42ff', borderRadius: '50%', display: 'inline-block' }}></span>
            Board of Directors
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--heading-color)', marginBottom: '15px' }}>Our Team</h2>
          <div className="mx-auto" style={{ width: '50px', height: '4px', background: '#0d42ff', borderRadius: '2px' }}></div>
        </div>

        <div className="container-fluid container-xl">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="team-profile-card group" style={{ width: '100%' }}>
                <div className="team-image-wrapper">
                  <img src={pannechandSarda} alt="Panne Chand Sarda" />
                  <div className="team-social-overlay">
                    <div className="team-social-links">
                      <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-linkedin"></i></a>
                      <a href="mailto:info@sardachemical.com"><i className="bi bi-envelope-fill"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-info-block">
                  <h4>Panne Chand Sarda</h4>
                  <span className="role-badge">Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="team-profile-card group" style={{ width: '100%' }}>
                <div className="team-image-wrapper">
                  <img src={manishSarda} alt="Manish Kumar Sarda" />
                  <div className="team-social-overlay">
                    <div className="team-social-links">
                      <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-linkedin"></i></a>
                      <a href="mailto:info@sardachemical.com"><i className="bi bi-envelope-fill"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-info-block">
                  <h4>Manish Kumar Sarda</h4>
                  <span className="role-badge">Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="team-profile-card group" style={{ width: '100%' }}>
                <div className="team-image-wrapper">
                  <img src={rishikaSarda} alt="CA Rishika Sarda" />
                  <div className="team-social-overlay">
                    <div className="team-social-links">
                      <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-linkedin"></i></a>
                      <a href="mailto:info@sardachemical.com"><i className="bi bi-envelope-fill"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-info-block">
                  <h4>CA Rishika Sarda</h4>
                  <span className="role-badge">CFO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
              <div className="team-profile-card group" style={{ width: '100%' }}>
                <div className="team-image-wrapper">
                  <img src={shubhamSarda} alt="Shubham Sarda" />
                  <div className="team-social-overlay">
                    <div className="team-social-links">
                      <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-linkedin"></i></a>
                      <a href="mailto:info@sardachemical.com"><i className="bi bi-envelope-fill"></i></a>
                    </div>
                  </div>
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
      <section id="features" className="features section">
        <div className="container-fluid container-xl">
          <div className="row gy-4 align-items-center features-item">
            <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
              <img src={journey1} className="img-fluid features" alt="Our Journey" />
            </div>
            <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
              <h3>Our Journey</h3>
              <p>
                From humble beginnings, starting with a small team and limited resources, Sarda Chemical Corporation has
                expanded its operations and network, through strategic partnerships, rigorous quality control, and a
                customer-centric approach, we have built a robust supply chain that ensures timely delivery and
                competitive pricing.
              </p>
            </div>
          </div>

          <div className="row gy-4 align-items-center features-item">
            <div className="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
              <img src={lookingAhead} className="img-fluid features" alt="Looking Ahead" />
            </div>
            <div className="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay="200">
              <h3>Looking Ahead</h3>
              <p>
                As we move forward, Sarda Chemical Corporation continues to embrace innovation and sustainability, seeking
                new opportunities for growth and expansion. Our focus remains on delivering exceptional value to our
                customers, fostering long-term relationships, and contributing positively to the industry and the
                environment.
                Sarda Chemical Corporation is more than just a trading company; we are a trusted partner committed to
                excellence and dedicated to meeting the evolving needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Core Values Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container-fluid container-xl section-title" data-aos="fade-up">
          <span>Core Values<br /></span>
          <h2>Core Values</h2>
        </div>

        <img src={testimonialsBg} className="testimonials-bg" alt="" />

        <div className="container-fluid container-xl" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={integrityImg} className="testimonial-img" alt="Integrity" />
                  <h3>Integrity</h3>
                  <p>
                    <span>
                      We conduct our business with the highest ethical standards, ensuring transparency and honesty in all
                      our dealings.
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={customerFocusImg} className="testimonial-img" alt="Customer Focus" />
                  <h3>Customer Focus</h3>
                  <p>
                    <span>
                      Our customers are at the heart of everything we do. We are dedicated to understanding their needs
                      and exceeding their expectations.
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={innovationImg} className="testimonial-img" alt="Innovation" />
                  <h3>Innovation</h3>
                  <p>
                    <span>
                      We embrace change and encourage creativity, constantly seeking new and better ways to serve our
                      customers and improve our processes.
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={sustainabilityImg} className="testimonial-img" alt="Sustainability" />
                  <h3>Sustainability</h3>
                  <p>
                    <span>
                      We are committed to environmental stewardship, promoting sustainable practices and minimizing our
                      ecological footprint.
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={safetyImg} className="testimonial-img" alt="Safety" />
                  <h3>Safety</h3>
                  <p>
                    <span>
                      The safety of our employees, customers, and communities is our top priority. We adhere to
                      stringent safety protocols and continuously strive to improve our safety standards.
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={excellenceImg} className="testimonial-img" alt="Excellence" />
                  <h3>Excellence</h3>
                  <p>
                    <span>
                      We pursue excellence in all aspects of our business, from product quality to customer service,
                      ensuring the highest level of performance and satisfaction.
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={collaborationImg} className="testimonial-img" alt="Collaboration" />
                  <h3>Collaboration</h3>
                  <p>
                    <span>
                      We believe in the power of teamwork and collaboration, working together with our partners and
                      stakeholders to achieve common goals.
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={responsibilityImg} className="testimonial-img" alt="Responsibility" />
                  <h3>Responsibility</h3>
                  <p>
                    <span>
                      We take responsibility for our actions and their impact on society and the environment, ensuring
                      that we contribute positively to the communities we serve.
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src={qualityImg} className="testimonial-img" alt="Quality Assurance" />
                  <h3>Quality Assurance</h3>
                  <p>
                    <span>
                      Our commitment to quality is unwavering. We source our products from reputable manufacturers and
                      conduct thorough quality checks to ensure compliance with industry standards.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
