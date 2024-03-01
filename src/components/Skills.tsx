"use client";

import React, { useState } from "react";
import SkillButton from "./skill-button";
import { cn } from "@/lib/utils";
import { Karla, Nanum_Pen_Script } from "next/font/google";
import { FaGitAlt, FaGithub, FaHtml5 } from "react-icons/fa";
import {
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const nanum = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const skillsData = [
  {
    id: 13,
    name: "HTML",
    tag: ["All", "Front End"],
    icon: <FaHtml5 className="size-14" />,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    tag: ["All", "Front End"],
    icon: <SiTailwindcss className="size-14" />,
  },
  {
    id: 4,
    name: "Next JS",
    tag: ["All", "Front End"],
    icon: <SiNextdotjs className="size-14" />,
  },

  {
    id: 6,
    name: "Prisma",
    tag: ["All", "Back End"],
    icon: <SiPrisma className="size-14" />,
  },
  {
    id: 8,
    name: "PostgreSQL",
    tag: ["All", "Back End"],
    icon: <SiPostgresql className="size-14" />,
  },
  {
    id: 11,
    name: "MySQL",
    tag: ["All", "Back End"],
    icon: <GrMysql className="size-14" />,
  },
  {
    id: 9,
    name: "Git",
    tag: ["All", "Tools"],
    icon: <FaGitAlt className="size-14" />,
  },
  {
    id: 10,
    name: "GitHub",
    tag: ["All", "Tools"],
    icon: <FaGithub className="size-14" />,
  },
];

export default function Skills() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredSkills = skillsData.filter((skill) => skill.tag.includes(tag));

  return (
    <section
      className="scroll-mt-24 md:my-24 px-8 lg:px-14 xl:px-[220px]"
      id="skills"
    >
      <h2
        className={cn(
          "text-2xl md:text-4xl font-bold text-center text-blue-500 dark:text-primary",
          karla.className
        )}
      >
        Skills
      </h2>
      <div className="space-x-8 flex justify-start mb:pt-8 pt-5">
        <SkillButton
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <SkillButton
          onClick={handleTagChange}
          name="Front End"
          isSelected={tag === "Front End"}
        />
        <SkillButton
          onClick={handleTagChange}
          name="Back End"
          isSelected={tag === "Back End"}
        />
        <SkillButton
          onClick={handleTagChange}
          name="Tools"
          isSelected={tag === "Tools"}
        />
      </div>
      {filteredSkills.map((skill) => (
        <div key={skill.id} className="inline-flex pt-6 mr-4">
          <div
            key={skill.id}
            className={cn(
              "gap-2 px-4 flex flex-col items-center text-xl hover:scale-110 text-purple-500 dark:text-primary hover:text-rose-500 dark:hover:text-purple-500 mt-5 transition animate-bounce",
              nanum.className
            )}
          >
            <span>{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        </div>
      ))}
      <div className="mb-16 md:mb-0"></div>
    </section>
  );
}
