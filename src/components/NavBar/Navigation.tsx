"use client";
import Link from "next/link";

import { MobileNavbar } from "./MobileNavbar";
import { GithubIcon, LinkedinIcon, PhoneCallIcon } from "lucide-react";
import { useEffect, useState } from "react";

const navList = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Skills",
    href: "#Skill",
  },
  {
    title: "Projects",
    href: "#Projects",
  },
];

export function Navigation() {
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const changeWhileScroll = () => {
      if (window.scrollY >= 5) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeWhileScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeWhileScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="absolute z-40">
        <MobileNavbar />
      </div>
      <nav className="fixed w-screen px-4 top-2 z-40 hidden md:block ">
        <div
          className={`  max-w-7xl flex items-center justify-between mx-auto
             border-white  backdrop-blur transition-all
          duration-700 z-50  border-white/40 ${navScroll ? "py-3 border-2 rounded-md " : "border-b-2"}`}
        >
          <p className="font-semibold text-2xl text-white mx-2">Pedro Maciel</p>
          <div
            className={`flex items-center  gap-4 text-white  px-16 py-1 rounded-full transition-all duration-500
           ${navScroll? "bg-slate-800 border-2":"bg-transparent"}`}
          >
            {navList.map((nav) => {
              return (
                <div 
                  className="text-muted-foreground 
              hover:text-primary hover:underline active:translate-y-1"
                  key={nav.title}
                >
                  <Link className="text-white " href={nav.href}>
                    {nav.title}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-6  mx-2">
            <Link
              href={"https://www.linkedin.com/in/jpmp1998/"}
              target="blank"
              className=" hover:text-blue-500 text-white"
            >
              <LinkedinIcon />
            </Link>
            <Link
              href={"https://github.com/Pedro-maciel-pinheiro"}
              target="blank"
              className=" hover:text-purple-600 text-white"
            >
              <GithubIcon />
            </Link>
            <Link
              href={"https://web.whatsapp.com/send?phone=5561998516239"}
              target="blank"
              className=" hover:text-green-600 text-white"
            >
              <PhoneCallIcon />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
