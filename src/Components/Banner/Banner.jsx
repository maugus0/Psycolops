// src/components/BannerSection.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';

const Banner = ({
  subtitle,
  title,
  imageSrc,
  imageAlt = '',
  textAnimation = 'fade-up',
  imageAnimation = 'fade-up',
  reverse = false, // optional: reverse layout
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={`banner-section ${reverse ? 'reverse' : ''}`}>
      <div className="custom-container">
      <div className="banner-text mindshare-text" data-aos={textAnimation}>
        <p className="subtitle">{subtitle}</p>
        <h1 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
       </div>
      <div className="banner-image mindshare-image" data-aos={imageAnimation}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
     
    </section>
  );
};

export default Banner;
