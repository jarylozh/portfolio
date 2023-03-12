import "./index.scss";
import gsap from "gsap";

import React, { useRef, useEffect } from "react";
export const Works = () => {
  let sectionItem = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionItem.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power4.easeOut",
        scrollTrigger: {
          trigger: sectionItem.current,
          start: "top center",
        },
      }
    );
  });

  return (
    <div className="section" id="works" ref={sectionItem}>
      <div className="section-content">
        <div className="work-container">
          <h2>WORKS</h2>

          <div className="work-grid">
            <div className="work-grid-content">
              <div className="work-picture">Work picture here.</div>

              <div className="work-description">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </p>
              </div>
            </div>

            <div className="work-grid-content">
              <div className="work-picture">Work picture here.</div>

              <div className="work-description">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </p>
              </div>
            </div>

            <div className="work-grid-content">
              <div className="work-picture">Work picture here.</div>

              <div className="work-description">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
