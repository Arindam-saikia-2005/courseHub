import CourseCard from "@/components/CourseCard";

export default function Page() {
  return (
    <div className="w-full">
      {/* HeroSection */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between m-6 md:p-20 gap-10">
        <div className="flex flex-col gap-5 max-w-xl">
          <h1 className="text-4xl md:text-7xl font-semibold text-[#001959] line-clamp-3">
            Master Full Stack Development
          </h1>

          <p className="text-gray-600 line-clamp-3">
            Master Full Stack Development through hands-on open source projects.
            Join a community of developers transforming their careers with
            practical, real-world programming skills.
          </p>

          <div className="flex gap-4">
            <button className="rounded-lg bg-gray-50 text-[#001959] border border-[#001959] px-4 py-3">
              Learn more
            </button>
            <button className="text-gray-50 bg-[#001959] px-4 py-3 rounded-lg">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="w-full max-w-[500px]">
          <img
            className="w-full h-auto"
            src="/hero-img.webp"
            alt="course-image"
          />
        </div>
      </div>

      {/* Courses */}
      <div className="bg-[#001959]">
        <div className="p-6">
          <p className="text-white text-3xl md:text-4xl font-semibold">
            Featured Courses
          </p>
        </div>

        <div className="p-10 flex flex-wrap gap-6 justify-center">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>

      {/* Podcast Section */}
      <div className="mx-auto mt-20 mb-20 max-w-7xl rounded-2xl bg-[#001959] p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_3fr] items-start">
          {/* Text */}
          <div>
            <h1 className="font-bold text-3xl md:text-4xl text-white">
              The 100xdevs Podcast
            </h1>
            <p className="mt-3 text-white text-lg">
              Unfiltered discussions on engineering, startups, and career growth
              with industry experts and successful developers.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["dRXq81Om2a4", "PZNgcH2Jtac", "TbbCJQ4Vbko"].map((id) => (
              <div
                key={id}
                className="rounded-2xl bg-white p-6 flex flex-col gap-4"
              >
                <iframe
                  className="w-full aspect-video rounded-2xl"
                  src={`https://www.youtube.com/embed/${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="font-mono text-sm text-gray-400">
                  How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
