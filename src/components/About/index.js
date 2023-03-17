import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrow from "../Arrow/index";

import html from "../../assets/images/html5.svg";
import css from "../../assets/images/css.svg";
import cplusplus from "../../assets/images/c++.svg";
import react from "../../assets/images/react.svg";
import typescript from "../../assets/images/typescript.svg";
import js from "../../assets/images/js.svg";

import Stack from "../Stack/index";

gsap.registerPlugin(ScrollTrigger);

const languages = [
  {
    id: 1,
    label: "HTML5",
    icon: html,
  },
  {
    label: "CSS3",
    icon: css,
  },
  {
    label: "Typescript",
    icon: typescript,
    style: { scale: "85%" },
  },
  {
    label: "Javascript",
    icon: js,
    style: { scale: "85%" },
  },
  {
    label: "C++",
    icon: cplusplus,
  },
];

const skills = [
  "HTML5",
  "CS3",
  "Typescript",
  "Javascript",
  "C++",
  "C#",
  "C",
  "Python",
];
const frameworks = ["Svelte", "React", "Flutter", "Hasura", "ThreeJS"];

export const About = () => {
  const gridContainerStyle =
    "grid grid-cols-2 w-1/2 sm:w-full sm:flex gap-4 items-center ";

  return (
    <section
      className="bg-primary text-on-primary w-full h-[1100px]  sm:p-0 lg:h-full skew-y-0 lg:skew-y-6"
      id="about"
    >
      <div className="w-full h-full flex justify-center items-center lg:text-xl text-normal">
        <div className=" w-full h-11/12  sm:h-3/5 text-center skew-y-0 sm:text-left lg:-skew-y-6  sm:m-auto flex flex-col justify-center items-center ">
          <h2 className="font-bold text-3xl sm:text-5xl text-center ">
            ABOUT ME
          </h2>

          <div className="flex sm:flex-row flex-col w-4/5 h-full gap-4 text-sm sm:text-sm ">
            <div className="w-full p-4 h-full ">
              <h2 className="font-bold text-xl sm:text-2xl ">HELLO THERE,</h2>
              <p>
                I am a second-year full-stack developer at ST Engineering. Since
                joining the company, I have been part of the product team
                supporting the end-to-end development of a C2 framework. This
                project requires me to not only build up my technical skills,
                particularly in JS and Svelte. But also, to test, maintain, and
                launch software products while liaising with multiple
                stakeholders in the company.
              </p> 
              <p className="mt-2">
                Prior to securing my full-time position at ST, I have been
                programming for seven years, developing my skills in a diversity
                of frameworks and languages. I am a keen learner who enjoys
                solving problems and challenges.
              </p>

              <p className="mt-2">
                During my journey as a software engineer, I started to cultivate
                an interest for frontend development ranging from UI/UX to web
                development. Also, I'm an addict for valorant, coffee and
                folding people in $500 pyjamas(Brazillian jiu-jitsu)
              </p>
            </div>

            <div
              id="skill-container"
              className="w-full h-full flex flex-col justify-center sm:justify-start items-center gap-2 "
            >
               <h2 className="font-bold text-xl sm:text-2xl ">SKILLS</h2>
              <p className="border-b-2 w-3/4 text-left sm:w-1/2 text-sm ">
                Languages
              </p>

              <div className="h-fit flex w-3/4 sm:w-1/2 flex-row flex-wrap gap-1">
                {skills.map((skill) => {
                  return (
                    <div className="flex h-fit w-fit px-2 py-0.5 border-2 border-gray-200">
                      <span className="text-center flex justify-center text-sm items-center text-on-primary font-light ">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="border-b-2 w-3/4 text-left sm:w-1/2 text-sm ">
                Frameworks
              </p>

              <div className="h-fit flex  w-3/4 sm:w-1/2 flex-row flex-wrap gap-1 ">
                {frameworks.map((skill) => {
                  return (
                    <div className="flex h-fit w-fit px-2 py-0.5 border-2 border-gray-200">
                      <span className="text-center flex justify-center text-sm items-center text-on-primary font-light ">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
// <h2>ABOUT ME</h2>
// <p>
//   I am a second-year full-stack developer at ST Engineering. Since
//   joining the company, I have been part of the product team supporting
//   the end-to-end development of a C2 framework. This project requires
//   me to not only build up my technical skills, particularly in JS and
//   Svelte. But also, to test, maintain, and launch software products
//   while liaising with multiple stakeholders in the company.
// </p>
// <p>
//   Prior to securing my full-time position at ST, I have been
//   programming for seven years, developing my skills in a diversity of
//   frameworks and languages. I am a keen learner who enjoys solving
//   problems and challenges.
// </p>

// <p>
//   During my journey as a software engineer, I started to cultivate an
//   interest for frontend development ranging from UI/UX to web
//   development. Also, I'm an addict for valorant, coffee and folding
//   people in $500 pyjamas(Brazillian jiu-jitsu)
// </p>
//         </div>
//       </div>
//     </div>
//   );
// };
