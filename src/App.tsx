import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';

// Layout components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsappFloat } from './components/WhatsappFloat';
import { ScrollTopButton } from './components/ScrollTopButton';

// Lazy loading pages for high-performance chunk loading
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Preloader component fallback for Suspense
const PreloaderFallback: React.FC = () => (
  <div id="preloader">
    <div className="atom-loader">
      <div className="nucleus"></div>
      <div className="orbit orbit-1"></div>
      <div className="orbit orbit-2"></div>
      <div className="orbit orbit-3"></div>
    </div>
  </div>
);

export const App: React.FC = () => {
  const location = useLocation();

  // Initialize AOS scroll animations
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  // Sync route transitions with body classing & scroll-to-top
  useEffect(() => {
    let bodyClass = 'index-page';
    switch (location.pathname) {
      case '/':
        bodyClass = 'index-page';
        break;
      case '/about':
        bodyClass = 'about-page';
        break;
      case '/partners':
        bodyClass = 'about-page';
        break;
      case '/contact':
        bodyClass = 'contact-page';
        break;
      default:
        bodyClass = 'index-page';
    }
    document.body.className = bodyClass;
    
    // Smooth reset scroll position to top on navigation
    window.scrollTo(0, 0);

    // Refresh AOS animations on route navigation
    AOS.refresh();
  }, [location]);

  return (
    <>
      <Header />
      
      <main className="main">
        <Suspense fallback={<PreloaderFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} /> {/* Fallback route */}
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <WhatsappFloat />
      <ScrollTopButton />
    </>
  );
};

export default App;
