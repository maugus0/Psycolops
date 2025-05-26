import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LoginScreen from '../../Assets/Images/Loginscreen1.png';
import MobilesliderImg from '../../Assets/Images/mobileslider.png';

const MobileSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="mobile-slider">
      <div className="custom-container">
        <div className="row position-relative mobile-slider-1">
          <div
            className="col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="color-purple font-32">Filters</h4>
            <img src={LoginScreen} alt="Login Screen" className="width-40" />
            <p className="font-20 position-absolute absolute-1 circle-before">
              Filters to help users find exactly <br />
              the trek they are looking for
            </p>
          </div>

          <div
            className="col-md-6 position-relative mobile-slider-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="color-purple font-32 margin-left-30">Home Page</h4>
            <img src={MobilesliderImg} alt="Mobile Slider" className="w-100" />
            <p className="font-20 position-absolute absolute-2 circle-before">
              Notifications about <br />
              upcoming treks
            </p>
            <p className="font-20 position-absolute absolute-3 circle-before">
              Curated Selection <br />
              of Treks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSlider;
