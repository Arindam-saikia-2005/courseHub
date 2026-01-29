"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return (
    <div className="min-h-screen w-full">
      {/* 1st div */}
      <div className="bg-[#f1f1ff] flex flex-wrap justify-between justify-center gap-5 h-auto md:h-112.5 w-full p-25 md:p-10">
        <div className=" flex flex-wrap md:flex-col space-y-6 ">
          <h1 className="text-4xl">Web Dev + Devops Bootcamp</h1>

          <p className="text-xl clamp-3 max-w-xl">
            Master real-world engineering skills from zero to production. Build
            scalable web apps , deploy on cloud infrastructure, and create
            blockchain applications with hands-on mentorship
          </p>
        </div>

        <div className=" md:w-100 h-auto rouned-2xl">
          <img
            className="  rounded-t-2xl"
            src="/course-image.jpg"
            alt="course-image"
          />
          <div className="w-full bg-[#001959] p-3 rounded-b-2xl">
            <p className="text-white font-semibold">Arindam Saikia</p>
            <p className="text-white text-sm">Senior Engineer & Mentor</p>
          </div>
        </div>
      </div>

      {/* 2nd div */}

      <div className="flex flex-wrap justify-between gap-4 h-auto w-full bg-[#FAFAFA] p-20">
        <div className="border border-gray-500 rounded-3xl p-16 space-y-4">
          <span className="text-xl font-semibold text-[#001959]">Web dev</span>
          <img
            className="h-[224px] w-[508px]"
            src="/first-img.png"
            alt="webdev-img"
          />

          <span className="text-xl font-semibold text-[#001959]">Devops</span>
          <img
            className="h-[185px] w-[508px]"
            src="/second-img.png"
            alt="devops-img"
          />
        </div>

        <div className="md:h-97.5 md:w-112.25 w-129.5 border p-5 border-gray-500 rounded-2xl">
          <img
            className="h-55 w-97.75 mx-auto rounded-2xl"
            src="/course-image.jpg"
            alt="course-image"
          />

          <div className="flex flex-col mt-4 space-y-3">
            <span className="text-2xl font-semibold">₹3999 </span>
            <button className="w-full bg-[#001959] text-white py-3 rounded-2xl text-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
