import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';

export const Header: React.FC = () => {
  const { logo, companyName } = useBrand();
  const location = useLocation();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  // const [activeDropdowns, setActiveDropdowns] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Apply .scrolled class to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        document.body.classList.add('scrolled');
      } else {
        setIsScrolled(false);
        document.body.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('scrolled');
    };
  }, []);

  // Manage body class for mobile nav active state
  useEffect(() => {
    if (isMobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [isMobileNavActive]);

  // Close mobile nav when location (page) changes
  useEffect(() => {
    setIsMobileNavActive(false);
    // setActiveDropdowns([]);
  }, [location.pathname]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  // const toggleDropdown = (key: string, e: React.MouseEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setActiveDropdowns(prev =>
  //     prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
  //   );
  // };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt={companyName} style={{ maxHeight: '56px' }} />
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/" className={isActive('/')}>
                Home<br />
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about')}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/partners" className={isActive('/partners')}>
                Trusted Partners
              </Link>
            </li>
            <li>
              <Link to="/products" className={isActive('/products')}>
                Our Products
              </Link>
            </li>
            {/* <li className={`dropdown ${activeDropdowns.includes('products') ? 'active' : ''}`}>
              <a href="#" onClick={(e) => toggleDropdown('products', e)}>
                <span>Products</span>{' '}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={activeDropdowns.includes('products') ? 'dropdown-active' : ''}>
                <li className={`dropdown ${activeDropdowns.includes('process-wise') ? 'active' : ''}`}>
                  <a href="#" onClick={(e) => toggleDropdown('process-wise', e)}>
                    <span>PROCESS WISE</span>{' '}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul className={activeDropdowns.includes('process-wise') ? 'dropdown-active' : ''}>
                    <li className={`dropdown ${activeDropdowns.includes('pretreatment') ? 'active' : ''}`}>
                      <a href="#" onClick={(e) => toggleDropdown('pretreatment', e)}>
                        <span>PRETRETMENT</span>{' '}
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </a>
                      <ul className={`pretretment ${activeDropdowns.includes('pretreatment') ? 'dropdown-active' : ''}`}>
                        <li><Link to="/contact">Desizing Agents</Link></li>
                        <li><Link to="/contact">Wetting and Penetrating Agents</Link></li>
                        <li><Link to="/contact">Mercerizing Agent</Link></li>
                        <li><Link to="/contact">Sequestering Agents</Link></li>
                        <li><Link to="/contact">Demineralising Agents</Link></li>
                        <li><Link to="/contact">Wetting agents cum Detergents</Link></li>
                        <li><Link to="/contact">Silicone Defoamers</Link></li>
                        <li><Link to="/contact">Non-silicate Peroxide Stabilizers</Link></li>
                        <li><Link to="/contact">Neutralizers</Link></li>
                        <li><Link to="/contact">Polyester Weight Reducing Catalyst</Link></li>
                        <li><Link to="/contact">Anti-back Staining Agents</Link></li>
                        <li><Link to="/contact">Core Alkali Neutralizers</Link></li>
                      </ul>
                    </li>

                    <li className={`dropdown ${activeDropdowns.includes('dyeing') ? 'active' : ''}`}>
                      <a href="#" onClick={(e) => toggleDropdown('dyeing', e)}>
                        <span>DYEING</span>{' '}
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </a>
                      <ul className={`dyeing ${activeDropdowns.includes('dyeing') ? 'dropdown-active' : ''}`}>
                        <li><Link to="/contact">DEFOAMER</Link></li>
                        <li><Link to="/contact">ACID BUFFERS</Link></li>
                        <li><Link to="/contact">POLYESTER DYEING CARRIER</Link></li>
                        <li><Link to="/contact">DISPERSING AGENT AND OLIGOMER REMOVING AGENTS</Link></li>
                        <li><Link to="/contact">LEVELLING AGENTS</Link></li>
                        <li><Link to="/contact">ANTICREASE LUBRICANTS</Link></li>
                        <li><Link to="/contact">WASHING OFF AGENTS</Link></li>
                        <li><Link to="/contact">DYE‐FIXING AGENTS</Link></li>
                        <li><Link to="/contact">SODA ASH SUBSTITUTE</Link></li>
                        <li><Link to="/contact">CATIONISING AGENT</Link></li>
                        <li><Link to="/contact">REDUCTION CLEARING AGENTS</Link></li>
                      </ul>
                    </li>

                    <li className={`dropdown ${activeDropdowns.includes('printing') ? 'active' : ''}`}>
                      <a href="#" onClick={(e) => toggleDropdown('printing', e)}>
                        <span>PRINTING</span>{' '}
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </a>
                      <ul className={`printing ${activeDropdowns.includes('printing') ? 'dropdown-active' : ''}`}>
                        <li><Link to="/contact">FIXATION ACCELERATOR IN POLYESTER PRINTING FIXED ON LOOP STEAMER</Link></li>
                        <li><Link to="/contact">DISPERSING</Link></li>
                        <li><Link to="/contact">PENETRATING</Link></li>
                        <li><Link to="/contact">SWELLING</Link></li>
                        <li><Link to="/contact">LEVELLING</Link></li>
                        <li><Link to="/contact">DEFOAMING</Link></li>
                        <li><Link to="/contact">ANTIFROATHING AGENTS</Link></li>
                        <li><Link to="/contact">BINDERS</Link></li>
                        <li><Link to="/contact">FIXERS IN PIGMENT PRINTING</Link></li>
                        <li><Link to="/contact">THICKENERS</Link></li>
                        <li><Link to="/contact">WHITE INKS</Link></li>
                        <li><Link to="/contact">WASHING OFF AGENT</Link></li>
                        <li><Link to="/contact">SOFTENER FOR PIGMENT PRINTING</Link></li>
                        <li><Link to="/contact">OXIDISING AGENTS</Link></li>
                      </ul>
                    </li>

                    <li className={`dropdown ${activeDropdowns.includes('finishing') ? 'active' : ''}`}>
                      <a href="#" onClick={(e) => toggleDropdown('finishing', e)}>
                        <span>FINISHING AGENTS</span>{' '}
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </a>
                      <ul className={`finishing-agents ${activeDropdowns.includes('finishing') ? 'dropdown-active' : ''}`}>
                        <li><Link to="/contact">STIFFENERS</Link></li>
                        <li><Link to="/contact">SOFTENERS</Link></li>
                        <li><Link to="/contact">SILICONE SOFTENERS</Link></li>
                        <li><Link to="/contact">WAX FINISHING AGENTS</Link></li>
                        <li><Link to="/contact">ANTISTATIC AGENT</Link></li>
                        <li><Link to="/contact">POLYURETHANE FINISHING AGENT</Link></li>
                        <li><Link to="/contact">ANTICREASE RESINS</Link></li>
                      </ul>
                    </li>

                    <li className={`dropdown ${activeDropdowns.includes('pva') ? 'active' : ''}`}>
                      <a href="#" onClick={(e) => toggleDropdown('pva', e)}>
                        <span>POLYVINYL ALCOHOL</span>{' '}
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </a>
                      <ul className={activeDropdowns.includes('pva') ? 'dropdown-active' : ''}>
                        <li><Link to="/contact">ALL TYPES OF PVA GRADES</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/contact">ALL TYPES OF SOLVENTS</Link></li>
                    <li><Link to="/contact">ALL TYPES OF SURFACTANTS</Link></li>
                  </ul>
                </li>

                <li className={`dropdown ${activeDropdowns.includes('bulk-order') ? 'active' : ''}`}>
                  <a href="#" onClick={(e) => toggleDropdown('bulk-order', e)}>
                    <span>BULK ORDER PRODUCTS</span>{' '}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul className={activeDropdowns.includes('bulk-order') ? 'dropdown-active' : ''}>
                    <li><Link to="/contact">TOLUENE</Link></li>
                    <li><Link to="/contact">ETHYL</Link></li>
                    <li><Link to="/contact">IPA-ISOPROPYL ALCOHOL</Link></li>
                    <li><Link to="/contact">ACETONE</Link></li>
                  </ul>
                </li>

                <li className={`dropdown ${activeDropdowns.includes('basic-chemicals') ? 'active' : ''}`}>
                  <a href="#" onClick={(e) => toggleDropdown('basic-chemicals', e)}>
                    <span>BASICS TEXTILE CHEMICALS</span>{' '}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul className={`basic-chemicals ${activeDropdowns.includes('basic-chemicals') ? 'dropdown-active' : ''}`}>
                    <li><Link to="/contact">ACETIC ACID</Link></li>
                    <li><Link to="/contact">SULFURIC ACID</Link></li>
                    <li><Link to="/contact">TARTARIC ACID</Link></li>
                    <li><Link to="/contact">OXALIC ACID</Link></li>
                    <li><Link to="/contact">FORMIC ACID</Link></li>
                    <li><Link to="/contact">HYDROGEN PEROXIDE</Link></li>
                    <li><Link to="/contact">GLYCERINE</Link></li>
                    <li><Link to="/contact">CITRIC ACID</Link></li>
                    <li><Link to="/contact">POLYSOL</Link></li>
                    <li><Link to="/contact">MBX</Link></li>
                    <li><Link to="/contact">SODIUM ACETATE</Link></li>
                    <li><Link to="/contact">NID</Link></li>
                    <li><Link to="/contact">CATSTROX</Link></li>
                    <li><Link to="/contact">AERLAMIDE</Link></li>
                  </ul>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="/contact" className={isActive('/contact')}>
                Contact Us
              </Link>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};
