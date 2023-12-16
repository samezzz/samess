import { Icons } from "@/components/icons";
import Info from "@/components/info";
import Profile from "@/components/profile";
import { links } from "@/constants";
import Link from "next/link";
import { main } from "./styles";
import HeroText from "@/components/hero-text";

export const metadata = {
	title: "Home",
	description: "So this is me",
};

export default function Home() {
	return (
		<main className="max-w-[900px] mx-auto flex flex-col items-start gap-y-8">
			<div className="mt-20">
				<Profile />
			</div>
			<HeroText />
			<h3 className={`${main.heading3}`}>hey, I&apos;m Samess 👋</h3>
			<p className={`${main.paragraph}`}>
				I&apos;m on a journey to blend melodies on the bass guitar and keyboard while
				delving into the realms of programming languages to help build the future of the web
				<Link
					href="/about"
					className="underline tracking-[3px] hover:text-blue-300 transition-all duration-500 ease-in-out ml-1 text-2xl"
				>
					...
				</Link>
			</p>
			<div className="flex gap-x-8 mb-32">
				{links.map((link, index) => {
					const Icon = Icons[link.icon || "close"];
					return (
						<Link href={link.href} key={index}>
							<Icon className="h-6 w-6 hover:h-3/4 transition-all duration-500 ease-in-out" />
						</Link>
					);
				})}
			</div>
			<p className="text-sm dark:text-[#D4D4D4] italic">psalmuelselfie@gmail.com</p>
		</main>
	);
}
