"use client";
import { signOut } from "next-auth/react";

export default function Page() {
  return (
    <nav className="w-full  flex justify-between items-center  p-3  border-3 border-b-gray-200">
      <div className="flex space-x-4">
        <p className="font-semibold ">COURSE HUB</p>
        <p>courses</p>
      </div>

      <div className="space-x-4">
        <button className="bg-gray-100 px-6 py-2 text-[#1A3069] hover:bg-gray-300 border border-blue-950 rounded-md">
          Sign Up
        </button>
        <button className="bg-[#1A3069]  px-6 py-2 text-white rounded-md">
          Log in
        </button>
      </div>
    </nav>
  );
}
