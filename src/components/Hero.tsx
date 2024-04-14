"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { HoverCardDemo } from "./card-hover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Karla, Poppins } from "next/font/google";
import Link from "next/link";
import {
  FaArrowAltCircleDown,
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export default function Hero() {
  return (
    <section
      className="scroll-mt-[100rem] px-8 lg:px-14 xl:px-[220px]"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-12"
      >
        <div className="col-span-7 place-self-center space-y-4 mb-6 md:mb-0 text-center md:text-left">
          <h1
            className={cn(
              "text-fuchsia-500 text-2xl md:text-4xl lg:text-5xl font-extrabold"
            )}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Hello! I'm <br />
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ryan",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "focusing on Next JS",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p
            className={cn(
              "text-lg lg:text-2xl font-medium text-muted-foreground tracking-wider",
              karla.className
            )}
          >
            A web developer with a passion for creating engaging, entertaining
            user experiences and responsive web design.
            <br />
            <span className="hidden lg:block">
              You can find me on
              <HoverCardDemo />
              😎
            </span>
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <Link href="https://github.com/Ryan-Fx" target="_blank">
              <FaGithub className="h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ryan-fx-5921872b8"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
            </Link>
            <Link href="https://instagram.com/fx.ryan" target="_blank">
              <FaInstagram className="h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3 space-x-2 sm:space-x-3"
          >
            <Button className="hover:scale-110 transition rounded-full" asChild>
              <Link href={"#contact"}>
                Contact Me <FaArrowRight size={16} className="ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="hover:scale-110 transition rounded-full shadow-lg"
            >
              <Link
                href={
                  "https://docs.google.com/document/d/16IBKBDKwbmZY76pvDuqxJxskaTzdoeY5YHRjw9vxEaQ/edit?usp=sharing"
                }
                target="_blank"
              >
                Download CV
                <IoDownloadOutline size={20} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
        <div className="col-span-5 place-self-center group">
          <div className="rounded-full group-hover:scale-110 group-hover:-rotate-12 transition duration-700 bg-gradient-to-r from-fuchsia-400 to-pink-300 dark:bg-gradient-to-r dark:from-fuchsia-900 dark:to-pink-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={"/images/logo.png"}
              width={500}
              height={500}
              alt={"Hero"}
              className="rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
