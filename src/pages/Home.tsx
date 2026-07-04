import React from 'react';
import { Link } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';

// Import Assets
import worldDottedMap from '../assets/img/world-dotted-map.png';
import industryAssociationSvg from '../assets/img/industry-association-svgrepo-com.svg';
import qualitySupervisionSvg from '../assets/img/quality-supervision-svgrepo-com.svg';
import comprehensiveSvg from '../assets/img/comprihensiv.svg';
import partnersSolidSvg from '../assets/img/partners-solid-svgrepo-com.svg';
import customerServiceAgentSvg from '../assets/img/customer-service-agent-svgrepo-com.svg';
import loyaltySvg from '../assets/img/loyalty-svgrepo-com.svg';
import pricetag2Svg from '../assets/img/pricetag2-svgrepo-com.svg';
import deliveryScheduleSvg from '../assets/img/delivery-schedule-svgrepo-com.svg';
import ctaBg from '../assets/img/cta-bg.jpg';

export const Home: React.FC = () => {
  const { roundedLogo, companyName } = useBrand();

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section d-flex align-items-center" style={{ minHeight: '85vh', padding: '120px 0 80px 0' }}>
        <img src={worldDottedMap} alt="" className="hero-bg" data-aos="fade-in" />

        <div className="container-fluid container-xl">
          <div className="row gy-5 align-items-center">
            {/* Text details inside a premium glassmorphic card */}
            <div className="col-lg-7 order-1 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <div className="hero-glass-card">
                <h4 className="text-uppercase tracking-wider mb-2" style={{ color: '#a3b8ff', fontSize: '14px', fontWeight: 600, letterSpacing: '2px' }}>
                  Welcome to
                </h4>
                <h1 className="text-white mb-4" style={{ fontSize: '38px', fontWeight: 800, lineHeight: 1.25 }}>
                  {companyName}
                </h1>
                <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '15.5px', lineHeight: 1.6 }}>
                  With over 27 years of excellence in the textile chemicals industry, {companyName} stands as
                  a trusted leader in chemical trading and distribution. Our unwavering commitment to quality and
                  innovation has made us a preferred partner for numerous esteemed clients.
                  As a premier supplier, we offer a comprehensive range of high-performance textile chemicals that cater to
                  diverse industry needs.
                </p>
                <div className="hero-badge">
                  <span className="pulse-dot"></span>
                  27+ Years of Excellence
                </div>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="premium-btn-primary">
                    <span>Get in Touch</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                  <Link to="/about" className="premium-btn-secondary">
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Logo image floating with dynamic hover/scroll animation */}
            <div className="col-lg-5 order-2 order-lg-2 d-none d-lg-flex justify-content-center align-items-center" data-aos="zoom-out" data-aos-delay="200">
              <div className="hero-logo-container">
                <img
                  src={roundedLogo}
                  alt={`${companyName} Logo`}
                  style={{
                    maxWidth: '320px',
                    width: '100%',
                    height: 'auto',
                    borderRadius: '50%',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
                    border: '4px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section" style={{ padding: '90px 0' }}>
        {/* Section Title */}
        <div className="container-fluid container-xl text-center mb-5" data-aos="fade-up">

          <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--heading-color)', marginBottom: '15px' }}>
            Why {companyName}?
          </h2>
          <div className="mx-auto" style={{ width: '50px', height: '4px', background: 'var(--primary)', borderRadius: '2px', marginBottom: '20px' }}></div>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#555e6b', fontSize: '16px', lineHeight: 1.6 }}>
            Choose {companyName} as your trusted partner in textile chemicals and experience the difference
            that expertise, quality, and exceptional service can make for your business.
          </p>
        </div>

        <div className="container-fluid container-xl">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="premium-service-card">
                <div className="service-icon-wrapper">
                  <img src={industryAssociationSvg} alt="Industry Expertise" className="img-fluid services" />
                </div>
                <h3>Industry Expertise</h3>
                <p>
                  With over 27 years of experience, {companyName} brings a deep understanding of the
                  textile chemicals industry. Our extensive knowledge ensures that we provide the most effective
                  solutions tailored to your specific needs.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="premium-service-card">
                <div className="service-icon-wrapper">
                  <img src={qualitySupervisionSvg} alt="Quality Assurance" className="img-fluid services" />
                </div>
                <h3>Quality Assurance</h3>
                <p>
                  We are committed to delivering the highest quality products. Our partnerships with leading
                  manufacturers and rigorous quality control processes ensure that you receive only the best chemicals for
                  your textile applications.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="premium-service-card">
                <div className="service-icon-wrapper">
                  <img src={comprehensiveSvg} alt="Comprehensive Product Range" className="img-fluid services" />
                </div>
                <h3>Comprehensive Product Range</h3>
                <p>
                  Our diverse portfolio includes a wide variety of textile chemicals, from dyeing agents to finishing
                  chemicals. We offer solutions for every stage of textile processing, ensuring seamless operations and
                  superior results.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="premium-service-card">
                <div className="service-icon-wrapper">
                  <img src={partnersSolidSvg} alt="Reliable Partnerships" className="img-fluid services" />
                </div>
                <h3>Reliable Partnerships</h3>
                <p>
                  Our long-standing relationships with top chemical manufacturers enable us to supply products that meet
                  stringent industry standards. These partnerships also allow us to stay at the forefront of innovation,
                  bringing you the latest advancements in textile chemicals.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="premium-service-card">
                <div className="service-icon-wrapper">
                  <img src={customerServiceAgentSvg} alt="Exceptional Customer Service" className="img-fluid services" />
                </div>
                <h3>Exceptional Customer Service</h3>
                <p>
                  At {companyName}, customer satisfaction is our top priority. Our dedicated team of
                  professionals is always ready to assist you with expert advice, prompt support, and tailored solutions
                  to meet your unique requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="premium-service-card">
                <div className="service-icon-wrapper">
                  <img src={loyaltySvg} alt="Sustainability Commitment" className="img-fluid services" />
                </div>
                <h3>Sustainability Commitment</h3>
                <p>
                  We are dedicated to promoting sustainable practices within the textile industry. Our product offerings
                  include eco-friendly chemicals that help you reduce your environmental footprint while maintaining high
                  performance and quality.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
              <div className="premium-service-card">
                <div className="service-icon-wrapper">
                  <img src={pricetag2Svg} alt="Competitive Pricing" className="img-fluid services" />
                </div>
                <h3>Competitive Pricing</h3>
                <p>
                  We strive to offer the best value to our customers. Our competitive pricing ensures that you receive
                  top-quality products without compromising your budget.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="800">
              <div className="premium-service-card">
                <div className="service-icon-wrapper">
                  <img src={deliveryScheduleSvg} alt="Timely Delivery" className="img-fluid services" />
                </div>
                <h3>Timely Delivery</h3>
                <p>
                  With an efficient supply chain and robust logistics network, we guarantee timely delivery of your
                  orders, ensuring that your operations run smoothly without any interruptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section id="call-to-action" className="call-to-action section" style={{ background: 'transparent', padding: '60px 0 100px 0' }}>
        <div className="container-fluid container-xl">
          <div className="premium-cta-card" data-aos="zoom-in" data-aos-delay="100">
            <img src={ctaBg} alt="CTA Background" />
            <div className="cta-content position-relative">
              <div className="row align-items-center gy-5">
                {/* Left Column: Text & Features Checklist */}
                <div className="col-lg-7 text-start">

                  <h2 className="text-white mb-3" style={{ fontSize: '36px', fontWeight: 800, lineHeight: 1.2 }}>
                    Ready to Partner with Industry Leaders?
                  </h2>
                  <p className="text-white-50 mb-4" style={{ fontSize: '16px', lineHeight: 1.6, opacity: 0.85 }}>
                    Unlock exceptional product standards, wholesale pricing, and reliable logistics by partnering with {companyName}. Let's grow your business together.
                  </p>
                  <div className="row text-white gy-3">
                    <div className="col-sm-6 d-flex align-items-center gap-2">
                      <i className="bi bi-patch-check-fill" style={{ color: '#5480ff', fontSize: '18px' }}></i>
                      <span style={{ fontSize: '15px', fontWeight: 600 }}>27+ Years of Trust</span>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center gap-2">
                      <i className="bi bi-patch-check-fill" style={{ color: '#5480ff', fontSize: '18px' }}></i>
                      <span style={{ fontSize: '15px', fontWeight: 600 }}>Certified Quality Control</span>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center gap-2">
                      <i className="bi bi-patch-check-fill" style={{ color: '#5480ff', fontSize: '18px' }}></i>
                      <span style={{ fontSize: '15px', fontWeight: 600 }}>Strategic Dealerships</span>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center gap-2">
                      <i className="bi bi-patch-check-fill" style={{ color: '#5480ff', fontSize: '18px' }}></i>
                      <span style={{ fontSize: '15px', fontWeight: 600 }}>On-Time Global Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Inquiry Glass Panel */}
                <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
                  <div className="p-4 p-md-5 rounded-4 text-center text-lg-start" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', width: '100%', maxWidth: '400px' }}>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '20px' }}>Start a Conversation</h4>
                    <p className="text-white-50 mb-4" style={{ fontSize: '14.5px', lineHeight: 1.5 }}>
                      Submit an inquiry today and receive a tailored quote from our chemical experts.
                    </p>
                    <Link className="premium-btn-primary w-100" to="/contact">
                      <span>Inquire Now</span>
                      <i className="bi bi-envelope-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
