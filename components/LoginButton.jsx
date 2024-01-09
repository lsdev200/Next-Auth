"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <>
    <button
      onClick={() => signIn("github")}
      className="mt-4 bg-black text-white px-6 py-3 rounded-lg"
    >
      Sign in with Github
    </button>
    <button
      onClick={() => signIn("google")}
      className="mt-4 bg-white text-black px-6 py-2 rounded-lg border-2  border-black"
    >
      Sign in with Google
    </button>
    </>
  );
}
