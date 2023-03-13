import "./index.scss";
import React, { useEffect, useRef } from "react";
import Section from '../Section/index'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  return (
    <Section id='about'>
      <div className='about-container'>
        <div className="about-content">
          <h2 className='title'>ABOUT ME</h2>
          <div className='description'>
            <p>
              I am a second-year full-stack developer at ST Engineering. Since
              joining the company, I have been part of the product team supporting
              the end-to-end development of a C2 framework. This project requires
              me to not only build up my technical skills, particularly in JS and
              Svelte. But also, to test, maintain, and launch software products
              while liaising with multiple stakeholders in the company.
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

        </div>
      </div>
    </Section>
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
