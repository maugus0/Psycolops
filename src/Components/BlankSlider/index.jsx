import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

// Video imports
import Video3 from '../../Assets/Video/video-3.mp4';
import Video4 from '../../Assets/Video/video-4.mp4';
import Video6 from '../../Assets/Video/video-6.mp4';
import Video7 from '../../Assets/Video/video-7.mp4';
import Video8 from '../../Assets/Video/video-8.mp4';

// Image assets
import GalleryImage from '../../Assets/Images/gallery-img.png';
import LeftArrowImage from '../../Assets/Images/LeftArrowImage.png';
import RightArrowImage from '../../Assets/Images/RightArrowImage.png';

const BlankSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const videos = [Video3, Video4, Video6, Video7, Video8];

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
                {videos.map((videoSrc, index) => (
                  <SwiperSlide key={index}>
                    <div className={`blank-card ${index === 0 ? 'left-shadow' : index === videos.length - 1 ? 'right-shadow' : ''}`}>
                      <video
                        src={videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
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
          <a href="#gallery-page" className='text-center image-left'>
            <img src={GalleryImage} alt="Gallery" className='gallery-img' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlankSlider;
