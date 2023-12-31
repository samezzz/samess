import React from "react";
import { main } from "../styles";
import Info from "@/components/info";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export const metadata = {
	title: "About",
	description: "Get to know me more",
};

const About = () => {
	return (
		<div className="max-w-[900px] mx-auto flex flex-col items-start gap-y-8">
			<div className="mt-20">
				<InfoCircledIcon className="w-16 h-16" />
			</div>
			<h1 className={`${main.heading1}`}>A little bit about myself</h1>
			<h3 className={`${main.heading3}`}>You wanna know more huh? 🙂</h3>
			<Info />
		</div>
	);
};

export default About;
