import "../styles/contactUs.css";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaDribbble, FaBehance, FaPhone, FaEnvelope } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";


const ContactUs = () => {
  return (
    <section className="contactUsMain">
      <div className="contactSec1">
        <div className="sec1Content1">
          <div className="sec1Content1Text">Feel free to conect <br /> with us !</div>
          <div className="sec1Content1Icon">
            <div className="icons">
              <RiTwitterXLine className="socialIcon" />
            </div>
            <div className="icons">
              <FaInstagram className="socialIcon" />
            </div>
            <div className="icons">
              <FaDribbble className="socialIcon" />
            </div>
            <div className="icons">
              <FaBehance className="socialIcon" />
            </div>
          </div>
        </div>

        <div className="sec1Content2">
          <div className="contactDetails">
            <div className="contactDetailsIcon">
              <FaPhone className="contactIcon" />
              <h6>0972 663 633</h6>
            </div>
          </div>
          <div className="contactDetails">
            <div className="contactDetailsIcon">
              <FaEnvelope className="contactIcon" />
              <h6>hello@wefo.com</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="contactSec2">
        <div className="contactSec2Form">
          <div className="name">
            <label htmlFor="name">
              Name <span className="redStar">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="custom-input-common"
            />
          </div>
          <div className="email">
            <label htmlFor="email">
              Email <span className="redStar">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="custom-input-common"
            />
          </div>
          <div className="message">
            <label htmlFor="message">
              Message <span className="redStar">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              className="custom-input"
            ></textarea>
          </div>
        </div>

        <div className="contactSec2Button">
          Send
          <div className="sendicon">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
