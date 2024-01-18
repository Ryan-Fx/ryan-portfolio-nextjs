import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function NavLinks() {
  const [active, setActive] = useState("Home");

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          onClick={() => setActive(link.name)}
          className={clsx(
            "text-gray-500 hover:text-fuchsia-500 md:hover:text-black py-2 px-4 md:hover:bg-gray-200 rounded-full font-semibold transition duration-150",
            {
              "md:text-black bg-gray-200": active === link.name,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
