"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 0 bg-[#121212] bg-opacity-90">
      <div className="flex items-center justify-between py-2 px-4">
        <Link
          href={"/"}
          className="text-5xl font-semibold text-white hover:text-fuchsia-500 transition duration-300"
        >
          Ryan
        </Link>
        {/*web menu */}
        <div className="menu hidden md:block" id="navbar">
          <NavLinks />
        </div>

        {/* mobile-menu */}
        <div className="mobile-menu md:hidden">
          {!navbarIsOpen ? (
            <button
              onClick={() => setNavbarIsOpen(true)}
              className="flex items-center p-2 border-slate-200 text-slate-200 hover:text-yellow-300 hover:border-yellow-300"
            >
              <Bars4Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarIsOpen(false)}
              className="flex items-center p-2 border-slate-200 text-slate-200 hover:text-yellow-300 hover:border-yellow-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center">
        {navbarIsOpen && <NavLinks />}
      </div>
    </nav>
  );
}
