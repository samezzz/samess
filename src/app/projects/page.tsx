import React from "react";
import { main } from "../styles";
import { projects } from "@/constants";
import MasonryLayout from "@/components/mason-layout";

const Projects = () => {
  return (
    <div className="flex flex-col items-start gap-y-8">
      <h1 className={`${main.heading1} mt-20`}>
        Creating Ripples: <br /> My Journey in Making an Impact.
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
