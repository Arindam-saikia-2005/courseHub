"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function page() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "something went wrong!");
    }

    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full flex-col">
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col border rounded-lg px-4 py-2 items-center justify-center space-y-5">
          <label className="self-start">Username</label>
          <input
            className="border border-gray-400  px-10 h-8  rounded-sm"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="self-start">Email</label>
          <input
            className="border border-gray-400 px-10 h-8  rounded-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="self-start">Password</label>
          <input
            className="border border-gray-400  px-10 h-8  rounded-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 rounded-md px-4 py-2" type="submit">
            Submit
          </button>
        </div>
      </form>
      <p className="text-sm">Already have an Account ? <Link href="/login"><span className="text-blue-600">Login</span></Link></p>
    </div>
  );
}

export default page;
