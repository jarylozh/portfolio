import React, { useRef, useEffect } from "react";
import profilePicture from "../../assets/images/profile.jpg";
import gsap from "gsap";
import Arrow from "../Arrow/index";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

import linkedIn from "../../assets/images/social/linkedin.svg"
import githubSvg from "../../assets/images/social/github.svg"
import portfolioSvg from "../../assets/images/social/portfolio.svg"


export const Intro = () => {
  const buttonStyle = ' p-0.5 px-2 font-semibold border-2 border-black text-sm hover:bg-primary hover:text-on-primary transition ease-in-out duration-300 fill-red-200';
  const navButtonStyle = 'w-8 h-8 text-sm p-1 sm:text-3xl text-center flex items-center justify-center'
  return (

    <section id='intro' class="w-full h-4/5 flex sm:flex-none ">
      <div className='fixed w-full h-12 flex justify-around sm:justify-end sm:gap-8 px-10 z-10 items-center bg-tertiary'>

        <div className='group flex justify-center items-center h-12 w-12 flex-col relative'><button className={navButtonStyle}> <img src={linkedIn} className='transition ease-in-out group-hover:-translate-y-1.5' /></button>
          <label className='text-xs font-semibold absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>LinkedIn</label>
        </div>
        <div className='group flex justify-center items-center h-12 w-12 flex-col relative'> <button className={navButtonStyle}><img src={githubSvg} className='transition ease-in-out group-hover:-translate-y-1.5' /></button>
          <label className='text-xs font-semibold absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>Github</label>
        </div>
        <div className='group flex justify-center items-center h-12 w-12 flex-col relative'><button className={navButtonStyle}><img src={portfolioSvg} className='transition ease-in-out group-hover:-translate-y-1.5' /></button>
          <label className='text-xs font-semibold absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>Resume</label>
        </div>


      </div>

      <div className='flex flex-col-reverse justify-center text-center items-center  sm:flex-row sm:m-auto sm:text-left gap-5 relative'>
        <div className='w-4/5 sm:w-3/5'>
          <span className='text-5xl'>HELLO, I'M JARYL</span>
          <p className="">
            Currently, I'm a software engineer at ST Engineering focused on building applications and services
          </p>
          <span className='flex flex-col sm:flex-row gap-0.5 mt-2 justify-center sm:justify-start'>
            <button className={buttonStyle}><Link to='intro' smooth={true} spy={true} duration={500}>Home</Link></button>
            <button className={buttonStyle}><Link to='about' smooth={true} spy={true} duration={500}>About</Link></button>
            <button className={buttonStyle}><Link to='experience' smooth={true} spy={true} duration={500}>Experience</Link></button>
            <button className={buttonStyle}><Link to='work' smooth={true} spy={true} duration={500}>Work</Link></button>
          </span>
        </div>

        <div className='sm:w-48 sm:h-48 xs:w-36 xs:h-36 w-24 h-24 aspect-square'>
          <img className='object-contain' src={profilePicture} alt="profile-picture" />
        </div>
      </div>

      <span className='absolute bottom-[10%] left-[50%] animate-bounce'><Arrow /></span>


    </section>

  );
}

{/* <div className="intro-content">
        <div className='intro-text'> <h3>HELLO, I'M JARYL</h3>
        <span style={{color: '#DDD0C8'}}> 
            Software Engineer
        </span>
        <p className="intro-description">
          Currently, I'm a software engineer at ST Engineering focused on building applications and services 
        </p></div>
       <div className="intro-picture">
       <img src={profilePicture} alt="profile-picture"/>
       </div>
     </div>
     <div style={{textAlign: 'center', padding: 'auto'}}><Arrow to='about'/></div>
    </div>  */}
