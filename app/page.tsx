"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <p className="text-2xl font-semibold">Building Course selling website</p>
      {session?.user ? (
        <button onClick={() => signOut()} className="bg-blue-500 text-sm">
          Logout
        </button>
      ) :
      <Link href="/login">Login</Link> 
      }
    </div>
  );
}
