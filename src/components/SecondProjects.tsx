import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SecondProjects() {
  return (
    <>
      <div>
        <h2
          className="text-white text-center text-xl 
          md:text-3xl font-semibold
        mb-8 mt-8"
        >
          Food website and App
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
          <div className="flex flex-col md:flex-row  container    px-0 ">
            <Link
              href={"https://food-app-web-nextjs.vercel.app/"}
              target="blank"
              className="relative z-10 bg-slate-950"
            >
              <Image
                className="mx-auto max-w-72 sm:max-w-xl md:max-w-xl relative z-10"
                src={"/food.png"}
                width={400}
                height={400}
                alt="none"
              />
            </Link>

            <div
              className="text-xl bg-slate-950 max-w-72 md:max-w-lg
           text-white italic  flex flex-col gap-6 
           items-center justify-center border "
            >
              <p className="mt-8 mx-3 text-sm font-semibold ">
                Responsive food restaurant website, seamlessly integrated with
                nextAuth and MongoDB for secure and efficient login. Elevate
                your dining adventure by logging in with Google for a fully
                immersive and convenient experience.
              </p>
              <div className="flex gap-4 relative z-10 text-sm mx-4">
                <Link 
                  href={"https://food-app-web-nextjs.vercel.app/"}
                  target="blank"
                >
                  <Button
                    className="active:translate-y-1 border-2 bg-slate-800 w-20
             border-white relative z-10 animate-bounce"
                  >
                    Visit site
                  </Button>
                </Link>
                <Link
                  href={"https://expo.dev/"}
                  className="border-2 rounded-md px-2 flex items-center
                   text-center animate-bounce  hover:text-green-500
                  delay-75"
                >
                  Download App 
                </Link>
              </div>
              <div className=" rounded-xl relative z-10 w-72 md:w-96">
                <h1 className="text-white italic font-semibold text-lg">
                  Tools I use on this project
                </h1>
                <ul
                  className="flex border-4 rounded-xl p-2 bg-slate-900
             gap-5 md:gap-6 items-center justify-center mt-4 mb-4 mx-4 "
                >
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image
                        src={"/icon/ts.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
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
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image
                        src={"/icon/react.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image
                        src={"/icon/nextjs.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image
                        src={"/icon/mongodb.svg"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all " id="bottom">
                    <Link href={""}>
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
