import { projects } from "@/constants";
import React from "react";
import MasonryLayout from "./mason-layout";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectType;
  className: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div className={`${className} px-2 mx-2`}>
      <div className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
        <div>
          <Image src="/vercel.svg" width={60} height={60} alt="" />
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <Link href={project.href ? project.href : "/"}></Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
