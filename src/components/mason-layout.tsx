'use client';

import React from "react";
import Masonry from "react-masonry-css";
import ProjectCard from "./project-card";
import { ProjectType } from "@/types";

const breakpointColumnsObj = {
  default: 2,
  1000: 2,
  600: 1,
};

interface MasonryLayoutProps {
    items: ProjectType[]
}


const MasonryLayout = ({items}: MasonryLayoutProps) => (
  <Masonry
    className="flex animate-slide-fwd"
    breakpointCols={breakpointColumnsObj}
  >
    {items?.map((item, index) => (
      <ProjectCard key={index} project={item} className="max-w mt-5" />
    ))}
  </Masonry>
);

export default MasonryLayout;
