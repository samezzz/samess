import { Icons } from "@/components/icons";
import Info from "@/components/info";
import { links } from "@/config/nav-config";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-y-8">
      <h1 className="text-5xl font-medium mt-24 leading-[54px]">
        Programmer. Musician.
        <br />
        Video Editor.
      </h1>
      <h3 className="text-2xl font-semibold">hey, I&apos;m Samess 👋</h3>
      <Info />
      <div className="flex gap-x-6 mb-32">
        {links.map((link, index) => {
          const Icon = Icons[link.icon || "close"];
          return (
            <Link href={link.href} key={index}>
              <Icon className="h-6 w-6" />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
