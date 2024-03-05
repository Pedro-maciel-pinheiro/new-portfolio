import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SecondProjects() {
  return (
    <>
      <div className="bg-black">
        <h2
          className="text-white text-center text-3xl font-semibold
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
          <div className="flex flex-col lg:flex-row  container   px-0 ">
            <Link href={"https://food-app-web-nextjs.vercel.app/"}  
            target="blank" className="relative z-10 bg-slate-950">
              <Image
                className="mx-auto max-w-96 sm:max-w-xl md:max-w-xl relative z-10"
                src={"/food.png"}
                width={700}
                height={400}
                alt="none"
              />
            </Link>

            <div
              className="text-xl bg-slate-950
           text-white italic  flex flex-col gap-6 items-center justify-center border "
            >
              <p className="mt-8 mx-3 font-semibold">
                Responsive food restaurant website, seamlessly integrated with
                nextAuth and MongoDB for secure and efficient login. Elevate
                your dining adventure by logging in with Google for a fully
                immersive and convenient experience.
              </p>

              <Link
                href={"https://food-app-web-nextjs.vercel.app/"}
                target="blank"
              >
                <Button
                  className="active:translate-y-1 border-2 bg-slate-800 w-36
             border-white relative z-10 animate-bounce"
                >
                  Visit site
                </Button>
              </Link>
              <Link
                href={"https://expo.dev/"}
                className="border-2 rounded-xl px-2  text-center"
              >
                Download App version
              </Link>

              <div className=" rounded-xl relative z-10 ">
                <h1 className="text-white italic font-semibold text-xl">
                  Tools I use on this project
                </h1>
                <ul
                  className="flex border-4 rounded-xl p-2 bg-slate-900
             gap-8 items-center justify-center mt-4 mb-4 "
                >
                  <li className="hover:scale-105 transition-all ">
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
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image src={"/react.png"} alt="" width={40} height={32} />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image
                        src={"/nextjs.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image
                        src={"/mongodb.svg"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all ">
                    <Link href={""}>
                      <Image src={"/auth.png"} alt="" width={40} height={32} />
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
