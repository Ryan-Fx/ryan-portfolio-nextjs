"use client";

import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import TabButton from "./TabButton";
import { useScroll, motion, useTransform } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-black">
        <li>Tailwind CSS</li>
        <li>Next JS</li>
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
      <ul className="list-disc pl-4 text-black">
        <li>DIPA University, Makassar</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 text-black">
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

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1.6"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <div
      className="text-white mb-6 md:mb-12 md:scroll-mt-16 mt-[160px]"
      id="about"
    >
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
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
            <h2 className="text-3xl text-gray-600 font-bold mb-2 md:text-5xl lg:text-6xl">
              About
            </h2>
            <p className="text-justify text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              quo perspiciatis cum perferendis consectetur incidunt animi est
              esse atque quos recusandae velit officiis sed amet autem rerum,
              nesciunt, quaerat repudiandae qui minus culpa a aspernatur tempore
              possimus. Error qui eveniet illum assumenda vero dolores eius ad
              omnis, dicta, asperiores maiores.
            </p>
            <div className="hidden lg:flex flex-col mt-5">
              <div className="md:flex justify-between text-2xl w-[300px] ">
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
              <div className="mt-2 h-[150px]">
                <div className="h-full">
                  {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-2 md:px-0 lg:hidden">
          <div className="md:flex justify-between w-[300px] md:px-3 md:text-xl text-lg">
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
      </motion.section>
    </div>
  );
}
