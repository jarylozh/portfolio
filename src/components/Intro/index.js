import "./index.scss";
import React, { useRef, useEffect } from "react";
import profilePicture from "../../assets/images/profile.jpg";
import gsap from "gsap";

export const Intro = () => {
  let sectionItem = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionItem.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: 'power4.easeOut'
      }
    );
  });

  return (
    <div className="section" id="intro" ref={sectionItem}>
      <div className="section-content">
        <div className="intro-container">
          <div className="intro-profile">
            <p className="intro-header">HI, I AM JARYL</p>
            <p className="intro-role">Software Engineer</p>
            <p className="intro-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="intro-display">
            <div className="intro-picture-frame">
              <img
                className="intro-picture"
                src={profilePicture}
                alt="profile-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
