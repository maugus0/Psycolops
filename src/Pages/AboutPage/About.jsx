import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import DownloadResume from '../../Components/DownloadResume/DownloadResume';
import GreyImage from '../../Assets/Images/grey-img.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import BrandWorkHighlights from '../../Components/WorkExperience';
import ProjectSlider from '../../Components/ProjectSlider/Projectslider';
import ServicesSection from '../../Components/ServiceCard/ServiceCard';
import BlankSlider from '../../Components/BlankSlider/index.jsx';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='about-page'>
            <Header />
            <DownloadResume />
            <div className="about-resume"> 
                <div className="custom-container">
                    <div className='row'>
                        <div className="col-md-8 grey-content padding-right-70">
                            <p>I’m drawn to everything visual and obsessed with storytelling that leaves a mark. I love experimenting across mediums - 2D, 3D, motion, interactive- not just to create eye-catching work, but to build systems that are consistent, thoughtful, and adaptable. Whether I’m designing a brand, an interface, or a visual experience, I care about how it looks and how it works — making sure it feels intuitive, seamless, and purposeful.</p>
                            <p className='pb-5'>I believe good design should be invisible - guiding without shouting - but also grab your attention the moment it needs to. I approach each project with curiosity, intent, and a bit of chaos (the good kind).</p>
                            <p>I’m drawn to everything visual and obsessed with storytelling that leaves a mark. I love experimenting across mediums - 2D, 3D, motion, interactive- not just to create eye-catching work, but to build systems that are consistent, thoughtful, and adaptable. Whether I’m designing a brand, an interface, or a visual experience, I care about how it looks and how it works — making sure it feels intuitive, seamless, and purposeful.</p>
                            <p>I believe good design should be invisible - guiding without shouting - but also grab your attention the moment it needs to. I approach each project with curiosity, intent, and a bit of chaos (the good kind).</p>
                        </div>
                        <div className="col-md-4">
                            <img src={GreyImage} alt="" className='greyimg' />
                        </div>
                    </div>
                </div>
            </div>
            <BrandWorkHighlights />
            <BlankSlider />
            <ServicesSection />
            <ProjectSlider />
            <Footer />
        </div>
    );
};

export default About;
