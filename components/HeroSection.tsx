import CourseCard from "@/components/CourseCard";

export default function Page() {
  return (
    <div className="">
      {/* HeroSecion */}
      <div className="flex flex-wrap md:justify-between justify-center m-6 md:p-20">
        <div className="flex flex-wrap md:flex-col space-y-5 p-5">
          <h1 className="text-7xl font-semibold text-[#001959] clamp-3 max-w-xl  ">
            Master Full Stack Developement
          </h1>
          <p className="text-gray-600 max-w-xl clamp-3">
            Master Full Stack Development through hands-on open source projects.
            Join a community of developers transforming their careers with
            practical, real-world programming skills.
          </p>

          <div className="flex space-x-4">
            <button className="rounded-lg bg-gray-50 text-[#001959] border border-[#001959] px-4 py-3">
              Learn more
            </button>
            <button className="text-gray-50 bg-[#001959] px-4 py-3 rounded-lg">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="space-x-5">
          <img
            className="h-125 w-125 "
            src="/hero-img.webp"
            alt="course-image"
          />
        </div>
      </div>

      {/* Courses */}
      <div className="bg-[#001959]">
        <div className="p-4">
          <p className="text-white text-4xl">Featured Courses</p>
        </div>
        <div className="p-10 flex flex-wrap gap-6 justify-center items-center">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>

      {/* podcast section */}
      <div className="flex flex-wrap mx-auto gap-5  justify-center h-auto max-w-6xl rounded-2xl w-auto mt-20 mb-20 p-15 bg-[#001959]">
        <div>
          <h1 className="font-bold text-4xl text-white">
            The 100xdevs Podcast
          </h1>
          <p className="text-lg text-white">
            Unfiltered discussions on engineering, startups, and career growth
            with industry experts and successful developers
          </p>
        </div>
        <div className=" space-x-3 p-6 h-87.5 w-120 md:h-62.5 md:w-[320px] rounded-2xl flex bg-white justify-center flex-col">
          <div className="md:h-39.5 md:w-70">
            <iframe
              className="rounded-2xl"
              height={157}
              width={280}
              src="https://www.youtube.com/embed/dRXq81Om2a4?si=mkYX2vZvR6ZjPf8-"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="font-mono text-sm text-gray-400">
            How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)
          </p>
        </div>

        <div className=" p-6 h-87.5 w-120 md:h-62.5 md:w-[320px] rounded-2xl flex bg-white justify-center flex-col">
          <div className="md:h-39.5 md:w-70">
            <iframe
              className="rounded-2xl"
              height={157}
              width={280}
              src="https://www.youtube.com/embed/PZNgcH2Jtac?si=t5OKtQ2bH3CSMiFK"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="font-mono text-sm text-gray-400">
            How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)
          </p>
        </div>

        <div className=" p-6 h-87.5 w-120 md:h-62.5 md:w-[320px] rounded-2xl flex bg-white justify-center flex-col">
          <div className="md:h-39.5 md:w-70">
            <iframe
              className="rounded-2xl"
              height={157}
              width={280}
              src="https://www.youtube.com/embed/TbbCJQ4Vbko?si=8S1k214QpLfgE31d"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="font-mono text-sm text-gray-400">
            How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)
          </p>
        </div>
      </div>
    </div>
  );
}
