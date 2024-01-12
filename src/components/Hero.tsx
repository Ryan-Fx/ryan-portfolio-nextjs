"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 place-self-center space-y-4 mb-6 md:mb-0 text-center md:text-left">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-teal-300 text-2xl md:text-4xl lg:text-5xl font-extrabold">
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
                "Next JS Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sequi mollitia facilis officia amet aspernatur ab voluptas delectus
            excepturi labore. Debitis earum at maiores. Officia debitis commodi
            ducimus est libero.
          </p>
          <div className="space-y-3">
            <button className="py-3 px-6 w-full sm:w-fit sm:mr-2 rounded-full font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-500">
              Hire Me
            </button>
            <button className="py-3 px-6 w-full sm:w-fit rounded-full font-semibold bg-transparent text-white border hover:bg-slate-900">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-fuchsia-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={"/images/hero.png"}
              width={500}
              height={500}
              alt={"Hero"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
