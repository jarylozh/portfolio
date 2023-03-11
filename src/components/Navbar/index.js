import "./index.scss";
import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <header className="header-bar">
        <p className="">JARYL ONG</p>
        <div className="menu-bar">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Works
            </Link>
          </li>
        </div>
      </header>
    </div>
  );
};
