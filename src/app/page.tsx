import { Hero } from "@/app/Home/Hero";
import { FirstProjects } from "../components/FirstProjects";
import StarsCanvas from "@/components/StarBackground";
import { SecondProjects } from "@/components/SecondProjects";
import Skills from "@/components/skills/Skills";
import { Info } from "@/app/Home/info";
import SlideImg from "@/components/slideImg/slide-1";
import { CarRentProject } from "@/components/CarRentProject";

export default function Home() {
  return (
    <>
      <main className="bg-slate-950 ">
        <Hero />
       <Info/>
        <Skills />

        <div className="flex flex-col gap-4 mt-32 md:mt-64" id="projects">
          <h1 className="text-white text-2xl md:text-4xl flex justify-center items-center mb-2 font-semibold">
            Recent Works
          </h1>
          <CarRentProject/>
          <FirstProjects />
          <SecondProjects />
        </div>

        <StarsCanvas /> 
      </main>
     
    </>
  );
}
