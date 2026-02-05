"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export default function Page() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleChange = () => setIsOpen((prev) => !prev);

  return (
    <nav className="relative w-full flex justify-between items-center p-5 border-b border-gray-200">
      {/* Left */}
      <div className="flex items-center space-x-4 px-5">
        <p className="font-semibold text-xl">100<span className="text-[red]">x</span>devs</p>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-blue-800">
            Home
          </Link>
          <Link href="/courses" className="text-blue-800">
            Courses
          </Link>
        </div>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        {!session?.user && (
          <Link href="/signup">
            <button className="bg-gray-100 px-6 py-2 text-[#1A3069] border border-blue-950 rounded-md">
              Sign Up
            </button>
          </Link>
        )}

        {session?.user ? (
          <button
            onClick={() => signOut()}
            className="bg-[#1A3069] px-6 py-2 text-white rounded-md"
          >
            Log out
          </button>
        ) : (
          <Link href="/login">
            <button className="bg-[#1A3069] px-6 py-2 text-white rounded-md">
              Log in
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleChange} className="md:hidden">
        <IoMenu size={32} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 p-5 w-full h-screen bg-[#fafafa] z-50">
          <button
            onClick={toggleChange}
            className="absolute top-6 right-6 text-white"
          >
            <RxCross1 size={24} />
          </button>

          <ul className="flex flex-col gap-10 text-2xl   h-full text-[#001959] ">
            <li
            className="w-full p-2 border border-gray-400 bg-[#eeeeee] rounded-2xl " 
            onClick={toggleChange}>
              <Link
              className="text-[16px]"
               href="/">Home</Link>
            </li>
            <li
            className="w-full p-2 border border-gray-400 bg-[#eeeeee] rounded-2xl S" 
            onClick={toggleChange}>
              <Link
              className="text-[16px]"
               href="/courses">Courses</Link>
            </li>
            {!session?.user && (
              <Link href="/signup">
                <button className="bg-gray-100 px-6 w-full py-2 text-[#1A3069] border border-blue-950 rounded-2xl">
                  Sign Up
                </button>
              </Link>
            )}
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="bg-[#1A3069] px-6 py-2 w-full text-white rounded-2xl"
              >
                Log out
              </button>
            ) : (
              <Link href="/login">
                <button className="bg-[#1A3069] w-full px-6 py-2 text-white rounded-2xl">
                  Log in
                </button>
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
