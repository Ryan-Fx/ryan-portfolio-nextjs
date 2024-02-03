import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center py-5 md:py-8 space-x-2">
        <Link href="https://github.com/" target="_blank">
          <FaGithub className="h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
        </Link>
        <Link href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin className="h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <FaInstagram className="h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
        </Link>
      </div>
      <p className="mb-4 px-4 text-center text-gray-500 dark:text-white">
        <small className="mb-2 block text-xs md:text-base">
          &copy; 2024 Ryan Fx 😎 All{" "}
          <Link href={"/minee"} className="cursor-text">
            rights
          </Link>{" "}
          reserved.
        </small>
      </p>
    </footer>
  );
}
