"use client";

import React, { useState } from "react";
import SkillButton from "./skill-button";

const skillsData = [
  {
    id: 13,
    name: "HTML",
    tag: ["All", "Front End"],
  },
  {
    id: 5,
    name: "Tailwind CSS",
    tag: ["All", "Front End"],
  },
  {
    id: 3,
    name: "React",
    tag: ["All", "Front End"],
  },
  {
    id: 4,
    name: "Next JS",
    tag: ["All", "Front End"],
  },

  {
    id: 6,
    name: "Prisma",
    tag: ["All", "Back End"],
  },
  {
    id: 8,
    name: "PostgreSQL",
    tag: ["All", "Back End"],
  },
  {
    id: 11,
    name: "MySQL",
    tag: ["All", "Back End"],
  },
  {
    id: 9,
    name: "Git",
    tag: ["All", "Tools"],
  },
  {
    id: 10,
    name: "GitHub",
    tag: ["All", "Tools"],
  },
  {
    id: 12,
    name: "Framer Motion",
    tag: ["All", "Front End"],
  },
];

export default function Skills() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredSkills = skillsData.filter((skill) => skill.tag.includes(tag));

  return (
    <section className="scroll-mt-24 md:my-24" id="skills">
      <h2 className="text-2xl lg:text-5xl font-bold text-gray-500 text-center">
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
          <p
            key={skill.id}
            className="bg-fuchsia-500 shadow-md shadow-slate-500/50 text-white py-2 px-6 rounded-full hover:scale-110 hover:bg-pink-400 font-semibold transition animate-bounce"
          >
            {skill.name}
          </p>
        </div>
      ))}
      <div className="mb-16 md:mb-0"></div>
    </section>
  );
}
