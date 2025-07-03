import React from "react";
import './Footer.css'
import Experimental from "../../Assets/Images/experimental.png"

const Footer = () => {
    return (
        <footer>
            <h3 className="font-74 color-white">LETS BUILD SOMETHING COOL TOGETHER :)</h3>
            <div className="footer-link">
                  <a href="/#about-page">ABOUT</a>
                <a href="/#work-page">WORK</a>
                <a href="/#gallery-page">GALLERY</a>
                <a href="/#404-page" className="experimental-link">
                    <img src={Experimental} alt="" className="experimental-img" />
                </a>
            </div>
            <div className="footet-social">
                <h5 className="color-purple font-36">Contact</h5><br/>
                <a href="https://www.instagram.com/psycolops/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/in/kumar-yashvardhan-8aa421258/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:yash.vardhan.im@gmail.com" target="_blank" rel="noopener noreferrer">GMail</a>
                <a href="https://www.behance.net/yashvardhan2" target="_blank" rel="noopener noreferrer">Behance</a>
            </div>
        </footer>
    );
};

export default Footer;
