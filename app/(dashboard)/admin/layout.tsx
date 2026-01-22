import React from "react";
import Sidebar from "@/components/Sidebar"

export default function LayoutPage({ children} : {children : React.ReactNode}) {
    return (
        <div className="bg-gray-50 min-h-screen">
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] ml-[max(5vw,25px)] my-8 text-gray-800 text-base">
          {children}
        </div>
      </div>
    </div> 
    )
}