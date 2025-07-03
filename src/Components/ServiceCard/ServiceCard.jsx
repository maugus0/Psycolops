import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import './ServiceCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Icon1 from '../../Assets/Images/Service-icon-1.png';
import Icon2 from '../../Assets/Images/Service-icon-2.png';
import Icon3 from '../../Assets/Images/Service-icon-3.png';
import Icon4 from '../../Assets/Images/Service-icon-4.png';

const services = [
  {
    number: '01.',
    title: <>Brand <br /> Development</>,
    desc: 'Research, Brand Audit, Logo Design, and Brand Experience Development',
    icon: Icon1,
    bg: '#F3B3D8',
  },
  {
    number: '02.',
    title: <>UI/UX <br /> Design</>,
    desc: 'Research, Brand Audit, Logo Design, and Brand Experience Development',
    icon: Icon2,
    bg: '#D1E957',
  },
  {
    number: '03.',
    title: <>Motion <br /> Graphics</>,
    desc: 'Research, Brand Audit, Logo Design, and Brand Experience Development',
    icon: Icon3,
    bg: '#FFBC01',
  },
  {
    number: '04.',
    title: 'Illustrations',
    desc: 'Research, Brand Audit, Logo Design, and Brand Experience Development',
    icon: Icon4,
    bg: '#FFFAF7',
    extraClass: 'last-service',
  },
];

const ServicesSection = () => {
  const [isSliderView, setIsSliderView] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsSliderView(window.innerWidth < 992); // use slider for < 992px
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSlidesToShow = () => {
    if (windowWidth < 768) return 1;     // mobile
    if (windowWidth < 992) return 2;     // tablet
    return 4;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    arrows: false,
  };

  const renderCard = (service, index) => (
    <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="p-2">
      <div className="p-4 h-100 rounded card-hover" style={{ backgroundColor: service.bg, color: '#000' }}>
        <img src={service.icon} alt="icon" style={{ marginBottom: '6rem' }} />
        <p className="mb-1" style={{ fontSize: '20px' }}>{service.number}</p>
        <p
          className={`service-title ${service.extraClass || ''}`}
          style={{
            fontSize: '32px',
            fontWeight: '400',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {service.title}
        </p>
        <hr style={{ borderTop: '1px solid #000', opacity: 0.7 }} />
        <p style={{ fontSize: '20px', fontFamily: 'Poppins, sans-serif' }} className="last-p">
          {service.desc}
        </p>
      </div>
    </div>
  );

  return (
    <section className="ServiceCard text-white">
      <div className="custom-container">
        <p className="mb-5 font-24 para">Services I offer:</p>
        {isSliderView ? (
          <Slider {...sliderSettings}>
            {services.map(renderCard)}
          </Slider>
        ) : (
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                {renderCard(service, index)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
