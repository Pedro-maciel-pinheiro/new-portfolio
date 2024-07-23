"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useInViewHook } from "@/hooks/inView";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name: string;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  skill_name,
}: Props) => {

  const { ref, inView } = useInViewHook();
  const animationDelay = 0.2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * animationDelay, duration: 0.8 }}
    >
      <div
        className="text-white relative z-20 transform duration-200 hover:-translate-y-1
       
       flex flex-col items-center justify-center
     
      "
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt="skill image"
          className="rounded-lg"
        />
        <div className="hidden md:block">{skill_name}</div>
      </div>
    </motion.div>
  );
};

export default SkillDataProvider;
