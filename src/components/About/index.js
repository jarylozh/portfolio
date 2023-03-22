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
      className="bg-primary text-on-primary w-full h-[1000px] sm:h-[800px] sm:p-0 skew-y-0 lg:skew-y-6 2xl:h-4/10"
      id="about"
    >
      <div className="w-full h-full lg:text-xl text-normal flex justify-center" ref={section}>
        <div className=" w-4/5 h-4/5 sm:h-3/5 text-center skew-y-0 sm:text-left lg:-skew-y-6 sm:m-auto flex flex-col justify-start items-center pt-10 ">
          <h2 className="font-bold text-3xl sm:text-5xl text-center ">
            ABOUT ME
          </h2>

          <div className="grid lg:grid-cols-2 grid-cols-1 items-center mt-4 ">
            <div className=" w-full gap-4 text-sm sm:text-sm 2xl:text-xl  p-4">
              <h2 className="font-bold text-2xl sm:text-3xl 2xl:text-5xl mb-2">
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

              <p className="mt-2">
                During my journey as a software engineer, I started to cultivate
                an interest for frontend development ranging from UI/UX to web
                development. Also, I'm an addict for valorant, coffee and
                folding people in $500 pyjamas(Brazillian jiu-jitsu)
              </p>
            </div>

            <div
              id="skill-container"
              className="w-full h-full gap-2  p-4"
            >
              <h2 className="font-bold text-2xl sm:text-3xl 2xl:text-5xl ">
                SKILLS
              </h2>
              <p className="font-semibold w-3/4 text-left sm:w-1/2 text-sm mt-3 2xl:text-2xl ">
                Languages
              </p>

              <div className="h-fit flex w-3/4 sm:w-1/2 flex-row flex-wrap gap-1 py-3">
                {skills.map((skill) => {
                  return (
                    <div className="flex h-fit w-fit px-2 py-0.5 2xl:px-3 2xl:py-1 border-2 border-on-primary rounded">
                      <span className="text-center flex justify-center text-sm 2xl:text-xl items-center text-on-primary font-light ">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="font-semibold w-3/4 text-left sm:w-1/2 text-sm 2xl:text-2xl ">
                Frameworks
              </p>

              <div className="h-fit flex  w-3/4 sm:w-1/2 flex-row flex-wrap gap-1 py-3">
                {frameworks.map((skill) => {
                  return (
                    <div className="flex h-fit w-fit px-2 py-0.5 2xl:px-3 2xl:py-1 border-2 border-on-primary rounded">
                      <span className="text-center flex justify-center text-sm 2xl:text-xl items-center text-on-primary font-light ">
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
