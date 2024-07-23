"use client";
import { useInViewHook, useInViewHookSlow } from "@/hooks/inView";
import { CodeText } from "@/lib/code";
import { fadeIn, slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";

export function Info() {
  const { ref, inView } = useInViewHookSlow();
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn(0.5)}
      className="flex flex-col  h-48 md:h-96 
      justify-center items-center gap-4 relative"
    >
      <div id="Skill" className="md:mt-36  sm:mb-0">
        <h1
          className="textGlow-white text-start 
      md:text-center text-2xl md:text-4xl mb-4"
        >
          Work Experience
        </h1>
        <p
          className="text-white/90 max-w-72 md:max-w-3xl 
        text-sm md:text-lg   "
        >
          Greetings! I&apos;m a freelance developer.. Throughout my journey,
          I&apos;ve had the pleasure of collaborating with exceptional
          individuals and working remotely. My expertise lies in developing
          mobile apps and websites.
        </p>
      </div>

      <motion.div
        variants={slideInFromBottom(1)}
        className="w-[300px]   
           md:w-[900px] h-[300px] md:h-[500px] mx-auto relative z-10"
      >
        <CodeText />
      </motion.div>
    </motion.section>
  );
}
