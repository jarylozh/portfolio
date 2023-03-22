import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Works = () => {

  let arr = [
    { name: '', description: '', component: useRef(null), githubUrl: '' },
    { name: '', description: '', component: useRef(null), githubUrl: '' },
    { name: '', description: '', component: useRef(null), githubUrl: '' },
    { name: '', description: '', component: useRef(null), githubUrl: '' }
  ];


  useEffect(() => {
    arr.forEach(obj => {
      gsap.set(obj.component.current, { opacity: 0 })

      gsap.to(obj.component.current, {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.easeIn",
        scrollTrigger: {
          trigger: obj.component.current,
          start: "top center",
        },
      });
    })

  })

  const buttonStyle =
    " sm:p-0.5 px-2 font-semibold border-2 border-black text-xs sm:text-sm hover:bg-primary hover:text-on-primary transition ease-in-out duration-300";

  return (
    <section
      className="bg-secondary text-on-secondary w-full h-[1000px] p-6 sm:p-0 lg:h-4/5 skew-y-0 lg:skew-y-6 "
      id="works"
    >
      <div className=" w-full h-full flex flex-col justify-center items-start lg:text-xl text-normal -skew-y-0 lg:-skew-y-6">
        <div className="w-full h-4/5 ">
          <h2 className="font-bold text-3xl sm:text-5xl text-center w-full">
            WORKS
          </h2>
          <div className=" w-3/4 h-full mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto ">
            {arr.map((entry, i) => {
              return (
                <div ref={entry.component} className="w-full h-fit sm:h-[400px] lg:h-[300px] rounded shadow-md shadow-primary/35 p-4 flex flex-col justify-around">
                  <span>
                    <p className="font-bold text-xs sm:text-xl 2xl:text-2xl text-center sm:text-left my-4 ">
                      Culpa est nisi laborum sint consectetur dolor officia ex.
                    </p>
                    <p className="text-xs sm:text-sm 2xl:text-xl text-center sm:text-left">
                      Est nulla nulla ex exercitation amet fugiat. Enim nisi ex
                      nostrud consequat incididunt ea incididunt. Consequat
                      dolore ex proident ex Lorem ut. Ex ullamco officia officia
                      mollit id aliquip enim sunt cillum id do fugiat velit.
                      Elit eiusmod nostrud culpa laborum ullamco ipsum.
                    </p>
                  </span>

                  <div className="flex justify-between mt-4">
                    <div className="flex sm:justify-start items-center justify-center gap-2  ">
                      <button className="btn btn-slide" style={{ padding: "0px 3px" }}>Demo</button>
                      <button className="btn btn-slide" style={{ padding: "0px 3px" }}>Github</button>
                    </div>

                    <div className=""></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
