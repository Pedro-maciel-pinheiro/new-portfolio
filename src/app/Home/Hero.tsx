import Skills from "@/components/skills/Skills";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <>
      <div id="home"
        className="min-h-screen container  
       flex justify-center items-center bg-fixed "
      >
        <div
          className="container 
          flex flex-col  sm:flex-row justify-center items-center pb-10
         mt-16 rounded-xl "
        >
          <div
            className="flex flex-col gap-6 sm:gap-2 bg-slate-950
          border-4 mt-10 shadow-xl rounded-xl px-20 py-16  mx-auto"
          >
            <h1
              className="text-sm

            sm:text-2xl lg:text-2xl font-bold  text-white"
            >
              Hello my name is Pedro..
              <p
                className="
              bg-gradient-to-r from-purple-500 to-cyan-500   bg-clip-text text-transparent
              "
              >
                I&apos;m a Front-end Devoloper
              </p>
            </h1>
            <p className="text-slate-100 hidden lg:block">
              experiences for the web transforming ideas into digital reality
            </p>
            <p className="text-sm md:text-xl text-slate-100 ">
              I have experience developing websites.. <br /> and mobile apps
              Check out my projects and skills.

            </p>
           
            
            
          </div>
          <div className="hidden sm:block">
            <Image
              src={"/programming-animate.svg"}
              width={800}
              height={500}
              alt="none"
            />
          </div>
        </div>
      </div>

      
    </>
  );
}
