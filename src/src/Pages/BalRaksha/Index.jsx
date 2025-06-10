import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import Image from '../../Components/Image/Image';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer';
import BalRakshaBaner from '../../Assets/Images/Bal-raksha-banner.png';
import BalrakshaGrey from '../../Assets/Images/Balraksha-grey-banner.png';
import FanPic from '../../Assets/Images/fan-pic.png';
import Fan1 from '../../Assets/Images/fan-1.png';
import Fan2 from '../../Assets/Images/fan-2.png';
import Fan3 from '../../Assets/Images/fan-3.png';
import Fan4 from '../../Assets/Images/fan-4.png';
import Video1 from '../../Assets/Video/bal-video-3.mp4';
import Video2 from '../../Assets/Video/bal-video-2.mp4';
import Video3 from '../../Assets/Video/bal-video-1.mp4';

import './Index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BalRakshaImg1 from '../../Assets/Images/bal-raksha-1.png';
import BalRakshaImg2 from '../../Assets/Images/bal-raksha-2.png';
import BalRakshaImg3 from '../../Assets/Images/bal-raksha-3.png';
import BalRakshaImg4 from '../../Assets/Images/bal-raksha-4.png';
import BalRakshaImg5 from '../../Assets/Images/bal-raksha-5.png';
import BalRakshaImg6 from '../../Assets/Images/bal-raksha-6.png';
import BalRakshaImg8 from '../../Assets/Images/BalRakshaImg8.png';


const ProjectMindSet = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const leftContent = (
    <div data-aos="fade-up">
      <div className="mb-4">
        <h5>Nature</h5>
        <p className='role-up'>Pitched to Client</p>
        <p><em>(Internship @Clay Design Strategy)</em></p>
      </div>
      <div className='role-p'>
        <h5>Roles:</h5>
        <p>Research </p>
        <p>Logo Design</p>
        <p>Visual Design</p>

      </div>
    </div>
  );

  const conceptParagraphs = [
    `Introducing Trekkit, designed to enhance your outdoor adventures! Discover upcoming treks from hostels and agencies. Easily find or create trekking groups based on your preferences and connect with like-minded adventurers. Support local businesses by renting or buying gear nearby.`,
  ];

  const rightContent = (
    <div data-aos="fade-up">
      <h4>Brief:</h4>
      <p>
        This project was one of the few routes presented to Bal Raksha Bharat for their rebranding, done in 2022 by Clay Design Strategy
        (Mumbai). This was part of work I did as internship at Clay Design.
      </p>
      <p>
        The goal for this re-branding was to look like a more Indian NGO (It being the Indian brand of Save the Children International)
        and create visuals that resonate more with the people. They wanted an identity that is distinctive and optimistic, to be used
        seamlessly in their campaigns throughout the country.
      </p>
    </div>
  );

  return (
    <div className="bal-raksha-page">
      <Header />
      <Banner
        subtitle={
          <>
            <span style={{ color: '#BEB8EB' }}>BAL RAKSHA BHARAT</span> | LOGO AND BRANDING
          </>
        }
        title={`An Identity that Embodies Holistic <br/>Development and Child Rights Protection.`}
        imageSrc={BalRakshaBaner}
        imageAlt="Trekkit visual"
        textAnimation="fade-up"
        imageAnimation="fade-up"
      />
      <ProjectBrief left={leftContent} right={rightContent} delay={200} />
      <div className="custom-container backgound-grey">
        <div className="col-md-12">
          <video
            src={Video1}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '70%' }}
            className='video-1'
          />
        </div>
      </div>
      <div className='balraksha-concept'>
        <div className="custom-container">
          <p class="font-24 concept-line aos-init aos-animate" data-aos="fade-up">Concept</p>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src={FanPic} alt="" className='fan-pic' />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className='d-flex fan-p font-24 weight-300'>
                <p>The pinwheel, a universal symbol of childhood, embodies the joy, innocence, and limitless potential of
                  every child. Its playful nature reflects the optimism and positivity that Bal Raksha Bharat stands for while also representing change. </p>
                <p> The pinwheel is designed to be a recognizable symbol of child protection and advocacy. It reflects a collective
                  commitment to safeguarding children and empowering them to grow in safe, supportive environments.</p>
              </div>
              <div className='fan-sub' >
                <div>
                  <img src={Fan1} alt="" />
                  <p>Education</p>
                </div>
                <div>
                  <img src={Fan2} alt="" />
                  <p>Protection</p>
                </div>
                <div>
                  <img src={Fan3} alt="" />
                  <p>Nutrition<br /> & Health</p>
                </div>
                <div>
                  <img src={Fan4} alt="" />
                  <p>Inclusion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bal-raksha-collage">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-12 margin-bottom-80">
              <img src={BalRakshaImg1} alt="" />
            </div>
            <div className="col-md-6 margin-bottom-80">
              <video
                src={Video3}
                autoPlay
                loop
                muted
                playsInline
                style={{ borderRadius: '20px' }}
                className='taptop-device'
              />
            </div>
            <div className="col-md-6 margin-bottom-80">
              <img src={BalRakshaImg3} alt="" />
            </div>
            <div className="col-md-12 margin-bottom-80">
              <img src={BalRakshaImg4} alt="" />
            </div>
            <div className="col-md-8 mb-4">
              <img src={BalRakshaImg5} alt="" className='h-100' />
            </div>
            <div className="col-md-4 mb-4">
              <img src={BalRakshaImg6} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='balraksha-concept installation'>
        <div className="custom-container">
          <p class="font-24 concept-line-1 aos-init aos-animate" data-aos="fade-up">Installations</p>
          <div className="row">
            <div className="col-md-8">
              <video
                src={Video1}
                autoPlay
                loop
                muted
                playsInline
                style={{ borderRadius: '8px' }}
                className='video-mobile'
              />
            </div>
            <div className="col-md-4">
              <div className=' fan-p font-20 weight-300  small-font bal-raksha-content'>
                <p>Bal Raksha Bharat’s Impact Installations are permanent, meaningful artworks placed in corporate or public spaces-serving as both symbols of support and ongoing reminders of the promise to protect every child.</p>
                <p>Created in collaboration with children- using handcrafted elements like paper cranes representing the number of lives impacted- these installations are designed to be displayed in places like reception areas, campuses, or common spaces. They act as powerful landmarks that celebrate partnership and purpose.</p>
                <p>More than just art, they offer partner organizations a way to showcase their commitment to child rights in a form that’s visible, emotional, and enduring.</p>
              </div>
            </div>
            <div className="col-md-12">
              <video
                src={Video2}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                className='video-2'
              />
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <ProjectSlider />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectMindSet;
