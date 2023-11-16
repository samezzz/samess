import Link from "next/link";
import React from "react";
import { SocialHoverCard } from "./hover-card";
import { main } from "@/app/styles";

const Info = () => {
  return (
    <section className="flex flex-col items-start gap-y-8">
      <p className={`${main.paragraph}`}>
        I&apos;m a fullstack developer and a Biomedical Engineering student with
        a passion for music, coding, video editing, and exploring the
        intricacies of the Bible. I&apos;m on a journey to blend melodies on the
        bass guitar and keyboard while delving into the realms of programming
        languages to help build the future of the web.
      </p>

      <p className={`${main.paragraph}`}>
        I&apos;ve dealt with programming languages like Python, JavaScript,
        Typescript, C, C++, Go and I think I&apos;d want to further navigate the
        world of frameworks like React, and Nextjs.
      </p>

      <p className={`${main.paragraph}`}>
        Eager to share insights, I&apos;m brewing content centered around the
        Bible and
        <Link
          href="https://www.youtube.com/@DagHewardMillsvideos"
          className="dark:text-gray-200 underline underline-offset-2"
        >
          <SocialHoverCard text="Evangelist Dag Heward-Mills" />
        </Link>, aiming to fuse engaging visuals and top-notch audio to deliver
        enriching experiences. Currently honing my skills in video editing,
        I&apos;m crafting a distinctive persona for an entertaining touch in my
        upcoming...
      </p>
    </section>
  );
};

export default Info;
