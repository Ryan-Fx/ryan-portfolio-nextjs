"use client";

import { signOut } from "next-auth/react";

export default function MineePage() {
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
    </div>
  );
}
