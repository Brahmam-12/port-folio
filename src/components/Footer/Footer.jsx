import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Brahmamanumukonda000@gmail.com</span>
        <span>+91 8919022059</span>
        <div className="f-icons">
        <a href="https://github.com/Brahmam-12"><Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/brahmam-anumukonda-4a3801163/"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://www.instagram.com/brahmam_05/"><Insta color="white" size={"3rem"} /></a>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
