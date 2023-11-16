import React from "react";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link as LinkIcon } from "lucide-react";

interface ProjectCardProps {
  project: ProjectType;
  className: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div className={`${className} px-2 mx-2 my-4`}>
      <Dialog>
        <DialogTrigger asChild>
          <div className="px-4 py-8 relative cursor-pointer w-auto hover:shadow-lg hover:dark:shadow-white/20 rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
            <div className="">
              <Image
                src="/vercel.svg"
                width={60}
                height={60}
                alt="Project image"
                className=""
              />
              <h3 className={`text-xl mt-6 font-semibold`}>{project.name}</h3>
              <p className="mt-3">{project.description}</p>
              <div className="flex gap-x-3 mt-6 items-baseline">
                <LinkIcon className="h-4 w-4" />
                {project.domain}
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
            <DialogDescription className="gap-y-3 mt-4">
              {/* <AspectRatio ratio={16 / 9} className="bg-red-500">
                <Image
                  src={project.image ? project.image : "default"}
                  alt="Image"
                  width={100}
                  height={100}
                  className="rounded-md object-cove "
                />
              </AspectRatio> */}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <DialogFooter>
            <Link
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
              href={project.href ? project.href : "/"}
            >
              View Project
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectCard;
