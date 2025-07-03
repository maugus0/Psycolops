import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Image.css';

const Image = ({ src, alt = "Image", animation = "zoom-in", className = "", duration = 1000 }) => {
  useEffect(() => {
    AOS.init({ duration });
  }, [duration]);

  return (
    <div className={`full-width ${className}`} data-aos={animation}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
