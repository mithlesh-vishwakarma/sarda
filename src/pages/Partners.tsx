import React from 'react';
import { Link } from 'react-router-dom';

// Import Assets
import pageTitleBg from '../assets/img/page-title-bg.jpg';
import ranChemicalsImg from '../assets/img/ran-chemicals-updated new.jpg';
import everestStarchImg from '../assets/img/everest-starch-updated new.jpg';

export const Partners: React.FC = () => {
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
          <span className="hero-badge" data-aos="fade-up" data-aos-delay="100">
            <span className="pulse-dot"></span>Strategic Alliances
          </span>
          <h1 className="text-white font-extrabold tracking-tight mt-2" data-aos="fade-up" data-aos-delay="200" style={{ fontSize: '3.2rem' }}>
            Our Trusted Partners
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto mt-3" data-aos="fade-up" data-aos-delay="300" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Sarda Chemical Corporation collaborates with industry-leading manufacturers to supply high-performance chemical formulations and reliable raw materials to the textile sector.
          </p>
          <nav className="breadcrumbs d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-delay="400">
            <ol className="d-flex list-unstyled gap-2 m-0 p-0 text-slate-300" style={{ fontSize: '14.5px' }}>
              <li><Link to="/" className="text-slate-400 hover:text-white transition">Home</Link></li>

              <li className="text-white font-semibold">Partners</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Intro Section */}
      <section className="about section" style={{ padding: '80px 0 40px 0' }}>
        <div className="container-fluid container-xl">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ background: 'rgba(13, 66, 255, 0.08)', color: '#0d42ff', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                <span className="partner-glow-dot"></span>
                Synergy & Quality
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--heading-color)', lineHeight: '1.3' }} className="mb-4">
                Bridging Advanced Chemistry and Textile Production
              </h2>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <p style={{ color: '#555e6b', fontSize: '15.5px', lineHeight: '1.8' }}>
                Our alliances are built on a shared commitment to scientific excellence and operational integrity. As authorized distributors and agents, Sarda Chemical Corporation seamlessly bridges the gap between pioneering chemical research and the practical demands of modern textile manufacturing—ensuring certified quality standards, optimized cost structures, and a highly resilient supply chain.
              </p>
              <p style={{ color: '#555e6b', fontSize: '15.5px', lineHeight: '1.8', margin: 0 }}>
                By integrating decades of technical expertise with progressive eco-conscious values, we collaborate closely with our partners to address sizing, finishing, and coloration challenges, empowering regional textile houses to optimize yield while upholding international environmental standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Showcase Section */}
      <section className="partners-section pt-4 pb-5">
        <div className="container-fluid container-xl">

          {/* Partner 1: Ran Chemicals & RSA Industries */}
          <div className="partner-premium-card mb-5" data-aos="fade-up">
            <div className="row align-items-center gy-5">
              {/* Text Column */}
              <div className="col-lg-7 order-last order-lg-first">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(13, 66, 255, 0.06)', color: '#0d42ff', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Authorized Dealer
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#001973', marginBottom: '8px' }}>
                  RAN CHEMICALS PVT. LTD & RSA INDUSTRIES PVT. LTD
                </h3>
                <h6 style={{ fontSize: '14px', fontWeight: 600, color: '#555e6b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
                  Nagpur, India • Textile Speciality Formulations
                </h6>

                <p style={{ color: '#555e6b', fontSize: '15px', lineHeight: '1.7' }}>
                  Sarda Chemical Corporation is proud to be an authorized dealer for both Ran Chemicals and RSA
                  Industries, two highly esteemed names in the chemical sector based in Nagpur, India with
                  more than three decades of experience in developing and manufacturing next-generation
                  speciality formulations for applications across textile.
                </p>
                <p style={{ color: '#555e6b', fontSize: '15px', lineHeight: '1.7' }}>
                  This dual partnership underscores Sarda Chemical Corporation's dedication to providing a
                  diverse and high-quality range of chemical products to meet the varied needs of its clients.
                  By offering the innovative solutions of Ran Chemicals alongside the advanced products from
                  RSA Industries, Sarda Chemical Corporation ensures that customers receive unparalleled
                  service and exceptional value. This collaboration highlights Sarda Chemical Corporation's
                  commitment to excellence, reliability, and customer satisfaction, solidifying its position
                  as a trusted leader in the market.
                </p>
                <p style={{ color: '#555e6b', fontSize: '15px', lineHeight: '1.7', marginBottom: '25px' }}>
                  Through these strategic alliances, Sarda Chemical Corporation continues to drive industry
                  advancements and deliver superior solutions to its clients.
                </p>

                {/* Stat grid */}
                <div className="row g-3 mb-4">
                  <div className="col-4">
                    <div className="partner-stat-pill">
                      <span className="partner-stat-val">30+ Yrs</span>
                      <span className="partner-stat-lbl">Expertise</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="partner-stat-pill">
                      <span className="partner-stat-val">Nagpur</span>
                      <span className="partner-stat-lbl">HQ Base</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="partner-stat-pill">
                      <span className="partner-stat-val">Premium</span>
                      <span className="partner-stat-lbl">Formulations</span>
                    </div>
                  </div>
                </div>

                {/* Capabilities list */}
                <ul className="list-unstyled mb-4" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  <li className="d-flex align-items-start gap-3">
                    <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '18px' }}></i>
                    <span style={{ fontSize: '14.5px', color: '#334155' }}>Authorized dealer access ensures authenticated batches, direct technical support, and competitive factory prices.</span>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '18px' }}></i>
                    <span style={{ fontSize: '14.5px', color: '#334155' }}>Comprehensive catalog of sizing softeners, wet processing agents, and advanced textile processing chemicals.</span>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '18px' }}></i>
                    <span style={{ fontSize: '14.5px', color: '#334155' }}>Joint application testing for tailored chemical configurations to meet specialized fiber processing requirements.</span>
                  </li>
                </ul>

                <a
                  href="https://ranchemicals.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-btn-primary text-decoration-none"
                  style={{ textTransform: 'capitalize', fontSize: '14px', padding: '12px 28px' }}
                >
                  Visit Ran Chemicals
                  <i className="bi bi-box-arrow-up-right" style={{ fontSize: '14px' }}></i>
                </a>
              </div>

              {/* Image Column */}
              <div className="col-lg-5 order-first order-lg-last">
                <div className="partner-img-frame">
                  <img src={ranChemicalsImg} alt="Ran Chemicals and RSA Industries Nagpur Facilities" />
                  <div className="position-absolute" style={{ top: '20px', right: '20px', background: 'rgba(14, 29, 52, 0.85)', color: '#ffffff', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '30px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255, 255, 255, 0.15)', zIndex: 2 }}>
                    📍 Nagpur Facility
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner 2: Everest Starch India */}
          <div className="partner-premium-card" data-aos="fade-up">
            <div className="row align-items-center gy-5">
              {/* Image Column */}
              <div className="col-lg-5">
                <div className="partner-img-frame">
                  <img src={everestStarchImg} alt="Everest Starch India Manufacturing Facility" />
                  <div className="position-absolute" style={{ top: '20px', left: '20px', background: 'rgba(14, 29, 52, 0.85)', color: '#ffffff', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '30px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255, 255, 255, 0.15)', zIndex: 2 }}>
                    🏭 Processing Plant
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="col-lg-7">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(13, 66, 255, 0.06)', color: '#0d42ff', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Authorized Agent
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#001973', marginBottom: '8px' }}>
                  EVEREST STARCH INDIA PVT. LTD
                </h3>
                <h6 style={{ fontSize: '14px', fontWeight: 600, color: '#555e6b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
                  Maize Starch Pioneers • 600 MT Daily Capacity
                </h6>

                <p style={{ color: '#555e6b', fontSize: '15px', lineHeight: '1.7' }}>
                  Sarda Chemical Corporation is proud to be the authorized agent of Everest Starch India for
                  their premium product, maize starch. At present, Everest Starch is processing 600 metric
                  tons of corn (maize) per day. The company's locational advantages allow it to maintain
                  proper procurement, processing, and supply arrangements. This partnership reflects Sarda
                  Chemical Corporation's commitment to delivering top-tier products and solutions to its
                  customers.
                </p>
                <p style={{ color: '#555e6b', fontSize: '15px', lineHeight: '1.7' }}>
                  As the authorized agent, Sarda Chemical Corporation ensures the availability of high-quality
                  maize starch from Everest Starch India, known for its superior performance and reliability.
                  This collaboration enhances Sarda Chemical Corporation's product portfolio, enabling them to
                  meet the diverse needs of various industries, including food processing, textiles,
                  pharmaceuticals, and more.
                </p>
                <p style={{ color: '#555e6b', fontSize: '15px', lineHeight: '1.7', marginBottom: '25px' }}>
                  Through this strategic alliance, Sarda Chemical Corporation continues to uphold its
                  dedication to excellence, quality, and customer satisfaction, reinforcing its reputation as
                  a trusted leader in the market. This partnership not only strengthens their market position
                  but also ensures that their customers have access to some of the best maize starch products
                  available.
                </p>

                {/* Stat grid */}
                <div className="row g-3 mb-4">
                  <div className="col-4">
                    <div className="partner-stat-pill">
                      <span className="partner-stat-val">600 MT</span>
                      <span className="partner-stat-lbl">Daily Cap</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="partner-stat-pill">
                      <span className="partner-stat-val">Purity</span>
                      <span className="partner-stat-lbl">High Grade</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="partner-stat-pill">
                      <span className="partner-stat-val">Textile</span>
                      <span className="partner-stat-lbl">Sizing Focus</span>
                    </div>
                  </div>
                </div>

                {/* Capabilities list */}
                <ul className="list-unstyled mb-4" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  <li className="d-flex align-items-start gap-3">
                    <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '18px' }}></i>
                    <span style={{ fontSize: '14.5px', color: '#334155' }}>Authorized agent guarantees standard pricing and consistent batch specification certificates.</span>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '18px' }}></i>
                    <span style={{ fontSize: '14.5px', color: '#334155' }}>Viscosity-stabilized maize starch ideal for warp sizing across high-speed air-jet and projectile looms.</span>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <i className="bi bi-patch-check-fill text-primary" style={{ fontSize: '18px' }}></i>
                    <span style={{ fontSize: '14.5px', color: '#334155' }}>Multi-sector certification catering to textiles, food products, and paper manufacturing.</span>
                  </li>
                </ul>

                <a
                  href="https://evereststarch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-btn-primary text-decoration-none"
                  style={{ textTransform: 'capitalize', fontSize: '14px', padding: '12px 28px' }}
                >
                  Visit Everest Starch
                  <i className="bi bi-box-arrow-up-right" style={{ fontSize: '14px' }}></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Partnership Values / Stats Section */}
      <section className="services section" style={{ padding: '80px 0', borderTop: '1px solid rgba(13, 66, 255, 0.08)' }}>
        <div className="container-fluid container-xl">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ background: 'rgba(13, 66, 255, 0.08)', color: '#0d42ff', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              <span className="partner-glow-dot"></span>
              Core Value Deliverables
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--heading-color)' }}>Our Operational Standards</h2>
            <p style={{ maxWidth: '650px', margin: '15px auto 0 auto', color: '#555e6b', fontSize: '15.5px' }}>
              Working alongside global leaders allows us to guarantee reliable performance, cost efficiency, and certified safety.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="premium-service-card" style={{ borderTop: '4px solid #0d42ff' }}>
                <div className="service-icon-wrapper" style={{ background: 'rgba(13, 66, 255, 0.06)', color: '#0d42ff' }}>
                  <i className="bi bi-award-fill" style={{ fontSize: '32px' }}></i>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#001973', textAlign: 'center', marginBottom: '12px' }}>
                  Authorized Status
                </h3>
                <p style={{ fontSize: '14.2px', color: '#555e6b', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                  Direct dealer and agent authorizations guarantee product purity, original batch certificates, and manufacturer warranty.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="premium-service-card" style={{ borderTop: '4px solid #2ec4b6' }}>
                <div className="service-icon-wrapper" style={{ background: 'rgba(46, 196, 182, 0.06)', color: '#2ec4b6' }}>
                  <i className="bi bi-funnel-fill" style={{ fontSize: '32px' }}></i>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#001973', textAlign: 'center', marginBottom: '12px' }}>
                  R&D Centered
                </h3>
                <p style={{ fontSize: '14.2px', color: '#555e6b', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                  Partner laboratories enable product customization, specialized sizing development, and tailored technical support.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="premium-service-card" style={{ borderTop: '4px solid #30b1ff' }}>
                <div className="service-icon-wrapper" style={{ background: 'rgba(48, 177, 255, 0.06)', color: '#30b1ff' }}>
                  <i className="bi bi-truck-flatbed" style={{ fontSize: '32px' }}></i>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#001973', textAlign: 'center', marginBottom: '12px' }}>
                  Supply Reliability
                </h3>
                <p style={{ fontSize: '14.2px', color: '#555e6b', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                  Strategic transport routes and storage locations ensure uninterrupted raw material delivery, even during peak demand.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="premium-service-card" style={{ borderTop: '4px solid #001973' }}>
                <div className="service-icon-wrapper" style={{ background: 'rgba(0, 25, 115, 0.06)', color: '#001973' }}>
                  <i className="bi bi-shield-fill-check" style={{ fontSize: '32px' }}></i>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#001973', textAlign: 'center', marginBottom: '12px' }}>
                  Eco Compliance
                </h3>
                <p style={{ fontSize: '14.2px', color: '#555e6b', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                  Distribution of biodegradable softeners and sizing agents aligned with zero-discharge manufacturing guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="call-to-action section" style={{ padding: '80px 0' }}>
        <div className="container-fluid container-xl" data-aos="zoom-in">
          <div className="premium-cta-card">
            <img src={pageTitleBg} alt="Partnership and cooperation background overlay" />
            <div className="cta-content text-center">
              <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', marginBottom: '18px' }}>
                Let's Build Something Great Together
              </h3>
              <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '750px', margin: '0 auto 35px auto', lineHeight: '1.7' }}>
                Are you looking for a reliable, technically-sound distributor or sourcing partner for chemical formulations in India? Let's connect.
              </p>
              <Link to="/contact" className="premium-btn-primary text-decoration-none">
                Connect With Our Team
                <i className="bi bi-arrow-right" style={{ fontSize: '16px' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
