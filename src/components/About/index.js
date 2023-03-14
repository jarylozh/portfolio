import "./index.scss";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrow from "../Arrow/index";

import html from "../../assets/images/html5.svg"
import css from "../../assets/images/css.svg";
import cplusplus from "../../assets/images/c++.svg";
import react from "../../assets/images/react.svg";
import typescript from "../../assets/images/typescript.svg"
import js from "../../assets/images/js.svg"




gsap.registerPlugin(ScrollTrigger);

const languages = [
  {
    id: 1,
    label: 'html5',
    icon: html,
  }, {
    label: 'css',
    icon: css
  },
  {
    label: 'c++',
    icon: cplusplus
  },
  {
    label: 'typescript',
    icon: typescript
  },
  {
    label: 'javascript',
    icon: js
  }
];

export const About = () => {
  return (
    <section id='about'>
      <div className='about-container'>
        <div className="about-content">
          <div style={{ width: '100%' }}>          <h2 className='title'>ABOUT ME</h2></div>
          <div className='description'>
            <p>
              I am a second-year full-stack developer at ST Engineering. Since
              joining the company, I have been part of the product team supporting
              the end-to-end development of a C2 framework.
            </p>
            <p>
              Prior to securing my full-time position at ST, I have been
              programming for seven years, developing my skills in a diversity of
              frameworks and languages. I am a keen learner who enjoys solving
              problems and challenges.
            </p>

            <p>
              During my journey as a software engineer, I started to cultivate an
              interest for frontend development ranging from UI/UX to web
              development. Also, I'm an addict for valorant, coffee and folding
              people in $500 pyjamas(Brazillian jiu-jitsu)
            </p>

          </div>
          <div className="stack-content">
            <div className="grid-container">
              {languages.map(i => {
                return (
                  <div className="square">
                    <img src={i.icon} alt={i.label} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

// export const About = () => {
//   let sectionItem = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       sectionItem.current,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         duration: 2,
//         scrollTrigger: {
//           trigger: sectionItem.current,
//           start: "top center",
//         },
//         ease: "power4.easeOut",
//       }
//     );
//   });

//   return (
//     <div className="section" id="about" ref={sectionItem}>
//       <div className="section-content">
//         <div className="about-container">
//           <h2>ABOUT ME</h2>
//           <p>
//             I am a second-year full-stack developer at ST Engineering. Since
//             joining the company, I have been part of the product team supporting
//             the end-to-end development of a C2 framework. This project requires
//             me to not only build up my technical skills, particularly in JS and
//             Svelte. But also, to test, maintain, and launch software products
//             while liaising with multiple stakeholders in the company.
//           </p>
//           <p>
//             Prior to securing my full-time position at ST, I have been
//             programming for seven years, developing my skills in a diversity of
//             frameworks and languages. I am a keen learner who enjoys solving
//             problems and challenges.
//           </p>

//           <p>
//             During my journey as a software engineer, I started to cultivate an
//             interest for frontend development ranging from UI/UX to web
//             development. Also, I'm an addict for valorant, coffee and folding
//             people in $500 pyjamas(Brazillian jiu-jitsu)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
