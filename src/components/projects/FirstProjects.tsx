"use client";

import { motion } from "framer-motion";
import { useInViewHook } from "@/hooks/inView";
import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { IconList } from "@/data/icon";

export function FirstProject() {
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
          variants={slideInFromLeft(0.5)}
          className="w-full 
          h-full flex flex-col md:flex-row border rounded-xl"
        >
          <div className="w-full max-w-[700px] h-full relative ">
            <span>
              <Link
                href={"https://phone-shop-mu.vercel.app/"}
                target="blank"
                className="absolute z-30 w-full max-w-[650px] h-full  rounded-xl"
              />
            </span>
            <video
              src="/video/mainpage.mp4"
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
                the Phone Shop project! This e-commerce application was created
                to gain more experience with fetching data from APIs, handling
                dynamic routes, and creating animations. Additionally,
              </p>
            </div>
            <h1>technologies used in the project:</h1>
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
            <div className="flex gap-2 hover:text-purple-500 transition-colors duration-300">
              <Link
                target="blank"
                href={
                  "https://github.com/Pedro-maciel-pinheiro/Phone-Shop/tree/main"
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
