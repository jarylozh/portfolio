import React, { useRef, useEffect, useState } from "react";
import profilePicture from "../../assets/images/profile.jpg";
import gsap from "gsap";
import Arrow from "../Arrow/index";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

import linkedIn from "../../assets/images/social/linkedin.svg";
import githubSvg from "../../assets/images/social/github.svg";
import portfolioSvg from "../../assets/images/social/portfolio.svg";

export const Intro = () => {
  const buttonStyle =
    " p-0.5 px-2 font-semibold border-2 border-black text-sm hover:bg-primary hover:text-on-primary transition ease-in-out duration-300";
  const navButtonStyle =
    "w-8 h-8 text-sm p-1 sm:text-3xl text-center flex items-center justify-center";

  const [hasScrolled, setHasScrolled] = useState(false);
  let section = useRef(null);
  let scrollArrow = useRef(null);
  let navBar = useRef(null);
  let headerBar = useRef(null);

  const timeline = useRef(gsap.timeline());
  useEffect(() => {
    gsap.set(section.current, { x: -40, opacity: 0 });
    gsap.set(navBar.current, { x: 40, opacity: 0 });
    gsap.set(scrollArrow.current, { opacity: 0 });
    gsap.set(headerBar.current, { y: -40, opacity: 0 });

    timeline.current
      .to(section.current, {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.easeIn",
      })
      .to(navBar.current, {
        x: 0,
        delay: 0.25,
        opacity: 1,
        duration: 1.5,
        ease: "power1.easeIn",
      })
      .to(scrollArrow.current, {
        delay: 0.2,
        opacity: 1,
        duration: 1,
        ease: "power1.easeIn",
      })
      .to(headerBar.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.easeIn",
      });
  });

  return (
    <section id="intro" className="w-full h-4/5 flex sm:flex-none bg-secondary">
      <div
        className="fixed w-full h-12 flex justify-around sm:justify-end sm:gap-8 px-10 z-30 items-center bg-tertiary"
        ref={headerBar}
      >
        <div className="group flex justify-center items-center h-12 w-12 flex-col relative">
          <button className={navButtonStyle}>
            <img
              src={linkedIn}
              className="transition ease-in-out group-hover:-translate-y-1.5"
            />
          </button>
          <label className="text-xs font-semibold absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            LinkedIn
          </label>
        </div>
        <div className="group flex justify-center items-center h-12 w-12 flex-col relative">
          {" "}
          <button className={navButtonStyle}>
            <img
              src={githubSvg}
              className="transition ease-in-out group-hover:-translate-y-1.5"
            />
          </button>
          <label className="text-xs font-semibold absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Github
          </label>
        </div>
        <div className="group flex justify-center items-center h-12 w-12 flex-col relative">
          <button className={navButtonStyle}>
            <img
              src={portfolioSvg}
              className="transition ease-in-out group-hover:-translate-y-1.5"
            />
          </button>
          <label className="text-xs font-semibold absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Resume
          </label>
        </div>
      </div>

      <div
        className="flex flex-col-reverse justify-center text-center items-center  sm:flex-row sm:m-auto sm:text-left gap-5 relative "
        ref={section}
      >
        <div className="w-4/5 sm:w-3/5">
          <span className="text-5xl font-bold">HELLO, I'M JARYL</span>
          <p className="">
            Currently, I'm a software engineer at ST Engineering focused on
            building applications and services
          </p>
          <span
            className="flex flex-col sm:flex-row gap-0.5 mt-2 justify-center sm:justify-start"
            ref={navBar}
          >
            <button className={buttonStyle}>
              <Link to="intro" smooth={true} spy={true} duration={500}>
                Home
              </Link>
            </button>
            <button className={buttonStyle}>
              <Link to="about" smooth={true} spy={true} duration={500}>
                About
              </Link>
            </button>
            <button className={buttonStyle}>
              <Link to="experience" smooth={true} spy={true} duration={500}>
                Experience
              </Link>
            </button>
            <button className={buttonStyle}>
              <Link to="works" smooth={true} spy={true} duration={500}>
                Work
              </Link>
            </button>
          </span>
        </div>

        <div className="sm:w-48 sm:h-48 xs:w-36 xs:h-36 w-24 h-24 aspect-square">
          <img
            className="object-contain"
            src={profilePicture}
            alt="profile-picture"
          />
        </div>
      </div>

      <span
        ref={scrollArrow}
        className={
          "absolute bottom-[22%] sm:bottom-[40%] left-[50%] animate-bounce"
        }
        hidden={hasScrolled}
      >
        <Arrow to="about" />
      </span>
    </section>
  );
};
