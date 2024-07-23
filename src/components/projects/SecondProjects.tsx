"use client";

import { motion } from "framer-motion";
import { useInViewHook } from "@/hooks/inView";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

import { IconList } from "@/data/icon";

export function SecondProject() {
  const { ref, inView } = useInViewHook();
  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        id="Projects"
        className="flex flex-col w-full h-full max-w-6xl mx-auto relative z-30  px-4 md:px-0"
      >
        <motion.div
          variants={fadeIn(0.5)}
          className="w-full 
          h-full flex flex-col md:flex-row border rounded-xl"
        >
          <div className="w-full max-w-[700px] h-full relative ">
            <span>
              <Link
                href={"https://phone-shop-mu.vercel.app/redmagic-9-pro"}
                target="blank"
                className="absolute z-30 w-full max-w-[650px] h-full  rounded-xl"
              />
            </span>
            <video
              src="/video/redmagic.mp4"
              autoPlay
              muted
              loop
              className="rounded-xl  md:rounded-s-xl border-2 "
            />
          </div>

          <div
            className="p-4 flex flex-col items-center justify-around overflow-hidden
           w-full md:max-w-[650px] h-[300px] text-white font-semibold relative "
          >
            <div className="w-full max-w-96 text-center">
              <p>
              This innovative application was crafted to explore futuristic design principles and push the boundaries of web animations{"."} Leveraging the power of Framer Motion{","} it features a plethora of dynamic animations{"."}
              </p>
            </div>
            <h1>technologies used in the project{":"}</h1>
            <div
              className="w-full max-w-96  flex items-center 
            justify-center gap-4 border rounded-xl p-2 bg-white/10"
            >
              {IconList.map((data, index) => (
                <div key={index}>
                  <Link href={data.linkPath} target="blank">
                    <Image
                      src={data.icon}
                      alt={data.title}
                      width={35}
                      height={35}
                      className="hover:scale-105 transition-all duration-200"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex gap-2 textGlow-purple transition-colors duration-300">
              <Link
                
                target="blank"
                href={
                  "https://github.com/Pedro-maciel-pinheiro/Phone-Shop/tree/main/src/app/redmagic-9-pro"
                }
              >
                GitHub repository 
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
