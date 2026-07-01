import React from 'react';
import { Link } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';

export const Footer: React.FC = () => {
  const { logo, companyName, email, phone, address, socialLinks } = useBrand();
  const currentYear = new Date().getFullYear();

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const subject = 'Hello!';
    const body = 'I wanted to reach out and say hello.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer id="footer" className="footer">
      <div className="container-fluid container-xl footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <Link to="/" className="logo d-flex align-items-center">
              <img 
                src={logo} 
                alt={`${companyName} Logo`} 
                style={{ 
                  maxHeight: '70px', 
                  backgroundColor: '#ffffff', 
                  padding: '8px 20px', 
                  display: 'inline-block',
                  objectFit: 'contain',
                  borderRadius: '6px'
                }} 
              />
            </Link>
            <p>
              {companyName}, a leader in textile chemicals for 27 years, delivers high-performance
              products through strategic partnerships, ensuring quality, efficiency, and innovation in
              industry solutions.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#" onClick={handleMailClick} id="mailto-link">
                <i className="bi bi-envelope"></i>
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/partners">Trusted partners</Link></li>
              <li><Link to="/products">Our Products</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>{address}</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>{phone}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{email}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid container-xl copyright text-center mt-4">
        <p>
          © <span>Copyright 2024 - {currentYear}</span>{' '}
          <strong className="px-1 sitename">{companyName}</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        {/* <div className="credits">
          Designed by <a href="https://ordinarycoder.com/" target='blank'>OrdinaryCoder</a>
        </div> */}
      </div>
    </footer>
  );
};
