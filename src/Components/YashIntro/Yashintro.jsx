import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Yashintro.css'; 
import BannerFace from '../../Assets/Images/Banner-Face.png';
import BannerIcon from '../../Assets/Images/banner-icon.png';


const YashIntro = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,   // Animation duration
            once: true,       // Animation only once on scroll
        });
    }, []);

    return (
        <>
            <div className="yash-intro text-center">
                <img
                    src={BannerFace}
                    alt=""
                    className='banner-face'
                    data-aos="fade-up"
                    data-aos-delay="200"
                />
                <h1
                    className='font-52 mb-4 mt-4'
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    *Designs experiences with emphasis on visual design strategies & systems
                </h1>
                <img
                    src={BannerIcon}
                    alt="Scroll down"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    style={{ cursor: 'pointer', animation: 'bounce 2s infinite' }}
                    onClick={() => {
                        document.getElementById('next-project')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                />
            </div>
        </>
    );
};

export default YashIntro;
