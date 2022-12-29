import React, { useContext } from "react";
import "./Portfolio.css";
import "swiper/css";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
    <div>
      <span className="education" id="education" style={{color: darkMode?'white': ''}}>Education</span>
    </div>
    <div className="portfolio" id="portfolio">
      <div className="box">
        <div className="box-content">
            <span className="class" style={{color: darkMode?'white': ''}}>Intern at the10X Academy</span><br />
            <span className="class" style={{color: darkMode?'white': ''}}>Full Stack</span><br />
            <span style={{color: darkMode?'white': ''}}></span><br />
        </div>
      </div>
     
      <div className="box-1">
        <div className="box1-content">
          <span className="class" style={{color: darkMode?'white': ''}}>Bachelor of Technology</span><br />
          <span className="class"style={{color: darkMode?'white': ''}}>Mechanical</span><br />
          <span style={{color: darkMode?'white': ''}}>57.8%</span>
        </div>
      </div>
       
      <div className="box-2">
        <div className="box2-content">
          <span className="class" style={{color: darkMode?'white': ''}}> Board of Intermediate Education</span><br />
          <span className="class" style={{color: darkMode?'white': ''}}>MPC</span><br />
          <span style={{color: darkMode?'white': ''}}>79.7%</span>
        </div>
      </div>

        
    </div></>
  );
};

export default Portfolio;
