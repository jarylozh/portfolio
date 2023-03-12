import "./index.scss";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  let sectionItem = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionItem.current, {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: sectionItem.current,
          start: "top center",
        },
        ease: 'power4.easeOut'
      }
    );
  });

  return (
    <div className="section" id="about" ref={sectionItem}>
      <div className="section-content">
        <div className="about-container">
          <h2>ABOUT ME</h2>
          <p>
            I'm a software engineer currently into my 2nd year at
            <i>ST Engineering</i>. I studied at DigiPen Singapore where I
            pursued a degree in Real Time Interactive Simulation. That was when
            I was exposed to C++ programming and from that point on, I've...{" "}
          </p>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          </p>

          <p>
            Besides development, I do Brazillian Jiu-jitsu on the side as a
            hobby...
          </p>
        </div>
      </div>
    </div>
  );
};
