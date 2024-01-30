"use client";

import NavLinks from "./NavLinks";
import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ThemeSwitch } from "./theme-switch";

export default function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-end md:justify-center w-full">
      {/*web menu */}
      <div className="flex justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex fixed top-5 z-10 bg-opacity-60 backdrop-blur-[0.5rem] bg-white dark:bg-gray-800 rounded-full shadow-lg shadow-black/5 py-2 px-5 space-x-2"
          id="navbar"
        >
          <NavLinks />
        </motion.div>
      </div>
      {/* dark mode */}
      <div className="hidden md:flex fixed top-5 right-5 z-20">
        <ThemeSwitch />
      </div>

      {/* mobile-menu */}
      <div className="md:hidden flex flex-col z-20 fixed w-full ">
        <div className="mobile-menu flex justify-end bg-white bg-opacity-60 backdrop-blur-[0.5rem]">
          <div className="flex justify-end fixed left-5 top-4 pr-4 md:hidden">
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
    </nav>
  );
}
