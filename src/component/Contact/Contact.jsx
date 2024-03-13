import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon - Copy.png";
import mail_icon from "../../assets/mail-icon - Copy.png";
import phone_icon from "../../assets/phone-icon - Copy.png";
import location_icon from "../../assets/location-icon - Copy.png";
import white_arrow from "../../assets/white-arrow - Copy.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below.Your feeedback, questions, and suggestion are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@greetstack.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91 6372645364
          </li>
          <li>
            <img src={location_icon} alt="" />
            Ameerpet, 500021, Hyderabad, Telengana, India{" "}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>sending...</span>
      </div>
    </div>
  );
};

export default Contact;
