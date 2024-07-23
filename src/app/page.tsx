import { Hero } from "@/app/Home/Hero";
import StarsCanvas from "@/components/StarBackground";
import { FirstProject } from "@/components/projects/FirstProjects";
import { SecondProject } from "@/components/projects/SecondProjects";
import { ThirdProject } from "@/components/projects/ThirdProjects";

import Skills from "@/components/skills/Skills";
import { Info } from "@/app/Home/info";

export default function Home() {
  return (
    <>
      <main className="bg-slate-950 ">
        <Hero />
        <Info />
        <Skills />

        <div
          className="flex flex-col gap-8 md:gap-12 mt-8 md:mt-28"
          id="projects"
        >
          <h1
            className="w-72 md:w-full mx-auto
          textGlow-white text-2xl md:text-4xl 
          text-start md:text-center mb-2 font-semibold"
          >
            Recent Projects
          </h1>

          <FirstProject />
          <SecondProject />
          <ThirdProject />
        </div>

        <StarsCanvas />
      </main>
    </>
  );
}
