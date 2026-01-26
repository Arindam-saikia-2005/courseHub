import CourseCard from "@/components/CourseCard"

export default function Page() {
  return (
    <div>
 
 {/* HeroSecion */}
 
      <div className="flex m-6">
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold text-[#001959]">
            Master Full Stack 
            Developement
          </h1>
          <p className="text-gray-400">
            Master Full Stack Development through hands-on open source projects.
            Join a community of developers transforming their careers with
            practical, real-world programming skills.
          </p>
        <div className="space-x-5">
          <button className="rounded-lg bg-gray-50 text-[#001959] border border-[#001959] px-4 py-3">
            Learn more
          </button>
          <button className="text-gray-50 bg-[#001959] px-4 py-3 rounded-lg">
            Explore Courses
          </button>
        </div>
        </div>
        <img className="h-125 w-125 " src="/hero-img.webp" alt="course-image" />
      </div>

      {/* Courses */}

      <div>
         <CourseCard/>
      </div>

    </div>
  );
}
