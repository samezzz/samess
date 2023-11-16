import React from "react";
import { main } from "../styles";
import { projects } from "@/constants";
import MasonryLayout from "@/components/mason-layout";
import { Droplets } from "lucide-react";

const Projects = () => {
  return (
    <div className="flex flex-col items-start gap-y-8">
        <Droplets className="mt-20 h-12 w-12 md:h-18 md:w-18 text-blue-500" />
      <h1 className={`${main.heading1}`}>
        Creating Ripples: <br /> My Journey🚀 in Making an Impact.
        <br />
      </h1>
      <p className={`${main.paragraph}`}>
        I&apos;ve been fortunate to dive into numerous captivating projects
        throughout my journey, and here are a few that stand out as my proudest
        achievements. Moreover, I&apos;m actively engaged in current projects
        that are shaping up to be significant milestones. Stay tuned for updates
        and insights as these endeavors evolve
      </p>
      <div>
        {
          projects && (
            <MasonryLayout items={projects} />
          )
        }
      </div>
    </div>
  );
};

export default Projects;
