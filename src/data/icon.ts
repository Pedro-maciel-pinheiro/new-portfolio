import ReactIcon from "../assets/react.png";
import NextjsIcon from "../assets/nextjs.png";
import TypescripIcon from "../assets/ts.png";
import TailwindIcon from "../assets/tailwind.png";
import ShadeIcon from "../assets/shadcn.png";
import FramerIcon from "../assets/framer-motion.svg";
import HeadIcon from "../assets/headlessui.svg";

import { StaticImageData } from "next/image";

interface iconListProps {
  title: string;
  icon: StaticImageData;
  linkPath: string;
}

export const IconList: iconListProps[] = [
  {
    title: "React",
    icon: ReactIcon,
    linkPath: "https://react.dev/",
  },
  {
    title: "Next js",
    icon: NextjsIcon,
    linkPath: "https://nextjs.org/",
  },
  {
    title: "Typescript",
    icon: TypescripIcon,
    linkPath: "https://www.typescriptlang.org/",
  },
  {
    title: "Tailwind",
    icon: TailwindIcon,
    linkPath: "https://tailwindcss.com/",
  },
  {
    title: "Shadcn",
    icon: ShadeIcon,
    linkPath: "https://ui.shadcn.com/",
  },
  {
    title: "Headlessui",
    icon: HeadIcon,
    linkPath: "https://headlessui.com/",
  },
  {
    title: "Framer motion",
    icon: FramerIcon,
    linkPath: "https://www.framer.com/motion/",
  },
];
