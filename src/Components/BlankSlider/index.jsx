import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

import Collage2 from '../../Assets/Images/gallery-images/gallery-2.png';
import Collage3 from '../../Assets/Images/gallery-images/gallery-3.png';
import Collage4 from '../../Assets/Images/gallery-images/gallery-4.png';
import Collage7 from '../../Assets/Images/gallery-images/gallery-7.png';
import Collage9 from '../../Assets/Images/gallery-images/gallery-9.png';
import GalleryImage from '../../Assets/Images/gallery-img.png';
import LeftArrowImage from '../../Assets/Images/LeftArrowImage.png';
import RightArrowImage from '../../Assets/Images/RightArrowImage.png';

const BlankSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const images = [Collage2, Collage3, Collage4, Collage7, Collage9];

  useEffect(() => {
    setSwiperReady(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className='blank-slider'>
      <h3 className='text-center font-52 mt-60'>
        When I’m not working, I like to explore new mediums.
      </h3>
      <div className="custom-container">
        <div className="blank-slider-wrapper">
          {!isMobile && (
            <img
              src={LeftArrowImage}
              alt="Previous"
              className="custom-arrow left-arrow"
              ref={prevRef}
            />
          )}

          <div className="blank-slider-container">
            {swiperReady && (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={3}
                loop
                navigation={
                  !isMobile
                    ? {
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                      }
                    : false
                }
                pagination={
                  isMobile
                    ? { clickable: true, el: '.custom-swiper-pagination' }
                    : false
                }
                onBeforeInit={(swiper) => {
                  if (!isMobile) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {images.map((imageSrc, index) => (
                  <SwiperSlide key={index}>
                    <div className={`blank-card ${index === 0 ? 'left-shadow' : index === images.length - 1 ? 'right-shadow' : ''}`}>
                      <img
                        src={imageSrc}
                        alt={`Slide ${index + 1}`}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            {isMobile && <div className="custom-swiper-pagination" />}
          </div>

          {!isMobile && (
            <img
              src={RightArrowImage}
              alt="Next"
              className="custom-arrow right-arrow"
              ref={nextRef}
            />
          )}
        </div>

        <div className='d-flex justify-content-center align-items-center mb-60 flex-direction'>
          <h4 className='font-52'>See my work in the</h4>
          <a href="#gallery-page" className='text-center image-left'> <img src={GalleryImage} alt="" className='gallery-img' /></a>
        </div>
      </div>
    </div>
  );
};

export default BlankSlider;
