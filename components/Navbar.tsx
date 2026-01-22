
"use client"
import { signOut } from "next-auth/react";

export default function Page(){
    return (
        <nav className="w-full  flex justify-between p-5 border-3 border-b-gray-200">
             <div>
               <p className="font-semibold text-3xl">COURSE HUB</p>
             </div>

             <button onClick={()=>signOut()} className="bg-gray-400 rounded-lg text-sm font-bold px-4 py-2">logout</button>
        </nav>
    )
} 