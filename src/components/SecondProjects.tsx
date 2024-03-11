import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SlideImg from "./slideImg/slide-1";

export function SecondProjects() {
  return (
    <>
      <div>
        <h2
          className="text-white text-center text-xl 
          md:text-3xl font-semibold
        mb-2 mt-16"
        >
          Food website and App
        </h2>
      </div>

      <div
        className=" text-white text-center  
    flex items-center justify-center  "
      >
        <div
          className="border-2 border-x-white rounded-xl shadow-xl
      shadow-black/60 
       "
        >
          <div className="flex flex-col  md:flex-row  container  px-0  max-w-72 sm:max-w-xl md:max-w-5xl">
            <Link
              href={"https://food-app-web-nextjs.vercel.app/"}
              target="blank"
              className="relative z-10 bg-slate-950 overflow-hidden flex justify-center items-center"
            >
              <SlideImg />
            </Link>

           

            <div
              className="text-xl bg-slate-950 max-w-72 md:max-w-80 mb-1 
           text-white  flex flex-col gap-4 
           items-center justify-center "
            >
              <p className="mt-1 mx-3 text-sm font-semibold text-left ">
                Responsive food restaurant website, seamlessly integrated with
                nextAuth and MongoDB for secure and efficient login. logging in with Google for a fully
                experience.
              </p>
              <div className="flex gap-4 relative z-20 text-sm mx-4">
                <Link
                  href={"https://food-app-web-nextjs.vercel.app/"}
                  target="blank"
                >
                  <Button
                    className="active:translate-y-1 border-2 bg-slate-800 w-20
             border-white relative z-10 animate-pulse"
                  >
                    Visit site
                  </Button>
                </Link>
                <Link
                  href={
                    "https://expo.dev//accounts/pedromaciel/projects/food-app/builds/ddad611d-000e-4846-ad7e-737e4cbf9d81"
                  } target="blank"
                  className="border-2 rounded-md px-2 flex items-center
                   text-center animate-pulse  hover:text-green-500
                  delay-75"
                >
                  Download App
                </Link>
              </div>
              <div className=" rounded-xl relative z-10 w-72 md:w-80">
                <h1 className="text-white  font-semibold text-lg md:mt-6">
                  Tools I use on this project
                </h1>
                <ul
                  className="flex border-4 rounded-xl p-1 bg-slate-900
             gap-4 md:gap-4 items-center justify-center mb-1 mx-4 "
                >
                  <li className="hover:scale-105 transition-all ">
                    <Link
                      href={"https://www.typescriptlang.org/"}
                      target="blank"
                    >
                      <Image
                        src={"/icon/ts.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
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
                  <li className="hover:scale-105 transition-all ">
                    <Link href={"https://react.dev/"} target="blank">
                      <Image
                        src={"/icon/react.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link href={"https://nextjs.org/"} target="blank">
                      <Image
                        src={"/icon/nextjs.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link
                      href={"https://account.mongodb.com/account/login"}
                      target="blank"
                    >
                      <Image
                        src={"/icon/mongodb.svg"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all " id="bottom">
                    <Link
                      href={"https://next-auth.js.org/getting-started/example"}
                      target="blank"
                    >
                      <Image
                        src={"/icon/auth.png"}
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
