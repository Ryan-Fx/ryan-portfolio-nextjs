"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-end md:justify-center w-full ">
      {/*web menu */}
      <div className="flex justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex fixed top-5 z-10 bg-opacity-60 backdrop-blur-[0.5rem] bg-white rounded-full shadow-lg shadow-black/5 py-2 px-5 space-x-2"
          id="navbar"
        >
          <NavLinks />
        </motion.div>
      </div>

      {/* mobile-menu */}
      <div className="md:hidden flex flex-col z-20 fixed w-full bg-white bg-opacity-60 backdrop-blur-[0.5rem]">
        <div className="mobile-menu flex justify-end">
          {!navbarIsOpen ? (
            <button
              onClick={() => setNavbarIsOpen(true)}
              className="flex items-center p-4 border-slate-200 text-black hover:text-fuchsia-500 hover:border-yellow-300"
            >
              <Bars4Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarIsOpen(false)}
              className="flex items-center p-4 border-slate-200 text-black hover:text-fuchsia-500 hover:border-yellow-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="flex flex-col text-center p-4">
          {navbarIsOpen && <NavLinks />}
        </div>
      </div>
    </nav>
  );
}
