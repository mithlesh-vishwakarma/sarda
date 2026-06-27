import React from 'react';

// Import Assets
import pageTitleBg from '../assets/img/page-title-bg.jpg';
import ranChemicalsImg from '../assets/img/ran-chemicals-updated new.jpg';
import everestStarchImg from '../assets/img/everest-starch-updated new.jpg';

export const Partners: React.FC = () => {
  return (
    <>
      {/* Page Title */}
      <div 
        className="page-title" 
        data-aos="fade" 
        style={{ backgroundImage: `url(${pageTitleBg})` }}
      >
        <div className="container-fluid container-xl position-relative">
          <h1>Our Trusted Partners</h1>
        </div>
      </div>

      {/* Ran Chemicals Section */}
      <section id="about-ran" className="about section">
        <div className="container-fluid container-xl">
          <div className="row gy-4">
            <div 
              className="col-lg-6 position-relative align-self-start order-lg-last order-first"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <img src={ranChemicalsImg} className="img-fluid" alt="Ran Chemicals" />
            </div>

            <div className="col-lg-6 content order-last order-lg-first" data-aos="fade-up" data-aos-delay="100">
              <h3>RAN CHEMICALS PVT.LTD & RSA INDUSTRIES PVT.LTD</h3>
              <p>
                Sarda Chemical Corporation is proud to be an authorized dealer for both Ran Chemicals and RSA
                Industries, two highly esteemed names in the chemical sector based in Nagpur, India with
                more than three decades of experience in developing and manufacturing next-generation
                speciality formulations for applications across textile.
              </p>
              <p>
                This dual partnership underscores Sarda Chemical Corporation's dedication to providing a
                diverse and high-quality range of chemical products to meet the varied needs of its clients.
                By offering the innovative solutions of Ran Chemicals alongside the advanced products from
                RSA Industries, Sarda Chemical Corporation ensures that customers receive unparalleled
                service and exceptional value. This collaboration highlights Sarda Chemical Corporation's
                commitment to excellence, reliability, and customer satisfaction, solidifying its position
                as a trusted leader in the market.
              </p>
              <p>
                Through these strategic alliances, Sarda Chemical Corporation continues to drive industry
                advancements and deliver superior solutions to its clients.
              </p>
              <ul>
                <li>
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <a href="https://ranchemicals.in/" target="_blank" rel="noopener noreferrer">
                      <h5>Visit For More</h5>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Everest Starch Section */}
      <section id="about-everest" className="about section">
        <div className="container-fluid container-xl">
          <div className="row gy-4">
            <div 
              className="col-lg-6 position-relative align-self-start order-lg-last order-first"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <img src={everestStarchImg} className="img-fluid" alt="Everest Starch" />
            </div>

            <div className="col-lg-6 content order-last order-lg-first" data-aos="fade-up" data-aos-delay="100">
              <h3>EVEREST STARCH INDIA PVT.LTD</h3>
              <p>
                Sarda Chemical Corporation is proud to be the authorized agent of Everest Starch India for
                their premium product, maize starch. At present, Everest Starch is processing 600 metric
                tons of corn (maize) per day. The company's locational advantages allow it to maintain
                proper procurement, processing, and supply arrangements. This partnership reflects Sarda
                Chemical Corporation's commitment to delivering top-tier products and solutions to its
                customers.
              </p>
              <p>
                As the authorized agent, Sarda Chemical Corporation ensures the availability of high-quality
                maize starch from Everest Starch India, known for its superior performance and reliability.
                This collaboration enhances Sarda Chemical Corporation's product portfolio, enabling them to
                meet the diverse needs of various industries, including food processing, textiles,
                pharmaceuticals, and more.
              </p>
              <p>
                Through this strategic alliance, Sarda Chemical Corporation continues to uphold its
                dedication to excellence, quality, and customer satisfaction, reinforcing its reputation as
                a trusted leader in the market. This partnership not only strengthens their market position
                but also ensures that their customers have access to some of the best maize starch products
                available.
              </p>
              <ul>
                <li>
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <a href="https://evereststarch.com/" target="_blank" rel="noopener noreferrer">
                      <h5>Visit For More</h5>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Partners;
