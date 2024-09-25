import PropTypes from "prop-types";
import "../styles/servicesList.css";
import arrowimg from "../assests/Frame 55.png";

const ServicesList = ({ color1, color2, text }) => {
  return (
    <div
      className="serviceListMain"
      style={{ backgroundColor: color1, color: color2 }}
    >
    <div className="serviceListHeader">
      <div className="serviceListText1">
        {text === "ui/ux design" ? (
          <div>
            ui/ux <br /> design
          </div>
        ) : (
          text
        )}
      </div>
      <img src={arrowimg} alt="arrow icon" className="arrowIcon" />
        </div>
      <div className="serviceListText2">
        We provide digital solutions as Website Design, Mobile App Design,
        Landing Page design, Illustration, Animation, etc that increase
        company’s values
      </div>
    </div>
  );
};


ServicesList.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServicesList;