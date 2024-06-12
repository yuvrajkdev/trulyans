import React from 'react';
import './Footer.css';
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                {/* Wrap each social media icon with an anchor tag */}
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/dinesh._.gaikwad?igsh=MWp4eTl5dDdnMjkwYw==" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/dinesh-gaikwad-777917269" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
            </div>
            <div className="logo-f">
                <img src={Logo} alt="Logo" />
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
