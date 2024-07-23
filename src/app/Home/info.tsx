import { CodeText } from "@/lib/code";

export function Info() {
  return (
    <section
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

      <div
        className="w-[300px]   
           md:w-[900px] h-[300px] md:h-[500px] mx-auto relative z-10"
      >
        <CodeText />
      </div>
    </section>
  );
}
