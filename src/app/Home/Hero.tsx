import Image from "next/image";

export function Hero() {
  return (
    <>
      <div
        id="home"
        className=" w-full container items-center  overflow-hidden 
         flex flex-col   md:flex-row md:gap-0 md:justify-center relative
        "
      >
        <div className="w-72 md:w-full max-w-lg   mx-auto ">
          <div
            className="
             gap-6 sm:gap-2  mx-auto
             "
          >
            <div className="mt-16 md:mt-0 relative ">
              <p className="textGlow-white text-2xl  md:text-3xl font-semibold">
                Welcome To My Space
              </p>
              <h1 className="text-lg md:text-2xl font-bold  textGlow-white">
                My name is Pedro..
              </h1>

              <p
                className=" font-semibold text-lg md:text-2xl textGlow-purple
              bg-gradient-to-r from-purple-500 to-cyan-500 
                bg-clip-text text-transparent mt-4 md:mt-8
              "
              >
                I&apos;m a Front-end Devoloper
              </p>
              <p className="text-slate-100 mt-1 text-sm md:text-lg">
                building experiences for the web <br />
                transforming ideas into digital reality
              </p>
            </div>
          </div>
        </div>
        <div className=" h-[600px] md:mt-16">
          <div
            className="w-[250px] md:w-[350px] h-[250px] 
         md:h-[350px] mx-auto relative md:mt-16  lg:right-56"
          >
            <Image
              src={"/main.jpeg"}
              width={500}
              height={500}
              alt="none"
              className=" rounded-full h-full w-full object-cover mt-5 ml-3 
             md:ml-0 translate-x-1 translate-y-6
            "
            />
            <img
              src="/icon/react.png"
              className="absolute animated-image w-8 md:w-10 -top-1 left-10 md:left-6"
              alt=""
            />
            <img
              src="/icon/nextjs.png"
              className="absolute animated-image w-8 md:w-10 top-10 md:top-20 md:-left-10"
              alt=""
            />
            <img
              src="/icon/tailwind.png"
              className="absolute animated-image w-8 md:w-10 top-[80px] left-[-24px] md:top-[170px] md:-left-[58px]"
              alt=""
            />
            <img
              src="/icon/shadcn.png"
              className="absolute animated-image w-8 md:w-10 top-[120px] left-[-34px] md:top-[250px] md:-left-[50px]"
              alt=""
            />
            <img
              src="/icon/framer-motion.svg"
              className="absolute animated-image w-8 md:w-10 top-[165px] left-[-34px] md:top-[330px] md:-left-[10px]"
              alt=""
            />
            <img
              src="/icon/ts.png"
              className="absolute rounded-full animated-image w-8 top-[210px] left-[-18px] md:w-10 md:top-[390px] md:left-[60px]"
              alt=""
            />
            <img
              src="/icon/angula.png"
              className="absolute  animated-image w-8 md:w-10 top-[250px] left-3 md:top-[413px] md:left-[150px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
