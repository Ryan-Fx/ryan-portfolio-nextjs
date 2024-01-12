import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className="text-blue-500 hover:text-fuchsia-500  p-2 rounded-md font-semibold transition duration-150"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
