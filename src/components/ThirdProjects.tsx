import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ThirdProjects() {
  return (
    <>
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
            <Image
              className=" mx-auto  "
              src={"/shade.png"}
              width={800}
              height={600}
              alt="none"
            />

            <div
              className="text-2xl bg-slate-950
           text-white italic  flex flex-col gap-6 items-center justify-center border relative z-10    "
            >
              <p className="mt-8 mx-3 font-semibold">
                A modern website made with shadcn/ui .. each page using some
                shadcn/ui component to enhance or just to improve the user
                experience completely responsive for all screens
              </p>
              <Button
                className="active:translate-y-1 border-2 bg-slate-950
             border-white relative z-10"
              >
                Learn more <ArrowBigRight />
              </Button>

              <div className=" rounded-xl relative z-10">
                <h1 className="text-white italic font-semibold text-xl">
                  Tools I use on this projetc
                </h1>
                <ul
                  className="flex border-4 rounded-xl p-2 bg-slate-900
             gap-8 items-center justify-center mt-4 mb-4"
                >
                  <li className="hover:scale-105 transition-all">
                    <Link href={""}>
                      <Image src={"/ts.png"} alt="" width={40} height={32} />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all">
                    <Link href={""}>
                      <Image
                        src={"/tailwind.png"}
                        alt=""
                        width={40}
                        height={36}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all">
                    <Link href={""}>
                      <Image
                        src={"/shadcn.png"}
                        alt=""
                        width={40}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all">
                    <Link href={""}>
                      <Image src={"/react.png"} alt="" width={40} height={32} />
                    </Link>
                  </li>
                  <li className="hover:scale-105 transition-all">
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
