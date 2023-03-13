import "./index.scss";
import React, { useRef, useEffect } from "react";
import profilePicture from "../../assets/images/profile.jpg";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";
import Section from "../Section/index"
export const Intro = () => {
  return (
    <section id='intro'>  
      <div className='intro-container'>
      <div className="intro-content">    
        <h3><i></i>HELLO, I'M JARYL</h3>
        <span className="intro-role" >
              Software Engineer
             </span>
             <p className="intro-description" >
               Currently, I'm a software engineer at ST Engineering focused on
              building applications and services.
            </p>
     </div>
      </div>
     </section>
   
    
 );
}
// export const Intro = () => {
//   let sectionItem = useRef(null);
//   let introHeader = useRef(null);
//   let introDescription = useRef(null);
//   let introRole = useRef(null);
//   let introProfile = useRef(null);
//   let introChevron = useRef(null);

//   useEffect(() => {
//     gsap.set(introHeader.current, { x: 400, opacity: 0.1 });
//     gsap.set(introRole.current, { opacity: 0, y: 400 });
//     gsap.set(introDescription.current, { opacity: 1, y: 400 });
//     gsap.set(introProfile.current, { scale: 0 });
//     gsap.set(introChevron.current, { y: 100, opacity: 0 });

//     const timeline = gsap
//       .timeline()
//       .to(introHeader.current, {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "back.easeInOut",
//       })
//       .to([introRole.current, introDescription.current], {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "back.easeInOut",
//       })
//       .to(introProfile.current, {
//         scale: 1,
//         duration: 2,
//         ease: "bounce",
//       })
//       .to(introChevron.current, {
//         opacity: 1,
//         x: -100,
//         duration: 2,
//         ease: "back.easeInOut ",
//       });

//     gsap.fromTo(
//       sectionItem.current,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         duration: 2,
//         ease: "power4.easeOut",
//       }
//     );
//   });

//   return (
//     <div className="section" id="intro" ref={sectionItem}>
//       <div className="section-content">
//         <div className="intro-container">
//           <div className="intro-profile">
//             <p className="intro-header" ref={introHeader}>
//               HI, I AM JARYL
//             </p>
//             <span className="intro-role" ref={introRole}>
//               Software Engineer
//             </span>
//             <p className="intro-description" ref={introDescription}>
//               Currently, I'm a software engineer at ST Engineering focused on
//               building applications and services.
//             </p>
//           </div>

//           <div className="intro-display" ref={introProfile}>
//             <div className="intro-picture-frame">
//               <img
//                 className="intro-picture"
//                 src={profilePicture}
//                 alt="profile-picture"
//               />
//             </div>
//           </div>
//         </div>

        
//     </div>
//   );
// };
