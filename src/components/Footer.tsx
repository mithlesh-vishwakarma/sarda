import React from 'react';
import { Link } from 'react-router-dom';
import sardaLogo from '../assets/img/sarda-logopng.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'shubhamsarda@sardachemicalcorporation.com';
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
              <img src={sardaLogo} alt="Sarda Logo" style={{ maxHeight: '35px', marginRight: '10px' }} />
              <span className="sitename" style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>Sarda Chemical Corporation</span>
            </Link>
            <p>
              Sarda Chemical Corporation, a leader in textile chemicals for 27 years, delivers high-performance
              products through strategic partnerships, ensuring quality, efficiency, and innovation in
              industry solutions.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#" onClick={handleMailClick} id="mailto-link">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="https://wa.me/9825109158" target="_blank" rel="noopener noreferrer">
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
              <li><Link to="/contact">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>326, Ishana Business Hub Althan Bamroli Expessway,VIP Road, nr. Dmart, Pandesara, Surat, Gujarat 394221,India</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+91 9825109158</span>
            </p>
            <p>
              <strong>Email:</strong> <span>shubhamsarda@sardachemicalcorporation.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid container-xl copyright text-center mt-4">
        <p>
          © <span>Copyright 2024 - {currentYear}</span>{' '}
          <strong className="px-1 sitename">Sarda Chemical Corporation</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        {/* <div className="credits">
          Designed by <a href="https://ordinarycoder.com/" target='blank'>OrdinaryCoder</a>
        </div> */}
      </div>
    </footer>
  );
};
