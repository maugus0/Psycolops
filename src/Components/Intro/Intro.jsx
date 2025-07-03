import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerFace from '../../Assets/Images/Banner-Face.png';
import './Intro.css';
import YashResume from '../../Assets/pdf/yash-cv.pdf';

const IntroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);

    return (
        <section className="Introsection">
            <div className="custom-container">
            <div className="color-white">
                <div className="row align-items-center">
                    {/* Text Column */}
                    <div className="col-md-7" data-aos="fade-up">
                        <h3 className="hero-heading mb-5">
                            Hello, I am Yash 🤓. I am a Visual Designer based in New Delhi, India. Graphic design is my passion 🙏. I do creative branding with punchy visuals 💥 which are sure to capitivate people 👀
                        </h3>
                        <div className="hero-buttons d-flex gap-4 mt-4 desktop-show">
                             <a href={YashResume} download> <button className="grey-button font-16">Download Resume</button></a>
                            <a href="/#about-page"><button className="orange-button font-16">See About Me</button></a>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    {/* Image Column */}
                    <div className="col-md-4 hero-img text-end" data-aos="fade-up">
                        <img src={BannerFace} alt="Hero Illustration" className="img-fluid" />
                        <div className="hero-buttons d-flex gap-4 mt-4 mobile-show">
                             <a href={YashResume} download> <button className="grey-button font-16">Download Resume</button></a>
                            <a href="/#about-page"><button className="orange-button font-16"> About Me</button></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
