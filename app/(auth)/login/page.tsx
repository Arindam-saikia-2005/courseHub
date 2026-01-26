"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });

      if (res?.error) {
        toast.error("login error");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="text-3xl font-semibold">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex border-amber-200 border px-4 py-2 items-center justify-center flex-col space-y-3">
          <label className="self-start">Email</label>
          <input
            className=" border border-gray-400 px-10 h-8  rounded-sm"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="self-start">Password</label>
          <input
            className=" border border-gray-400 px-10 h-8  rounded-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-400 px-4 py-2 rounded-md text-sm"
            type="submit"
          >
            Submit
          </button>
        </div>
        <p className="text-sm text-center">
          Don't have an account ?{" "}
          <Link href="/signup">
            <span className="text-blue-600">register</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default page;
