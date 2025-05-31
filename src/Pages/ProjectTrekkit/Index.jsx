import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import ProjectBrief from '../../Components/ProjectBrief/Project';
import TrekkitVideo from '../../Assets/Video/terkkit-video.mp4';
import Concept from '../../Components/Concept/Concept';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import Footer from '../../Components/Footer/Footer';
import TrekkitBanner from '../../Assets/Images/trekkit-banner.png';
import TrekitImg1 from '../../Assets/Images/trekkit-img-1.png';
import TrekitImg2 from '../../Assets/Images/Treekit-img-2.png';
import Feature from '../../Components/Feature/Index';
import MobileSlider from '../../Components/MobileSlider';
import MobileShowcase from '../../Components/MobileShowCase';
import Shoeimage1 from '../../Assets/Images/shoe-img-1.png';
import Showimage2 from '../../Assets/Images/shoe-img-2.png';
import Trek1 from '../../Assets/Images/trek-1.png';
import Trek2 from '../../Assets/Images/trek-2.png';
import Trek3 from '../../Assets/Images/trek-3.png';
import TrekkitMobile from '../../Assets/Images/trekkit-mobile-image.png';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectMindSet = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const leftContent = (
    <div data-aos="fade-up">
      <div className="mb-4 role-p">
        <h5>Nature of Project</h5>
        <p>Academic Project</p>
      </div>
      <div className='role-p'>
        <h5>Roles:</h5>
        <p>Research</p>
        <p>Comp-Study</p>
        <p>Wireframe</p>
        <p>Interface Design</p>
        <p>Prototyping</p>
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
        The process of planning treks can be quite intimidating - from choosing
        the right trek to finding the right group.
      </p>
      <p>
        A lot of apps and websites offer pre-planned services, but their
        planning system is often rigid. Trips cannot be customized to users’
        preferences - you cannot select leaders, group members, dates, etc.
        Existing apps also offer fewer options in terms of types of groups
        (youth hostels, solo travelers, etc.)
      </p>
      <p>
        Trekkit is a super app that takes care of all trekking essentials by
        offering a flexible and seamless experience.
      </p>
    </div>
  );

  return (
    <div className="trekkit-page">
      <Header />
      <Banner
        subtitle={
          <>
            <span style={{ color: '#BEB8EB' }}>TREKKIT </span> | APPLICATION DESIGN
          </>
        }
        title={`Making the process of planning<br /> treks more intuitive.`}
        imageSrc={TrekkitBanner}
        imageAlt="Trekkit visual"
        textAnimation="fade-up"
        imageAnimation="fade-up"
      />
      <ProjectBrief left={leftContent} right={rightContent} delay={200} />
      <video
        src={TrekkitVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: 'auto'}}
      />

      <Concept
        title="Concept"
        heading={[
          'Enjoy a seamless experience tailored to all kinds of trekkers.',
        ]}
        image={TrekitImg2}
        imageAlt="Trekkit concept visual"
        paragraphs={conceptParagraphs}
        imageAnimation="fade-up"
        textAnimation="fade-up"
        imageDelay={0}
        textDelay={200}
        aosDuration={1200}
      />

      <div>
        <Feature />
      </div>

      <div>
        <MobileSlider />
      </div>

      <div>
        <MobileShowcase />
      </div>

      <div className="shoe-class">
        <div className="custom-container">
          <div className="row">
            <div
              className="col-md-6 text-center shoe-class-1"
              data-aos="fade-up"
            >
              <p className="shoe-para">
                Connect with camp mates <br />
                through in-app group chats.
              </p>
              <img
                src={Shoeimage1}
                alt="Shoe mockup 1"
                className="shoe-1"
              />
            </div>
            <div
              className="col-md-6 text-center shoe-class-2"
              data-aos="fade-up"
            >
              <img
                src={Showimage2}
                alt="Shoe mockup 2"
                className="shoe-2"
              />
              <p className="shoe-para-2">
                Buy or Rent gear from local <br />
                shops thorough in-app store.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="trekkit-section" data-aos="fade-up">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="100">
              <img src={Trek1} alt="Meet trekkers" className="shoe-3" />
              <p className="font-24 color-black text-center pt-4">
                Meet other trekkers and <br />outdoor enthusiasts
              </p>
            </div>
            <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="300">
              <img src={Trek2} alt="Book leaders" className="shoe-3" />
              <p className="font-24 color-black text-center pt-4">
                Connect and book <br />camp leaders in-app
              </p>
            </div>
            <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="500">
              <img src={Trek3} alt="Join community" className="shoe-3" />
              <p className="font-24 color-black text-center pt-4">
                Be part of a community <br />with a love for the outdoors
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-container" data-aos="fade-up">
        <img
          src={TrekkitMobile}
          alt="Trekkit mobile UI"
          className="trek-mobile"
        />
      </div>

      <div data-aos="fade-up">
        <ProjectSlider />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectMindSet;
