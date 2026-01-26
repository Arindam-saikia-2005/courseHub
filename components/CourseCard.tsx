export default function Page() {
  return (
    <div className="bg-[#001959]">

        <h1 className="text-[#FFFFF]">Featured Courses</h1>
        <p>Choose any from below</p>
      <div className="h-125 w-4xl bg-[#FFFFF]">
        <img
          className="h-25 w-xl"
          src="/course-image.jpg"
          alt="course-image"
        />
        <p className="semibold">Web Dev + Devops Bootcamp</p>
        <p className="text-gray-400">
          Web dev (Every Friday) Devops (Every Friday) Machine Learning and AI
          (Every Saturday) Web3....
        </p>
        <p className="font-bold">₹5,999</p>
        <button className="bg-[#1a3069] text-white font-semibold  py-3">
          View Details
        </button>
      </div>
    </div>
  );
}
