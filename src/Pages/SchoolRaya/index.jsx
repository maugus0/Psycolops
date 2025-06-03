import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer';
import RayaBanner from '../../Assets/Images/Raya-banner.png';
import Image from '../../Components/Image/Image';
import RayaVideo from '../../Assets/Video/video-school.mp4'
import Raya1 from '../../Assets/Images/Raya-img-1.png';
import Raya2 from '../../Assets/Images/Raya-img-2.png';
import Raya3 from '../../Assets/Images/Raya-img-3.png';
import Raya4 from '../../Assets/Images/Raya-img-4.png';
import Raya5 from '../../Assets/Images/Raya-img-5.png';
import Raya6 from '../../Assets/Images/Raya-img-6.png';
import Raya7 from '../../Assets/Images/Raya-img-7.png';
import Raya8 from '../../Assets/Images/Raya-img-8.png';
import Raya9 from '../../Assets/Images/Raya-img-9.png';
import Raya10 from '../../Assets/Images/Raya-img-10.png';
import Raya11 from '../../Assets/Images/Raya-img-11.png';
import Raya12 from '../../Assets/Images/Raya-img-12.png';



import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectRaya = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const leftContent = (
    <div data-aos="fade-right">
      <div className="mb-4">
        <h5>Nature</h5>
        <p>Pitched to Client<br />
          (Internship @Clay Design Strategy)</p>
      </div>
      <div>
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
    <div data-aos="fade-lef">
      <h4>Brief:</h4>
      <p>
        The School of Raya is an International Board school based in Bangalore. The word "Raya" means flow in Sanskrit, and the brief was to create an identity that showcases the idea of flow. The school was found with the belief that every child has their own flow, and the aim of the school is to help these children find and nurture their talents in all spheres of life.  For this purpose, the structure of the school is open with a lot of vegetation.
      </p>
    </div>
  );

  return (
    <div className="school-raya-page">
      <Header />
      <Banner
        subtitle={
          <>
            <span style={{ color: '#BEB8EB' }}>THE SCHOOL OF RAYA</span> | LOGO AND BRANDING
          </>
        }
        title={`Creating an Identity that Embodies Flow, Growth, and Holistic Learning.`}
        imageSrc={RayaBanner}
        imageAlt="Trekkit visual"
        textAnimation="fade-up"
        imageAnimation="fade-down"
      />
      <ProjectBrief left={leftContent} right={rightContent} delay={200} />

      <div className='balraksha-concept'>
        <div className="custom-container">
          <p class="font-24 concept-line aos-init aos-animate" data-aos="fade-down">Concept</p>
          <div className="row">
            <div className="col-md-6">
              <img src={Raya2} alt="" className='fan-pic' />
            </div>
            <div className="col-md-6">
              <div className='d-flex fan-p font-24 weight-300'>
                <p>The logo represents the school’s philosophy of <strong>flow</strong> and <strong>structuredgrowth</strong> . It is a minimal design with three semi circular forms that come together
                  in motion mimicking a sine wave, symbolising movement, learning and progress. These forms stand in for a mountain, water and the sun, they come
                  together to show nature’s effortless balance as well as the school’s three pillars: <strong>Enable </strong> (a strong foundation),<strong> Empower</strong> (adaptability and growth),
                  and <strong> Awaken </strong>(clarity and vision). The design reflects the students’ journey in the school, finding their own rhythm, overcoming challenges and rising
                  to their full potential.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="raya-collage">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-12 padding-bottom-60">
              <img src={Raya3} alt="" />
            </div>
            <div className="col-md-6 padding-bottom-60">
              <img src={Raya4} alt="" />
            </div>
            <div className="col-md-6 padding-bottom-60">
              <video
                src={RayaVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="col-md-12 padding-bottom-60">
              <img src={Raya6} alt="" />
            </div>
            <div className="col-md-8 padding-bottom-60">
              <img src={Raya7} alt="" />
            </div>
            <div className="col-md-4 padding-bottom-60">
              <img src={Raya8} alt="" />
            </div>
            <div className="col-md-6 padding-bottom-60">
              <img src={Raya9} alt="" />
            </div>
            <div className="col-md-6 padding-bottom-60">
              <img src={Raya10} alt="" />
            </div>
            <div className="col-md-12 padding-bottom-60">
              <img src={Raya11} alt="" />
            </div>
            <div className="col-md-8 padding-bottom-60">
              <img src={Raya12} alt="" />
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

export default ProjectRaya;
