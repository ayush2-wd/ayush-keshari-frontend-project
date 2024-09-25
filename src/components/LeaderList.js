import PropTypes from "prop-types";
import "../styles/leaderList.css";
import { LiaInstagram } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";


const LeaderList = ({ bgc, color, name, position }) => {
  return (
    <div className="leaderListMain" style={{ backgroundColor: bgc }}>
      <div className="content" style={{ backgroundColor: color }}>
        <div className="content1">
          <h3>{name}</h3>
          <p className="none">{position}</p>
        </div>
        <div className="content2">
          <div className="iconss">
            <RiTwitterXLine style={{color: "white", fontSize:"15px"}}/>
          </div>
          <div className="iconss">
            {" "}
            <LiaInstagram style={{color: "white", fontSize:"20px"}}/>
          </div>
          <div className="iconss">
            {" "}
            <TiSocialLinkedin style={{color: "white", fontSize:"20px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

LeaderList.propTypes = {
  color: PropTypes.string.isRequired,
  bgc: PropTypes.string.isRequired,
};

export default LeaderList;