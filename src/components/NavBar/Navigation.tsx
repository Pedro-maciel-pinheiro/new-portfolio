"use client";
import Link from "next/link";


import { ShadeMenu } from "./ShadeMenu";
import { GithubIcon, LinkedinIcon, PhoneCallIcon } from "lucide-react";

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
  return (
    <>
      <div className="absolute z-40">
        <ShadeMenu />
      </div>
      <nav className="fixed w-screen px-4 top-2 z-30 hidden md:block ">
        <div className="py-3 container flex items-center justify-between
         rounded-md z-50 bg-transparent border-2 border-white">
          <div className="absolute left-0 ml-5"></div>
          <p className="font-semibold italic text-2xl text-white">Pedro Maciel</p>
          <ul className="flex items-center  gap-4 text-white border-2 px-16 py-1 rounded-full
          bg-slate-800">
            {navList.map((nav) => {
              return (
                <li
                  className="text-muted-foreground 
              hover:text-primary hover:underline active:translate-y-1"
                  key={nav.title}
                >
                  <Link className="text-white " href={nav.href}>{nav.title}</Link>
                  
                </li>
              );
            })}
          </ul>
         
          <div className="flex items-center justify-center gap-6  ">
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
