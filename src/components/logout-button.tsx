"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-yellow-500"
    >
      Sign out
    </button>
  );
}
