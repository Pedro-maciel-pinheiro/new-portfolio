"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill_data } from "@/components/skills/index";
import SkillDataProvider from "@/components/skills/SkillDataProvider";
import { useInViewHook } from "@/hooks/inView";
import { fadeIn, slideInFromLeft } from "@/utils/motion";

const Skills = () => {
  const { ref, inView } = useInViewHook();
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col  justify-center items-center  "
    >
      <motion.div variants={fadeIn(1.5)} className="text-white text-xl w-72 md:w-full ">
        <div
          className="text-start text-2xl md:text-center md:text-4xl 
         mt-40 md:mt-56 mb-4 textGlow-white font-semibold"
        >
          About Me{" "}
        </div>
        <p className="mb-8 w-full max-w-3xl mx-auto text-sm md:text-lg text-start md:text-center">
          I am a passionate and dedicated Front End Developer with a strong
          focus on creating dynamic and user-friendly web applications{"."} My
          expertise lies in using modern technologies and frameworks to build
          responsive and interactive user interfaces{"."}
        </p>
      </motion.div>
      <div className="skills-icons container" id="Skill">
        <div
          className="textGlow-white text-start  text-2xl
       w-72 md:w-full mx-auto  mb-6 font-semibold md:text-center md:text-4xl "
        >
          My skills
        </div>
        <div
          className="grid grid-cols-6 gap-3 sm:grid-cols-6  max-w-5xl 
          lg:gap-8 py-8  justify-center items-center  mx-auto 
          px-8  text-center "
          id="mid"
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
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
