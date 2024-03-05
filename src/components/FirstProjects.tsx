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
    flex items-center justify-center  "
      >
        <div
          className="border-4 border-x-white rounded-xl shadow-xl
      shadow-black/60
       "
        >
          <div className="flex flex-col lg:flex-row  container  gap-0 px-0 ">
            <Link href={""} target="blank" className=" bg-slate-950 flex justify-center items-center "> 
              <Image
                className=" mx-auto max-w-96 sm:max-w-xl md:max-w-2xl relative z-10
                "
                src={"/shade.png"}
                width={1200}
                height={400}
                alt="none"
              />
             </Link> 
            <div
              className="text-xl bg-slate-950
           text-white italic  flex flex-col gap-6 items-center justify-center border    "
            >
              <p className="mt-8 mx-3 font-semibold ">
                A modern website made with shadcn/ui .. each page using some
                shadcn/ui component to enhance or just to improve the user
                experience completely responsive for all screens
              </p>
              <Link href={"https://app-shadcn-ui.vercel.app/"} target="blank">
                <Button
                  className="active:translate-y-1 border-2 bg-slate-950
             border-white relative z-10 w-36 animate-bounce"
                >
                  Visit site
                </Button>
              </Link>

              <div className=" rounded-xl relative z-10">
                <h1 className="text-white italic font-semibold text-xl">
                  Tools I use on this project
                </h1>
                <ul
                  className="flex border-4 rounded-xl p-2 bg-slate-900
             gap-8 items-center justify-center mt-4 mb-4"
                >
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={""}>
                      <Image src={"/ts.png"} alt="" width={40} height={32} />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image
                        src={"/tailwind.png"}
                        alt=""
                        width={40}
                        height={36}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={""}>
                      <Image
                        src={"/shadcn.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={""}>
                      <Image src={"/react.png"} alt="" width={40} height={32} />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={""}>
                      <Image
                        src={"/nextjs.png"}
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
