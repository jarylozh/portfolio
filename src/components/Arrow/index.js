import "./index.scss";

import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import gsap from "gsap";

export const Arrow = (props) => {
    const isUp = props.isUp;
    const to = props.to;

    let chevronRef = useRef(null);
    let chevronIcon = isUp ? faChevronUp : faChevronDown;

    useEffect(() => {
        gsap.set(chevronRef.current, { y: 100, opacity: 0 });
        gsap.to(chevronRef.current, {
            opacity: 1,
            x: -100,
            duration: 2,
            ease: "back.easeInOut ",
        });
    })


    return (
        <span className='arrow' ref={chevronRef}>
            <Link to={to} spy={true}
                smooth={true}
                offset={50}
                duration={500}> <FontAwesomeIcon icon={chevronIcon} /></Link>
        </span>
    )
}

export default Arrow;