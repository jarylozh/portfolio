import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  let section = useRef(null);
  const timeline = useRef(gsap.timeline());


  useEffect(() => {
    gsap.set(section.current, { opacity: 0, x: -40 });
    gsap.to(section.current, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.easeIn",
      scrollTrigger: {
        trigger: section.current,
        start: "top center",
      },
    });
  });

  return (
    <section
      className="bg-primary text-on-primary w-full h-[1000px]  py-6  sm:p-0  skew-y-0 lg:skew-y-6 2xl:h-[1100px]"
      id="about"
    >
      <div
        className="w-full h-full flex justify-center items-center lg:text-xl text-normal"
        ref={section}
      >
        <div className=" w-full h-full  sm:h-3/5 text-center skew-y-0 sm:text-left lg:-skew-y-6  sm:m-auto flex flex-col justify-center items-center ">
          <h2 className="font-bold text-3xl sm:text-5xl text-center ">
            ABOUT ME
          </h2>

          <div className="flex sm:flex-row flex-col w-4/5  gap-4 text-sm sm:text-sm 2xl:text-xl mt-10">
            <div className="w-full p-4 h-full ">
              <h2 className="font-bold text-2xl sm:text-3xl 2xl:text-5xl">
                HELLO THERE,
              </h2>
              <p>
                I am a second-year full-stack developer at ST Engineering. Since
                joining the company, I have been part of the product team
                supporting the end-to-end development of a C2 framework. This
                project requires me to not only build up my technical skills,
                particularly in JS and Svelte. But also, to test, maintain, and
                launch software products while liaising with multiple
                stakeholders in the company.
              </p>
              {/* <p className="mt-2">
                Prior to securing my full-time position at ST, I have been
                programming for seven years, developing my skills in a diversity
                of frameworks and languages. I am a keen learner who enjoys
                solving problems and challenges.
              </p> */}

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
              <h2 className="font-bold text-2xl sm:text-3xl 2xl:text-5xl ">
                SKILLS
              </h2>
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
