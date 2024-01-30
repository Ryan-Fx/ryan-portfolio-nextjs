"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function MineePage() {
  const { status } = useSession();
  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div>
      <p>Minee Page</p>
      <div>
        <button
          className="bg-yellow-500"
          onClick={() =>
            signOut({ callbackUrl: "http://localhost:3000/login" })
          }
        >
          Sign out
        </button>
      </div>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
    </div>
  );
}
