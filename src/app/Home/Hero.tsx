import Image from "next/image";

export function Hero() {
  return (
    <>
      <div
        id="home"
        className="min-h-screen container items-center  
         flex flex-col  gap-6 md:flex-row md:gap-0 md:justify-center
        "
      >
        <div className="  mx-auto" >
          <div
            className="
             gap-6 sm:gap-2  mx-auto
             "
          >
            <div className="mt-36 md:mt-0">
              <p className="text-white text-2xl font-semibold">
                Welcome To My Space
              </p>
              <h1
                className="text-sm

            sm:text-2xl lg:text-xl font-bold  text-white"
              >
                My name is Pedro..
                <p
                  className="
              bg-gradient-to-r from-purple-500 to-cyan-500   bg-clip-text text-transparent
              "
                >
                  I&apos;m a Front-end Devoloper
                </p>
              </h1>
              <p className="text-slate-100  hidden lg:block ">
                experiences for the web transforming ideas into digital reality
                
              </p>
            </div>
          </div>
        </div>
        <div className="w-[250px] md:w-[400px] h-[250px]  md:h-[400px] mx-auto relative ">
          <Image
            src={"/main.jpeg"}
            width={500}
            height={500}
            alt="none"
            className=" rounded-full h-full w-full object-cover mt-5 ml-3 
            md:mt-0 md:ml-0
            "
          />
          <img
            src="/icon/react.png"
            className="absolute animated-image w-8 md:w-12 -top-1 left-10 md:left-6"
            alt=""
          />
          <img
            src="/icon/nextjs.png"
            className="absolute animated-image w-8 md:w-12 top-10 md:top-20 md:-left-10"
            alt=""
          />
          <img
            src="/icon/tailwind.png"
            className="absolute animated-image w-8 md:w-12 top-[80px] left-[-24px] md:top-[170px] md:-left-[58px]"
            alt=""
          />
          <img
            src="/icon/shadcn.png"
            className="absolute animated-image w-8 md:w-12 top-[120px] left-[-34px] md:top-[250px] md:-left-[50px]"
            alt=""
          />
          <img
            src="/icon/mongodb.svg"
            className="absolute animated-image w-8 md:w-12 top-[165px] left-[-34px] md:top-[330px] md:-left-[10px]"
            alt=""
          />
          <img
            src="/icon/ts.png"
            className="absolute rounded-full animated-image w-8 top-[210px] left-[-18px] md:w-12 md:top-[390px] md:left-[60px]"
            alt=""
          />
          <img
            src="/icon/angula.png"
            className="absolute  animated-image w-8 md:w-12 top-[250px] left-3 md:top-[413px] md:left-[150px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
