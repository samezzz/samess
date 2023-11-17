import React from "react";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { main } from "@/app/styles";

interface ProjectCardProps {
  project: ProjectType;
  className: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <Link href={project.href ? project.href : "/"}>
      <div className={`${className} px-2 mx-2 `}>
        <div className="card">
          <div className="">
            <Image
              src="/vercel.svg"
              width={300}
              height={300}
              alt="Project image"
              className=""
            />
            <h3 className={`text-xl mt-6 font-semibold`}>{project.name}</h3>
            <p className={`${main.paragraph} mt-3 text-sm`}>
              {project.description}
            </p>
            <div className="flex gap-x-3 mt-6 items-center text-sm link">
              <LinkIcon className="h-4 w-4" />
              {project.domain}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
