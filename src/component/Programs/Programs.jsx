import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1 - Copy.png";
import program_2 from "../../assets/program-2 - Copy.png";
import program_3 from "../../assets/program-3 - Copy.png";
import program_icon_1 from "../../assets/program-icon-1 - Copy.png";
import program_icon_2 from "../../assets/program-icon-2 - Copy.png";
import program_icon_3 from "../../assets/program-icon-3 - Copy.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduaton </p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Post Graduation </p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Doctorate</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
