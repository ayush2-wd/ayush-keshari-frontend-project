import React from 'react'
import '../styles/InitialHero.css'
import { MdArrowOutward } from "react-icons/md";
import lightimg from "../assests/Frame 125.png";
import supimg from "../assests/Ellipse 47 (1).png";

const InitialHero = () => {
  return (
    <div>   
      <div className="hero-section">
        <div className="hero-content">
          <h1>We create award <br /> winning website</h1>
          <br />
          <p>
            Based in San Francisco, we’re a digital products design & development studio
            that is passionate about creating highly applicable digital experiences.
          </p>
          <button className="explore-button">
            Explore <span className="arrow-icon"><MdArrowOutward/></span>
          </button>
        </div>
        <div className="hero-background">
            
            <img src={supimg} alt="img" />
            <img src={lightimg} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default InitialHero;
