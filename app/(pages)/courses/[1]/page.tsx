"use client";

import Footer from "@/components/Footer";

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

        <div className=" md:w-100 h-auto  rouned-2xl">
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

      {/* 3rd div */}

      <h1 className="font-semibold text-5xl text-center text-[#001959]">Who is This For? </h1>

      <div className="w-full h-auto flex flex-col md:flex-row flex-wrap gap-6 items-center p-5 md:p-20">
        <div className="p-5 w-full md:w-[30%] text-center space-y-3">
          <img
            className="h-[200px] w-full max-w-[300px] mx-auto rounded-lg"
            src="/beginner-image.jpeg"
            alt="beginner-image"
          />
          <p className="mt-2 font-semibold text-2xl text-[#001959]">Beginners in Tech</p>
          <p className="text-[#001959] line-clamp-2 text-sm">
            Those who want to start a career in software development with strong
            fundamentals.
          </p>
        </div>

        <div className="p-5 w-full md:w-[30%] text-center space-y-3">
          <img
            className="h-[200px] w-full max-w-[300px] mx-auto rounded-lg"
            src="/developer-image.jpeg"
            alt="developer-image"
          />
          <p className="mt-2 font-semibold text-2xl text-[#001959]">Self-taught Developers</p>
          <p className="text-[#001959] line-clamp-2 text-sm">
            People who already know the basics but need a structured roadmap and
            real projects to become job-ready.
          </p>
        </div>

        <div className="p-5 w-full md:w-[30%] text-center">
          <img
            className="h-[200px] w-full max-w-[300px] mx-auto rounded-lg"
            src="/professional-image2.jpeg"
            alt="professional-image"
          />
          <p className="mt-2 font-semibold text-3xl text-[#001959]">Working Professionals</p>
          <p className="text-[#001959] line-clamp-2 text-sm">
            Anyone looking to upgrade skills in Full-Stack + DevOps and grow
            into better roles in tech.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
