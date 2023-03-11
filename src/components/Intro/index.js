import "./index.scss";
import React from "react";

import { useSpring, animated } from "react-spring";
import { useState } from "react";
import profilePicture from "../../assets/images/profile.jpg";
export const Intro = () => {
  const [flip, setFlip] = useState(false);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div style={props}>
      <div className="section" id="intro">
        <div className="section-content">
          <div className="intro-container">
            <div className="intro-profile">
              <p className="intro-header">HI, I AM JARYL</p>
              <p className="intro-role">Software Engineer</p>
              <p className="intro-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="intro-display">
              <div className="intro-picture-frame">
                <img className="intro-picture" src={profilePicture} alt="profile-picture"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
