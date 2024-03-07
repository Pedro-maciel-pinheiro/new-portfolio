import { CodeText } from "@/lib/code";

export function Info() {
  return (
    <section
      className="flex flex-col  h-96 
      justify-center items-center gap-4 " 
    >
      <div id="Skill" className="md:mt-36 mb-4 sm:mb-0">
        <p
          className="text-white max-w-72 md:max-w-4xl 
        text-sm md:text-xl"
        >
          Greetings! I&apos;m Pedro a freelance developer.. Throughout my
          journey, I&apos;ve had the pleasure of collaborating with exceptional
          individuals and working remotely. My expertise lies in developing 
          mobile apps and websites.
        </p>
      </div>

      <div
        className="w-[300px]  mb-64 sm:mb-0
           md:w-[900px] h-[300px] md:h-[500px] mx-auto relative z-10"
      >
        <CodeText />
      </div>
    </section>
  );
}
