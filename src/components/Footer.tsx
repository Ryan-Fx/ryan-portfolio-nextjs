import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary py-4">
      <p className="px-4 text-center text-primary-foreground">
        <small className="block text-xs md:text-base md:hover:text-purple-500 transition duration-300">
          &copy; 2024 Ryan Fx 😎 All rights reserved.
        </small>
      </p>
    </footer>
  );
}
