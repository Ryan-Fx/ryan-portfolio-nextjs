import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function NavLinks() {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 text-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          onClick={() => setActive(link.name)}
          className={clsx(
            "text-gray-500 dark:text-gray-400 hover:text-fuchsia-500 md:hover:text-black dark:md:hover:text-white py-2 px-4 rounded-full font-semibold transition duration-150 relative",
            {
              "md:text-black dark:md:text-white text-fuchsia-500":
                active === link.name,
            }
          )}
        >
          {link.name}
          {link.name === active && (
            <motion.span
              layoutId="active"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="md:bg-gray-200 dark:md:bg-gray-600 absolute inset-0 rounded-full -z-10"
            ></motion.span>
          )}
        </Link>
      ))}
    </div>
  );
}
