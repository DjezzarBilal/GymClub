import React from "react";
import "./footer.css";
import instgram from "./../../../assets/instagram.png";
import linkden from "./../../../assets/linkedin.png";
import github from "./../../../assets/github.png";
import logo from "./../../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="social-icon">
        <img src={instgram} alt="" />
        <img src={github} alt="" />
        <img src={linkden} alt="" />
      </div>

      <div className="logo-i">
        <img src={logo} alt="" />
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
