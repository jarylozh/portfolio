import "./index.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "../../assets/images/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/images/school.svg";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section from '../Section/index'

gsap.registerPlugin(ScrollTrigger);

const iconStyle = { background: "#ffffff", border: "solid #1b1b1b" };
const timelineElements = [
  {
    id: 1,
    title: "Software Engineer",
    location: "ST Engineering",
    description:
      "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    date: "September 2021 - present",
    icon: "work",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    location: "HelloHolo",
    description:
      "Build virtual and mixed reality application using the latest immersive media technology.",
    buttonText: "Company Website",
    icon: "work",
    date: "Apr 2021 - Aug 2021",
  },
  {
    id: 3,
    title: "Computer Science in Real-Time Interactive Simulation",
    location: "DigiPen Institute of Technology",
    description:
      "Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.",
    icon: "school",
    date: "April 2017 - April 2021",
  },
];

export const Experience = () => {
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
    <Section id='experience'>
      <div className="timeline-container">

        <div className="timeline-content">
          <h2 className='title'>EXPERIENCE</h2>
        </div>
      </div>
    </Section>
  );
};


<VerticalTimeline >
  {timelineElements.map((element) => {
    let isWorkIcon = element.icon === "work";
    const myStyle = { background: "transparent" }
    return (
      <VerticalTimelineElement
        key={element.key}
        date={element.date}
        dateClassName="date"
        iconStyle={iconStyle}
        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
        className="job-card"
      >
        <h3 className="job-title">{element.title}</h3>
        <h5 className="job-location">{element.location}</h5>
        <p className="job-description">{element.description}</p>
      </VerticalTimelineElement>
    );
  })}
</VerticalTimeline>