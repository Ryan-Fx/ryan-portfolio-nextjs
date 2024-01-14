"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Tailwind CSS</li>
        <li>Next.js</li>
        <li>Prisma</li>
        <li>Laravel</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "educations",
    content: (
      <ul>
        <li>DIPA University, Makassar</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Lorem, ipsum.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="space-y-4 md:space-y-0 py-8 md:grid md:grid-cols-2">
        <div className="p-2 lg:px-4">
          <Image
            className="rounded-lg mx-auto w-full"
            src={"/images/about.png"}
            width={500}
            height={500}
            alt={"about image"}
          />
        </div>
        <div className="p-2">
          <h2>About</h2>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quo
            perspiciatis cum perferendis consectetur incidunt animi est esse
            atque quos recusandae velit officiis sed amet autem rerum, nesciunt,
            quaerat repudiandae qui minus culpa a aspernatur tempore possimus.
            Error qui eveniet illum assumenda vero dolores eius ad omnis, dicta,
            asperiores maiores.
          </p>
        </div>
      </div>
      <div className="flex flex-col px-2">
        <div className="md:flex justify-between w-[300px] md:mx-auto">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("educations")}
            active={tab === "educations"}
          >
            Educations
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            Certifications
          </TabButton>
        </div>
        <div className="mt-2 h-[150px] md:px-3">
          <div className="h-full">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
