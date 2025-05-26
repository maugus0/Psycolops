import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projectslider.css';

import ProjectSlider1 from '../../Assets/Images/project1.png';
import ProjectSlider2 from '../../Assets/Images/project2.png';
import ProjectSlider3 from '../../Assets/Images/project3.png';
import ProjectSlider4 from '../../Assets/Images/project4.png';
import RightArrowImage from '../../Assets/Images/RightArrowImage.png';

const projects = [
  {
    title: "Bal Raksha Bharat",
    type: "Branding",
    description: "Rebranding Bal Raksha Bharat to reposition it as an optimistic, future-forward child rights NGO.",
    image: ProjectSlider1,
    link: "/#bal-raksha"
  },
  {
    title: "Trekkit",
    type: "UI/UX",
    description: "Rebranding Bal Raksha Bharat to reposition it as an optimistic, future-forward child rights NGO.",
    image: ProjectSlider2,
    link: "/#trekkit-page"
  },
  {
    title: "Mindshare",
    type: "Branding",
    description: "Designing an identity that reflects collaboration, connection, and possibility.",
    image: ProjectSlider3,
    link: "/#project-mindset"
  },
  {
    title: "The School of Raya",
    type: "Branding",
    description: "Branding pitch for an international IB school in Bengaluru, reflecting themes of nature and flow.",
    image: ProjectSlider4,
    link: "/#raya-page"
  },
];

const ProjectSlider = () => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="position-slider px-8 py-10 all-slider project-slider">
      <div className="custom-container">
        <h4 className="color-purple">See more work:</h4>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={
            isMobile
              ? {
                  clickable: true,
                  dynamicBullets: false,
                }
              : false
          }
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <a href={project.link} className="text-decoration-none">
                <div className="bg-[#1a1a1a] p-4 rounded-xl text-white h-full custom-padding">
                  <div className="rounded-lg overflow-hidden mb-4 h-60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover custom-size"
                    />
                  </div>
                  <h3 className="slider-heading">
                    <span className="subtitle"></span> {project.title}{' '}
                    <span className="grey-text">({project.type})</span>
                  </h3>
                  <p className="color-grey">{project.description}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="custom-arrow-button d-none d-md-block"
        >
          <img src={RightArrowImage} alt="Next" className="custom-icon w-auto" />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
