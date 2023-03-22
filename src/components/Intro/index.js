import React, { useRef, useEffect, useState } from "react";
import profilePicture from "../../assets/images/profile.jpg";
import gsap from "gsap";
import Arrow from "../Arrow/index";
import { Link } from "react-scroll";

import { FaLinkedin, FaGit } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";

import './index.scss'

export const Intro = () => {
  const navButtonStyle =
    "w-8 h-8 text-sm p-1 sm:text-2xl text-center flex items-center justify-center text-on-secondary";

  const commonStyle = "transition ease-in-out group-hover:-translate-y-1.5 text-on-secondary text-2xl"
  const labelStyle = "text-sm font-semibold absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"

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
        delay: 0.1,
        opacity: 1,
        duration: 0.5,
        ease: "power1.easeIn",
      })
      .to(headerBar.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.easeIn",
      });
  });

  return (
    <section id="intro" className="w-full h-full flex sm:flex-none">
      <div
        className="fixed w-full h-20 sm:h-16 flex justify-around sm:justify-end sm:gap-8 px-10 z-50 items-center shadow-lg bg-gradient-to-b from-secondary via-secondary/60 to-transparent"
        ref={headerBar}
      >
        <div className="group flex justify-center items-center h-14 w-14 flex-col relative">
          <button className={navButtonStyle}>
            <span
              className={commonStyle}
            ><FaLinkedin /></span>
          </button>
          <label className={labelStyle}>
            LinkedIn
          </label>
        </div>
        <div className="group flex justify-center items-center h-12 w-12 flex-col relative">
          <button className={navButtonStyle}>
            <span
              className={commonStyle}
            ><FaGit /></span>
          </button>
          <label className={labelStyle}>
            Github
          </label>
        </div>
        <div className="group flex justify-center items-center h-12 w-12 flex-col relative">
          <button className={navButtonStyle}>
            <span
              className={commonStyle}
            ><RiFilePaper2Line /></span>
          </button>
          <label className={labelStyle}>
            Resume
          </label>
        </div>
      </div>

      <div
        className="flex flex-col-reverse justify-center text-on-primary text-center items-center lg:flex-row sm:m-auto sm:text-left gap-5 relative "
        ref={section}
      >
        <div className="w-4/5 sm:w-3/5">
          <span className="text-5xl font-bold lg:text-6xl text-primary">HELLO, I'M JARYL</span>
          <p className="lg:text-2xl py-2">
            Currently, I'm a software engineer at ST Engineering focused on
            building applications and services
          </p>
          <span
            className="flex flex-col lg:flex-row gap-1 mt-4 justify-center sm:justify-start relative"
            ref={navBar}
          >
            <button className="btn btn-slide">
              <Link to="intro" smooth={true} spy={true} duration={500}>
                Home
              </Link>
            </button>
            <button className="btn btn-slide">
              <Link to="about" smooth={true} spy={true} duration={500}>
                About
              </Link>
            </button>
            <button className="btn btn-slide">
              <Link to="experience" smooth={true} spy={true} duration={500}>
                Experience
              </Link>
            </button>
            <button className="btn btn-slide">
              <Link to="works" smooth={true} spy={true} duration={500}>
                Work
              </Link>
            </button>
          </span>
        </div>

        <div className="sm:w-48 sm:h-48 xs:w-36 xs:h-36 w-24 h-24 lg:w-64 aspect-square">
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
          "absolute bottom-[5%] lg:bottom-[30%] left-[50%] animate-bounce"
        }
        hidden={hasScrolled}
      >
        <Arrow to="about" />
      </span>
    </section>
  );
};
