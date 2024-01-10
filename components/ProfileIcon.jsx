"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';

export default function ProfileIcon() {
  const { data: session, status } = useSession();


  if (status === "authenticated") {
    return (
      <div className="flex gap-5">
        <Image
          src={session.user.image}
          alt="profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <button onClick={() => {signOut();toast( 'You have been signed out')}}>Sign Out</button>
      </div>
    );
  }

  return <></>
}
