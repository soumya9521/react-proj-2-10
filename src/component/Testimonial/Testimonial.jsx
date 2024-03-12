import React from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon - Copy.png";
import back_icon from "../../assets/back-icon - Copy.png";
import user_1 from "../../assets/user-1 - Copy.png";
import user_2 from "../../assets/user-2 - Copy.png";
import user_3 from "../../assets/user-3 - Copy.png";
import user_4 from "../../assets/user-4 - Copy.png";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <img src={next_icon} alt="" className="next-btn" />
      <img src={back_icon} alt="" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <p>Educity, USA</p>
                </div>
              </div>
              <p>
                A university is an institution of higher education and research
                that grants academic degrees in various subjects and
                disciplines. It serves as a hub for intellectual exploration,
                fostering a rich environment for learning, critical thinking,
                and personal development.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <p>Educity, USA</p>
                </div>
              </div>
              <p>
                A university is an institution of higher education and research
                that grants academic degrees in various subjects and
                disciplines. It serves as a hub for intellectual exploration,
                fostering a rich environment for learning, critical thinking,
                and personal development.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <p>Educity, USA</p>
                </div>
              </div>
              <p>
                A university is an institution of higher education and research
                that grants academic degrees in various subjects and
                disciplines. It serves as a hub for intellectual exploration,
                fostering a rich environment for learning, critical thinking,
                and personal development.{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <p>Educity, USA</p>
                </div>
              </div>
              <p>
                A university is an institution of higher education and research
                that grants academic degrees in various subjects and
                disciplines. It serves as a hub for intellectual exploration,
                fostering a rich environment for learning, critical thinking,
                and personal development.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
