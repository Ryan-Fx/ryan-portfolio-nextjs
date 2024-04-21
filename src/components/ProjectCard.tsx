"use client";

import { cn } from "@/lib/utils";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useScroll, motion, useTransform } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./ui/button";
import { FaCode } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export default function ProjectCard({
  imgUrl,
  gitUrl,
  previewUrl,
  title,
  description,
  tags,
}: {
  imgUrl: string;
  gitUrl: string;
  previewUrl: string;
  title: string;
  description: string;
  tags: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.8", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <div className="md:hover:scale-110 transition-all duration-300">
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="relative rounded-lg overflow-hidden flex flex-col items-center justify-center group shadow-lg shadow-slate-500/60 dark:shadow-slate-500/30 p-2 dark:bg-gray-700 bg-teal-100"
      >
        <div className="flex items-center rounded-lg justify-center relative overflow-hidden">
          {/* image */}
          <Image
            src={imgUrl}
            width={500}
            height={500}
            alt="project"
            className="rounded-lg md:group-hover:scale-125 transition duration-300"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-[#181818] opacity-0 md:group-hover:opacity-80 transition-all duration-300"></div>

          {/* link */}
          <div className="absolute bottom-0 translate-y-full group-hover:md:-translate-y-16 group-hover:lg:-translate-y-[90px] group-hover:xl:-translate-y-20 transition-all duration-300 text-white flex space-x-2">
            <div className="rounded-full border-2 p-2 group/ryan cursor-pointer  border-gray-400 hover:border-white hover/ryan">
              <Link
                href={gitUrl}
                target="_blank"
                className="h-14 w-14 border-gray-400 hover/ryan:border-white rounded-full "
              >
                <CodeBracketIcon className="h-10 w-10 text-gray-400 group-hover/ryan:text-white " />
              </Link>
            </div>
            <div className="rounded-full border-2 p-2 group/ryan cursor-pointer  border-gray-400 hover:border-white hover/ryan">
              <Link
                target="_blank"
                href={previewUrl}
                className="h-14 w-14  border-gray-400 hover/ryan:border-white rounded-full group/ryan"
              >
                <EyeIcon className="h-10 w-10 text-gray-400 group-hover/ryan:text-white " />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-black mt-2 w-full flex justify-between md:flex-none">
          <div className="space-y-1">
            <h5 className="text-xl font-semibold dark:text-white">{title}</h5>
            <p
              className={cn(
                "text-muted-foreground h-[90px] text-sm",
                poppins.className
              )}
            >
              {description}
            </p>
          </div>
        </div>

        {/* mobile link */}
        <div className="md:hidden flex justify-end w-full p-1">
          <div>
            <Button
              variant={"outline"}
              size={"icon"}
              className="rounded-full mr-2"
              asChild
            >
              <Link href={gitUrl} target="_blank">
                <FaCode size={20} />
              </Link>
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              className="rounded-full"
              asChild
            >
              <Link href={previewUrl} target="_blank">
                <IoMdEye size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// return (
//   <div className="mb-4 sm:mb-0">
//     <div
//       className="h-52 md:h-72 rounded-t-xl relative group"
//       style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
//     >
//       <div className="overlay hidden justify-center items-center absolute inset-0 bg-[#181818] group-hover:flex group-hover:bg-opacity-80 space-x-2">
//         <Link
//           href={"#"}
//           className="h-14 w-14 border-2 border-gray-400 hover:border-white rounded-full relative group/ryan"
//         >
//           <CodeBracketIcon className="h-10 w-10 text-gray-400 group-hover/ryan:text-white absolute " />
//         </Link>
//         <Link
//           href={"#"}
//           className="h-14 w-14 border-2 border-gray-400 hover:border-white rounded-full relative group/ryan"
//         >
//           <EyeIcon className="h-10 w-10 text-gray-400 group-hover/ryan:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//         </Link>
//       </div>
//     </div>
//     <div className="text-white rounded-b-xl bg-[#181818] mt-2">
//       <h5 className="text-xl font-semibold">{title}</h5>
//       <p className="text-gray-400">{description}</p>
//     </div>
//   </div>
// );
