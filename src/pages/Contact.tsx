import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import pageTitleBg from '../assets/img/page-title-bg.jpg';

export const Contact: React.FC = () => {
  const brand = useBrand();
  const { companyName, email, phone, googleMapsEmbedUrl, web3FormsAccessKey } = brand;
  const isJupiter = companyName === 'Jupiter Organics';
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          ...formState,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'A network error occurred. Please check your connection.');
    }
  };

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
            Contact Us
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto mt-3" data-aos="fade-up" data-aos-delay="300" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Have queries about our chemical products, services, or partnerships? Reach out to us and let's start a conversation.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container-fluid container-xl contact-container" data-aos="fade-up" data-aos-delay="100">

          {/* Info Cards Row (Placed above the form in a 3-column layout) */}
          <div className="row gy-4 mb-5">
            {/* Surat Office Card */}
            <div className="col-md-4">
              <div className="contact-info-card h-100" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-icon-wrapper">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h3>Surat Office</h3>
                <div className="company-group">
                  {isJupiter ? (
                    <>
                      <p className="cmp-name">Jupiter Organics pvt ltd</p>
                      <p className="cmp-name">Sarda chemical corporation</p>
                    </>
                  ) : (
                    <>
                      <p className="cmp-name">{companyName}</p>
                      <p className="cmp-name">{companyName === 'Jupiter Organics' ? 'Sarda Chemical Corporation' : 'Jupiter Organics Pvt Ltd'}</p>
                    </>
                  )}
                </div>
                <p className="mt-2 text-slate-500">
                  326, Ishana Business Hub Althan Bamroli Expressway, VIP Road, nr. Dmart, Pandesara, Surat, Gujarat 394221
                </p>
              </div>
            </div>

            {/* Mumbai Office Card */}
            <div className="col-md-4">
              <div className="contact-info-card h-100" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-icon-wrapper">
                  <i className="bi bi-building"></i>
                </div>
                <h3>Mumbai Office</h3>
                <div className="company-group">
                  {isJupiter ? (
                    <p className="cmp-name">Jupiter Chemicals</p>
                  ) : (
                    <p className="cmp-name">Jupiter Organics</p>
                  )}
                </div>
                <p className="mt-2 text-slate-500">
                  313/319, Room No. 15, Harish Chamber, Samuel Street, Mumbai
                </p>
              </div>
            </div>

            {/* Call & Direct Contact Card */}
            <div className="col-md-4">
              <div className="contact-info-card h-100" data-aos="fade-up" data-aos-delay="400">
                <div className="contact-icon-wrapper">
                  <i className="bi bi-headset"></i>
                </div>
                <h3>Direct Connect</h3>
                <div className="d-flex flex-column gap-2">
                  <p className="text-slate-500">
                    <strong className="text-slate-800">Phone:</strong> {phone}
                  </p>
                  <p className="text-slate-500">
                    <strong className="text-slate-800">Email:</strong> {email}
                  </p>
                  <p className="text-slate-500">
                    <strong className="text-slate-800">Availability:</strong> Mon - Sat, 9:30 AM - 6:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Contact Form Row (Centered and balanced) */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="contact-form-wrapper" data-aos="fade-up" data-aos-delay="200">
                <h2 className="contact-form-title">Send a Message</h2>
                <p className="contact-form-subtitle">
                  We respond to queries within 24 hours. Fill out the details below.
                </p>

                <form onSubmit={handleSubmit} className="row g-4">
                  {/* Status Alerts inside the form */}
                  {status !== 'idle' && (
                    <div className="col-12">
                      {status === 'loading' && (
                        <div className="contact-status-alert alert-loading">
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span>Sending your message, please wait...</span>
                        </div>
                      )}
                      {status === 'error' && (
                        <div className="contact-status-alert alert-error">
                          <i className="bi bi-exclamation-triangle-fill"></i>
                          <span>{errorMessage}</span>
                        </div>
                      )}
                      {status === 'success' && (
                        <div className="contact-status-alert alert-success">
                          <i className="bi bi-check-circle-fill"></i>
                          <span>Your message has been sent successfully. Thank you!</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="col-md-6">
                    <div className="contact-input-group">
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="contact-form-control"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="contact-input-group">
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="contact-form-control"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="contact-input-group">
                      <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="contact-form-control"
                        placeholder="Subject / Topic of Discussion"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="contact-input-group">
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        className="contact-form-control"
                        rows={6}
                        placeholder="How can we help you? Write your message here..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="contact-btn-submit"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <i className="bi bi-send-fill"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="row mt-4" data-aos="fade-up" data-aos-delay="400">
            <div className="col-12">
              <div className="text-center mb-4">
                <span className="text-slate-500 font-bold uppercase tracking-wider text-xs block">Map Direction</span>
                <h3 className="text-slate-800 font-extrabold mt-1 text-2xl">Locate Our Surat Office</h3>
              </div>
              <div className="map-frame-wrapper">
                <iframe
                  style={{ border: 0, width: '100%', height: '380px' }}
                  src={googleMapsEmbedUrl}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${companyName} Office Location Map`}
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
