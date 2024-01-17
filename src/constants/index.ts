import { LinkItem, ProjectType } from "@/types";

export const links: LinkItem[] = [
	{
		name: "Github",
		href: "https://github.com/samezzz",
		icon: "github",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/samuel-essilfie-274684252/",
		icon: "linkedIn",
	},
	{
		name: "Twitter",
		href: "https://twitter.com/_Samess",
		icon: "twitter",
	},
];

export const projects: ProjectType[] = [
	{
		name: "QCC",
		description:
			"A comprehensive Database Management System tailored specifically for our church community. This innovative web application serves as a central hub, effortlessly managing member information, event coordination, resource allocation, and communication channels.",
		href: "https://qcc.vercel.app",
		domain: "qcc.vercel.app",
		image: "/qcc.jpeg",
		unique: "50+ Users",
	},
	{
		name: "Daily Counsel",
		description:
			"This Web Blog app is where you can find inspiring messages shared by our Bishop. It's like a peaceful corner online where you can read and reflect on these messages. It's all about helping people connect with meaningful thoughts and grow spiritually.",
		href: "https://evangelist-dag-devotionals.vercel.app",
		domain: "evangelist-dag-devotionals.vercel.app",
		image: "/quietTime.jpeg",
		unique: "100+ Users",
	},
	{
		name: "Danebes",
		description:
			"A functional landing page for Danebes Biomedical Services. Danebes specializes in offering reagents, Mindray machines, and top-notch services related to these products. The landing page showcases the services and products offered, creating a welcoming and informative platform for potential clients.",
		href: "https://danebes.vercel.app",
		domain: "danebes.vercel.app",
		image: "/next.svg",
		unique: "1K+ Views",
	},
];
