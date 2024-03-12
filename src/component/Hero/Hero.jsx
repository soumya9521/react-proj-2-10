import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow - Copy.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure bettter education for a better world</h1>
        <p>
          Our cutting edge curriculum is designed to empower students with the
          knowledge, skills, and experience needed to excell in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
