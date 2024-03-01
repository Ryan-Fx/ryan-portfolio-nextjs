import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary py-4">
      <p className="px-4 text-center text-primary-foreground">
        <small className="block text-xs md:text-base">
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
