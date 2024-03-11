import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SlideThird from "./slideImg/slide-3";

export function CarRentProject() {
  return (
    <>
      <div id="Projects">
        <h2
          className="text-white text-center text-3xl font-semibold
         mb-0 mt-4"
        >
         Car-Rent
        </h2>
      </div>
      <div
        className=" text-white text-center  
    flex items-center justify-center container mb-12 "
      >
        <div
          className="border-2 border-x-white rounded-sm shadow-xl
      shadow-black/60 max-w-72 md:max-w-4xl 
       "
        >
          <div className="flex flex-col  md:flex-row   px-0  max-w-72 sm:max-w-xl md:max-w-6xl ">
            <Link href={"https://car-rent-shop-next.vercel.app/"} target="blank" className=" relative z-20
             bg-slate-950 flex justify-center items-center overflow-hidden sm:overflow-visible"> 
              <SlideThird/>
             </Link> 
            <div
              className="text-xl bg-slate-950 
           text-white   flex flex-col gap-6 px-4 "
            >
              <p className=" font-semibold  text-left text-sm mt-2 ">
              Dynamic and efficient Rent-car website developed using Next.js
               for seamless page routing and with API integration. 
               Employs a modular with many informations about the car

              </p>
              <Link  href={"https://car-rent-shop-next.vercel.app/"} className="" target="blank">
                <Button
                  className="active:translate-y-1 border-2 bg-slate-800
             border-white relative z-10  animate-pulse w-20"
                >
                  Visit site
                </Button>
              </Link>

              <div className=" rounded-xl relative z-10">
                <h1 className="text-white  font-semibold text-lg">
                  Tools I use on this project
                </h1>
                <ul
                  className="flex border-4 rounded-xl  bg-slate-900
             gap-5 md:gap-6 items-center justify-center mb-2 px-2 py-2"
                >
                  <li className="hover:scale-105 transition-all  " >
                    <Link href={"https://www.typescriptlang.org/"} target="blank">
                      <Image src={"/icon/ts.png"} alt="" width={40} height={32} />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link href={"https://tailwindcss.com/"} target="blank">
                      <Image
                        src={"/icon/tailwind.png"}
                        alt=""
                        width={40}
                        height={36}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={"https://ui.shadcn.com/"} target="blank">
                      <Image
                        src={"/icon/headlessui.svg"}
                        alt=""
                        width={40}
                        height={32}
                        
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={"https://react.dev/"} target="blank">
                      <Image src={"/icon/react.png"} alt="" width={40} height={32} />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all  ">
                    <Link href={"https://nextjs.org/"} target="blank">
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
