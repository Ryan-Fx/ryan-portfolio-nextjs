"use client";

import NavLinks from "./NavLinks";
import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ThemeSwitch } from "./theme-switch";
import { Button } from "./ui/button";

export default function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10">
      <div className="relative">
        {/*web menu */}
        <div className="flex justify-between items-center md:pt-6">
          <div className="w-full flex justify-center">
            <div className="">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="hidden md:flex  z-10 bg-opacity-60 backdrop-blur-[0.5rem] bg-white d rounded-full shadow-lg shadow-slate-500/30 py-2 px-5 space-x-2"
              >
                <NavLinks />
              </motion.div>
            </div>
          </div>
          {/* dark mode */}
          <div className="hidden md:flex px-4">
            <ThemeSwitch />
          </div>
        </div>

        {/* mobile-menu */}
        <div className="md:hidden flex flex-col w-full absolute top-0">
          <div className="mobile-menu flex justify-between items-center px-4 bg-white bg-opacity-60 backdrop-blur-[0.5rem]">
            <div className="">
              <ThemeSwitch />
            </div>
            {!navbarIsOpen ? (
              <button
                onClick={() => setNavbarIsOpen(true)}
                className="flex items-center p-4 border-slate-200 text-fuchsia-500 dark:text-black"
              >
                <Bars4Icon className="h-8 w-8" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarIsOpen(false)}
                className="flex items-center p-4 border-slate-200 text-fuchsia-500 dark:text-black"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
            )}
          </div>

          {/* mobile menu content */}
          <div
            className={clsx(
              "flex flex-col text-center -translate-x-full transition duration-300 bg-white bg-opacity-60 backdrop-blur-[0.5rem]",
              {
                "translate-x-0": navbarIsOpen,
              }
            )}
          >
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
}
