"use client";
import { fadeIn, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

export function MobileNavbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="w-full h-full overflow-hidden">
      <button
        className=" flex md:hidden  items-center  w-full fixed z-50 h-12
        justify-end text-white  "
        onClick={() => setMobileNavOpen((prev) => !prev)}
      >
        <div className="bg-black/80 rounded-sm">
          <Hamburger size={40} duration={0.8} toggled={mobileNavOpen} />
        </div>
      </button>
      <div
        className={` w-full  
          flex  fixed z-40  transition-all duration-300 ${
            mobileNavOpen
              ? "h-16 border-b backdrop-blur-3xl opacity-100"
              : "h-10 opacity-0"
          }`}
      >
        <div className="flex w-full h-full items-center justify-end px-4">
          <div
            className={`transition-all duration-1000 
               w-full h-full flex items-center justify-center
         `}
          >
            <motion.div
              initial={"hidden"}
              animate={mobileNavOpen ? "visible" : "hidden"}
              variants={fadeIn(0.3)}
              onClick={() => setMobileNavOpen(false)}
              className={`text-white font-semibold text-xl flex  gap-5 `}
            >
              <Link href={"/"}>Home</Link>
              <Link href={"#skills"}>Skills</Link>
              <Link href={"#projects"}>Projects</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
