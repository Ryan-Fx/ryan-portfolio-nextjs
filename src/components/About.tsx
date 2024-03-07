"use client";

import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Karla, Nanum_Pen_Script } from "next/font/google";
import { cn } from "@/lib/utils";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const nanum = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: ["400"],
});

// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-4 text-black dark:text-gray-200">
//         <li>Tailwind CSS</li>
//         <li>Next JS</li>
//         <li>Prisma</li>
//         <li>Laravel</li>
//         <li>PostgreSQL</li>
//         <li>MySQL</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "educations",
//     content: (
//       <ul className="list-disc pl-4 text-black dark:text-gray-200">
//         <li>DIPA University, Makassar</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-4 text-black dark:text-gray-200">
//         <li>Lorem, ipsum.</li>
//         <li>Lorem ipsum dolor sit.</li>
//         <li>Lorem, ipsum dolor.</li>
//       </ul>
//     ),
//   },
// ];

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
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <section
      className="mb-6 md:mb-12 md:scroll-mt-24 lg:mt-[150px] px-8 lg:px-14 xl:px-[220px]"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <h2
          className={cn(
            "text-2xl text-center md:text-4xl font-bold text-blue-500 dark:text-primary",
            karla.className
          )}
        >
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <Image
              className="rounded-lg mx-auto size-[400px]"
              src={"/images/about.png"}
              width={500}
              height={500}
              alt={"about image"}
            />
          </div>
          <div className="flex items-center p-2">
            <p
              className={cn(
                "text-lg md:text-xl text-muted-foreground tracking-wider",
                karla.className
              )}
            >
              A passionate web developer{" "}
              <span className={cn("text-rose-400 text-xl", nanum.className)}>
                (Junior developer for now)
              </span>
              , love to learn new things for the web. Try to enhance user
              interface to make better user experience.{" "}
              <span className="text-rose-400">I enjoy development</span> because
              of the satisfaction i get by overcoming challenges. i am motivated
              by the opportunity that software provides to positively impact the
              life of an individual, and the world as a whole.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
