import { GithubIcon, LinkedinIcon, MapPin, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="container h-96 w-96  bg-slate-950
     flex items-center justify-center">
      <div className="flex  flex-col gap-6 mt-8 relative z-10 ">
        <p className="text-2xl font-semibold mb-2 mx-auto text-white">Contacts</p>
        <div className="flex gap-8 items-center justify-center">
          <Link
            href={"https://www.linkedin.com/in/jpmp1998/"}
            target="blank"
            className=" hover:text-blue-500 text-white"
          >
            <LinkedinIcon  size={30}/>
          </Link>
          <Link
            href={"https://github.com/Pedro-maciel-pinheiro"}
            target="blank"
            className=" hover:text-purple-600 text-white"
          >
            <GithubIcon size={30} />
          </Link>
          <Link
            href={"https://web.whatsapp.com/send?phone=5561998516239"}
            target="blank"
            className=" hover:text-green-600 text-white"
          >
            <PhoneCallIcon size={30} />
          </Link>
        </div>
        <p className="text-white">Joao pedro maciel pinheiro</p>
      </div>
    </footer>
  );
}
