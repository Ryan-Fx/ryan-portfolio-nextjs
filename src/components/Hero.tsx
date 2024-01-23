"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { HoverCardDemo } from "./card-hover";

export default function Hero() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-12"
      >
        <div className="col-span-7 place-self-center space-y-4 mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-rose-500 text-2xl md:text-4xl lg:text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Hello, I'm <br />
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
          <p className="text-gray-400 text-lg lg:text-xl tracking-wide">
            Please check my <HoverCardDemo />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sequi mollitia facilis officia amet aspernatur ab voluptas delectus
            excepturi labore. Debitis earum at maiores. Officia debitis commodi
            ducimus est libero.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <button className="py-3 px-6 w-full sm:w-fit sm:mr-3 rounded-full font-semibold  hover:scale-110 transition text-black bg-white shadow-lg shadow-black/5">
              Contact Me
            </button>
            <button className="py-3 px-6 w-full sm:w-fit rounded-full font-semibold text-white border bg-slate-800 hover:bg-slate-950 hover:scale-110 transition">
              Download CV
            </button>
          </motion.div>
        </div>
        <div className="col-span-5 place-self-center group">
          <div className="rounded-full group-hover:scale-110 group-hover:-rotate-12 transition duration-700 bg-gradient-to-r from-fuchsia-400 to-pink-300 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={"/images/hero.png"}
              width={500}
              height={500}
              alt={"Hero"}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
