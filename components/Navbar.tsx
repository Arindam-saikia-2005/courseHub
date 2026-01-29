"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Page() {
  const { data: session } = useSession();

  return (
    <nav className="w-full  flex justify-between items-center p-5 border-2 border-b-gray-100  ">
      <div className="flex space-x-4 px-5">
        <p className="font-semibold ">COURSE HUB</p>
        <Link href="/">
          <p className="text-blue-800">Home</p>
        </Link>
        <Link href="/courses">
          <p className="text-blue-800">courses</p>
        </Link>
      </div>

      <div className="space-x-4">
        {!session?.user ? (
          <Link href="/signup">
            <button className="bg-gray-100 px-6 py-2 text-[#1A3069] hover:bg-gray-300 border border-blue-950 rounded-md">
              Sign Up
            </button>
          </Link>
        ) : null}
        {session?.user ? (
          <button
            onClick={() => signOut()}
            className="bg-[#1A3069]  px-6 py-2 text-white rounded-md"
          >
            Log out
          </button>
        ) : (
          <Link href="/login">
            <button className="bg-[#1A3069]  px-6 py-2 text-white rounded-md">
              Log in
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
