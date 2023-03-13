import "./index.scss";
import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (<div className='header'>
    <div className='header-bar'>
      <span className="logo">JARYL ONG</span>

      <div className="nav-bar">
        <Link to="intro"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className='nav-item'
        >
          Home
        </Link>

        <Link to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className='nav-item'
        >
          About

        </Link>

        <Link to="intro"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className='nav-item'
        >
          Experience

        </Link>

        <Link to="intro"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className='nav-item'
        >
          Works

        </Link>

      </div>
    </div>

  </div>
  )
};
