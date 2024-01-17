import { Badge } from "@/components/ui/badge";
import { CardTitle, CardHeader, Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ProjectType } from "@/types";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import ProjectDescription from "./project-description";

interface ProjectCardProps {
	project: ProjectType;
	className: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
	return (
		<Link
			href={project.href ? project.href : "/"}
			target="_blank"
			className="relative overflow-hidden"
		>
			<div className={`${className} p-2 mx-[2.5px]`}>
				<Card className="card">
					<Image
						alt="Background Image"
						className="absolute inset-0 h-full w-full object-cover opacity-[0.15] blur-sm"
						height={200}
						width={200}
						src={project.image as string}
						style={{
							aspectRatio: "200/200",
							objectFit: "cover",
						}}
					/>
					<CardHeader className="relative px-6 py-4">
						<CardTitle className="font-bold text-2xl mb-2">{project.name}</CardTitle>
						<ProjectDescription description={project.description} />
					</CardHeader>
					<div className={cn("relative px-6 ", project.unique && "pb-2 mt-2")}>
						{project.unique ? (
							<Badge
								className={cn(
									"items-start justify-center mr-2 px-2 inline-flex gap-x-1 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
								)}
							>
								{project.unique}
								{project.name === "Danebes" ? (
									<Icons.views className="h-5 w-5 ml-1" />
								) : (
									<Icons.users className="h-4 w-4" />
								)}
							</Badge>
						) : (
							""
						)}
					</div>
					<div className="relative px-6 pb-6 pt-3 flex gap-x-2 text-sm link">
						<Icons.link className="h-4 w-4" />
						{project.domain}
					</div>
				</Card>
			</div>
		</Link>
	);
}
