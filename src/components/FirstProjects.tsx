import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FirstProjects() {
  return (
    <>
      <div id="Projects">
        <h2
          className="text-white text-center text-3xl 
         mb-2"
        >
          Shadcn page
        </h2>
      </div>
      <div
        className=" text-white text-center  
    flex items-center justify-center container "
      >
        <div
          className="border-2 border-x-white rounded-sm shadow-xl
      shadow-black/60 max-w-72 md:max-w-4xl 
       "
        >
          <div className="flex flex-col md:flex-row px-0 ">
            <Link href={""} target="blank" className=" 
             bg-slate-950 flex justify-center items-center "> 

              <Image
                className=" mx-auto 
                rounded-lg
                md:max-w-xl relative z-10 object-cover
                "
                src={"/shade.png"}
                width={600}
                height={400}
                
                alt="none"
              />
             </Link> 
            <div
              className="text-xl bg-slate-950 container
           text-white italic  flex flex-col gap-6 items-center justify-center "
            >
              <p className=" font-semibold  text-sm mt-2 ">
                A modern website made with shadcn/ui .. each page using some
                shadcn/ui component to enhance or just to improve the user
                experience completely responsive for all screens
              </p>
              <Link  href={"https://app-shadcn-ui.vercel.app/"} target="blank">
                <Button
                  className="active:translate-y-1 border-2 bg-slate-800
             border-white relative z-10  animate-bounce w-20"
                >
                  Visit site
                </Button>
              </Link>

              <div className=" rounded-xl relative z-10">
                <h1 className="text-white italic font-semibold text-lg">
                  Tools I use on this project
                </h1>
                <ul
                  className="flex border-4 rounded-xl  bg-slate-900
             gap-5 md:gap-4 items-center justify-center mb-2 px-2 py-2"
                >
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={""}>
                      <Image src={"/icon/ts.png"} alt="" width={40} height={32} />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image
                        src={"/icon/tailwind.png"}
                        alt=""
                        width={40}
                        height={36}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={""}>
                      <Image
                        src={"/icon/shadcn.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={""}>
                      <Image src={"/icon/react.png"} alt="" width={40} height={32} />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={""}>
                      <Image
                        src={"/icon/nextjs.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
