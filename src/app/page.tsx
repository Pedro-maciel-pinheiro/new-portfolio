import { Hero } from "@/app/Home/Hero";
import { FirstProjects } from "../components/FirstProjects";
import StarsCanvas from "@/components/StarBackground";
import { SecondProjects } from "@/components/SecondProjects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <main className="bg-black ">
        <Hero />
        <Skills />
        <div className="flex flex-col gap-4 mt-96" id="projects">
          <h1 className="text-white text-4xl flex justify-center items-center mb-2">
            Recent Works
          </h1>
          <FirstProjects />
          <SecondProjects />
        </div>

        <StarsCanvas />
      </main>
    </>
  );
}
