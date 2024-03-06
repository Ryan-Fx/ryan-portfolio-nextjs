"use client";

import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";

export default function LogoutButton() {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</Button>
  );
}
