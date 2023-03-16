import React from "react";
import SkillRow from "./SkillRow";
export const Skills = () => {
  return (
    <section
      id="skill-container"
      className="w-full mt-6 h-1/2 flex bg-primary text-on-primary  skew-y-0 lg:skew-y-6"
    >
      <div className="m-auto skew-y-0 sm:h-3/4 lg:-skew-y-6 w-3/4 lg:w-1/2 p-2">
        <p>Here are my skills</p>
        <div className="w-full h-3/4 flex flex-col gap-4 justify-center">
          <SkillRow />
        </div>
      </div>
    </section>
  );
};

export default Skills;
