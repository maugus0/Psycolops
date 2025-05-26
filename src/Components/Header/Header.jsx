import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/Images/logo.png";
import ResposiveIcon from "../../Assets/Images/responsive_icon.svg"
import Experimental from "../../Assets/Images/experimental.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <a href="https://psycolops.in/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={ResposiveIcon} alt="" />
      </button>

      <nav className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <a href="https://psycolops.in/" className="only-mobile">HOME</a>
        <a href="/#about-page">ABOUT</a>
        <a href="/#work-page">WORK</a>
        <a href="/#gallery-page">GALLERY</a>
        <a href="/#404-page" className="experimental-link">
          <img src={Experimental} alt="" className="experimental-img" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
