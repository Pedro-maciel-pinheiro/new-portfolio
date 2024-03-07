"use client";

import { Divide as Hamburger } from 'hamburger-react'
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";



export function ShadeMenu() {
  const [isOpen, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="w-96 bg-white">
      {mobileNavOpen && (
        <>
          <div
            className=" flex sm:hidden gap-8 max-w-xl items-center justify-center
             bg-transparent  transition-all 
        mt-2 rounded-xl   z-50 font-semibold w-full 
        fixed
        "
          >
            <div
              className=" flex justify-center w-full items-center  gap-2  "
             
            >
              <div
                className="flex gap-4  animate 
             duration-300 ease-in-out"
              >
                <Link href={'#home'}>
                 
                  <Button className="w-16 hover:text-white hover:border-white 
                   bg-white text-black border-2 border-slate-800">Top</Button>
                </Link>
                <Link href={'#mid'}>
                  <Button className="w-16 hover:text-white hover:border-white 
                   bg-white text-black border-2 border-slate-800">Mid</Button>
                </Link>
                <Link href={'#bottom'} onClick={() =>setOpen}>
                
                  <Button className="w-16 bg-white hover:text-white hover:border-white 
                   text-black border-2 border-slate-800">Bottom</Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      <button
        className=" flex md:hidden h-11 items-center z-50 
        justify-center text-white fixed  w-16  "
        onClick={() => setMobileNavOpen((prev) => !prev)}
      >
       
        <Hamburger  size={40} duration={0.8} 
        toggled={isOpen} toggle={setOpen} />
      </button>
    </div>
  );
}
