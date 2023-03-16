import React, { useState } from "react";
import html from "../../../assets/images/html5.svg";
import css from "../../../assets/images/css.svg";
import cplusplus from "../../../assets/images/c++.svg";
import react from "../../../assets/images/react.svg";
import typescript from "../../../assets/images/typescript.svg";
import js from "../../../assets/images/js.svg";
import csharp from "../../../assets/images/csharp.png";

export const SkillRow = (props) => {
  const buttonStyle =
    "p-0.5 px-2 font-semibold border-secondary text-sm hover:bg-secondary hover:text-on-secondary transition ease-in-out duration-300 text-center border-2 ";

  const gridContainerStyle =
    "grid grid-cols-2 w-3/4 sm:w-full h-full border sm:flex gap-4 items-center ";

  const [skillType, setSkillType] = useState(-1);

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
      style: { scale: "75%" },
    },
    {
      label: "Javascript",
      icon: js,
      style: { scale: "75%" },
    },
    {
      label: "C++",
      icon: cplusplus,
    },
    {
      label: "C#",
      icon: csharp,
      style: { scale: "180%" },
    },
  ];

  const frameworks = [];

  const misc = [];

  const allSkills = [languages, frameworks, misc];

  return (
    <div className="w-3/4 flex flex-col h-full gap-4 py-2">
      <div className="w-full grid grid-cols-3">
        <div
          className={buttonStyle}
          onMouseEnter={() => {
            setSkillType(0);
          }}
          onMouseLeave={() => {
            setSkillType(-1);
          }}
        >
          Languages
        </div>
        <div
          className={buttonStyle}
          onMouseEnter={() => {
            setSkillType(1);
          }}
          onMouseLeave={() => {
            setSkillType(-1);
          }}
        >
          Frameworks
        </div>
        <div
          className={buttonStyle}
          onMouseEnter={() => {
            setSkillType(2);
          }}
          onMouseLeave={() => {
            setSkillType(-1);
          }}
        >
          Misc.
        </div>
      </div>

      <div className="w-full h-full grow grid grid-cols-3">
        {skillType >= 0 &&
          allSkills[skillType].map((item) => {
            return (
              <div className="flex flex-col justify-center p-1 m-auto">
                <img
                  className="w-16 h-16 p-2"
                  src={item.icon}
                  style={item.style}
                />
                <span className="text-center text-xs px-2">{item.label}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SkillRow;
