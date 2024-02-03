import { signOut } from "next-auth/react";
import React from "react";

export default function MsgButton() {
  return (
    <button
      className="bg-yellow-500"
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
    >
      Sign out
    </button>
  );
}
