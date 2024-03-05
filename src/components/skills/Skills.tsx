import React from "react";

import { Skill_data } from "@/components/skills/index";
import SkillDataProvider from "@/components/skills/SkillDataProvider";

const Skills = () => {
  return (
    <section id="Skill" className="flex flex-col  h-96
     
     justify-center items-center gap-8
    
    
    ">
      <span className="text-xl text-white">
        <h1 className="text-3xl text-center mb-8 mt-52">Skills</h1>
        
        
      </span>

      <ul className="skills-icons container">
        <li className="grid grid-cols-2 sm:grid-cols-6 py-2  justify-center items-center
         px-8 rounded-lg  border-2 bg-slate-950 text-center ">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              skill_name={image.skill_name}
            />
          ))}
        </li>
      </ul>
    </section>
  );
};

export default Skills;
