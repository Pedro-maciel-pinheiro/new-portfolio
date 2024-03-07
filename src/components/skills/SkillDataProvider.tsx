"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name:string
}

const SkillDataProvider = ({ src, width, height, index ,skill_name}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.2;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >

      <div className="text-white relative z-20 transform duration-200 hover:-translate-y-1
       
       flex flex-col items-center justify-center
     
      "> 
        <Image src={src} width={width} height={height} alt="skill image" className="rounded-lg" />
        <div className="hidden md:block">{skill_name}</div>
      </div>
    </motion.div>
  );
};

export default SkillDataProvider;
