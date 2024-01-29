"use client";

import { signIn } from "next-auth/react";

export default function LoginForm() {
  const google = () => signIn("google", { callbackUrl: "/minee" });

  return (
    <div className="w-[400px] rounded-lg p-10 shadow-xl shadow-black/50">
      <div className="mt-2 bg-blue-500">
        <button onClick={google}>Login with Google</button>
      </div>
    </div>
  );
}
