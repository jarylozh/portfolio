import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import "./index.scss";

const Section = (props) => {
    let sectionItem = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionItem.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: sectionItem.current,
                    start: "top center",
                },
                ease: "power4.easeOut",
            }
        );
    });

    return (
        <div className='section-container' id={props.id} ref={sectionItem}>
            {props.children}
        </div>
    )
}

export default Section;