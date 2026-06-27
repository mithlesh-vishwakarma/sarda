import React, { useState } from 'react';
import pageTitleBg from '../assets/img/page-title-bg.jpg';

export const Contact: React.FC = () => {
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
          access_key: 'ed67b5ad-afa4-4acb-9e5a-8d017f8265a9',
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
        className="page-title" 
        data-aos="fade" 
        style={{ backgroundImage: `url(${pageTitleBg})` }}
      >
        <div className="container-fluid container-xl position-relative">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container-fluid container-xl" data-aos="fade-up" data-aos-delay="100">
          {/* Google Maps Embed */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <iframe 
              style={{ border: 0, width: '100%', height: '270px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.362063134127!2d72.8143071!3d21.1487958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051378b6c352b%3A0x25cbe5a269d7ff6b!2sSarda%20Chemical%20Corporation!5e0!3m2!1sen!2sin!4v1719056890605!5m2!1sen!2sin"
              frameBorder="0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="row gy-4">
            {/* Info Cards */}
            <div className="col-lg-4">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Surat Office</h3>
                  <b>
                    <p className="cmp-name">Sarda Chemical Corporation &</p>
                    <p className="cmp-name">Jupiter Organics Pvt Ltd</p>
                  </b>
                  <p>326, Ishana Business Hub Althan Bamroli Expessway, VIP Road, nr. Dmart, Pandesara, Surat, Gujarat 394221</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Mumbai Office</h3>
                  <b>
                    <p className="cmp-name">Jupiter chemicals</p>
                  </b>
                  <p>313/319, Room No. 15, Harish Chamber, Samuel Street, Mumbai</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 9825109158</p>
                </div>
              </div>
            </div>

            {/* Email Contact Form */}
            <div className="col-lg-8">
              <form 
                onSubmit={handleSubmit}
                className="php-email-form"
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      name="name" 
                      value={formState.name}
                      onChange={handleChange}
                      className="form-control" 
                      placeholder="Your Name"
                      required 
                    />
                  </div>

                  <div className="col-md-6">
                    <input 
                      type="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="form-control" 
                      placeholder="Your Email"
                      required 
                    />
                  </div>

                  <div className="col-md-12">
                    <input 
                      type="text" 
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="form-control" 
                      placeholder="Subject"
                      required 
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className="form-control" 
                      rows={6} 
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    {status === 'loading' && <div className="loading d-block">Sending Message...</div>}
                    {status === 'error' && <div className="error-message d-block">{errorMessage}</div>}
                    {status === 'success' && <div className="sent-message d-block">Your message has been sent. Thank you!</div>}

                    <button type="submit" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
