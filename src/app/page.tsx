import { Icons } from "@/components/icons";
import Info from "@/components/info";
import Profile from "@/components/profile";
import { links } from "@/constants";
import Link from "next/link";
import { main } from "./styles";

export default function Home() {
  return (
    <main className="max-w-[900px] mx-auto flex flex-col items-start gap-y-8">
      <div className="mt-20">
        <Profile />
      </div>
      <h1 className={`${main.heading1}`}>
        Programmer. Musician.
        <br />
        Video Editor.
      </h1>
      <h3 className={`${main.heading3}`}>hey, I&apos;m Samess 👋</h3>
      <Info />
      <div className="flex gap-x-8 mb-32">
        {links.map((link, index) => {
          const Icon = Icons[link.icon || "close"];
          return (
            <Link href={link.href} key={index}>
              <Icon className="h-6 w-6 hover:h-3/4 transition-all" />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
