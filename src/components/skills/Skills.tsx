import React from "react";

import { Skill_data } from "@/components/skills/index";
import SkillDataProvider from "@/components/skills/SkillDataProvider";

const Skills = () => {
  return (
    <section className="flex flex-col  justify-center items-center  ">
      <div className="text-white text-xl w-72 md:w-full ">
        <h1 className="text-center text-xl 
         mt-32 md:mt-64 mb-4 ">What I do?</h1>
         <p className="mb-16 text-center"> 
         Proficient in developing websites, web applications, mobile
        applications</p>
      </div>
      <ul className="skills-icons container" id="Skill">
        <h3 className="text-white text-center text-xl
         md:text-2xl">My skills</h3>
        <li
          className="grid grid-cols-6 gap-3 sm:grid-cols-6  max-w-5xl
          lg:gap-8 py-8  justify-center items-center  mx-auto
          px-8  text-center "
        >
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
