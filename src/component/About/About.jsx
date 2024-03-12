import React from "react";
import "./About.css";
import about_img from "../../assets/gallery-3 - Copy.png";
import play_icon from "../../assets/play-icon - Copy.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          A university is an institution of higher education and research that
          grants academic degrees in various subjects and disciplines. It serves
          as a hub for intellectual exploration, fostering a rich environment
          for learning, critical thinking, and personal development.{" "}
        </p>
        <p>
          A university is an institution of higher education and research that
          grants academic degrees in various subjects and disciplines. It serves
          as a hub for intellectual exploration, fostering a rich environment
          for learning, critical thinking, and personal development.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
