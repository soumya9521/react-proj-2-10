import React from "react";
import "./Campus.css";
import gallary_1 from "../../assets/gallery-1 - Copy.png";
import gallary_2 from "../../assets/gallery-2 - Copy.png";
import gallary_3 from "../../assets/gallery-3 - Copy.png";
import gallary_4 from "../../assets/gallery-4 - Copy.png";
import white_arrow from "../../assets/white-arrow - Copy.png";
const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallary_1} alt="" />
        <img src={gallary_2} alt="" />
        <img src={gallary_3} alt="" />
        <img src={gallary_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more Here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
