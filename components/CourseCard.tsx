export default function Page() {
  return (
    <div className="max-w-md h-125 bg-white p-5 rounded-2xl">
      <img
        className="h-60 w-xl rounded-2xl"
        src="/course-image.jpg"
        alt="course-image"
      />
      <p className="font-semibold text-xl mt-2">Web Dev + Devops Bootcamp</p>
     <div className="mt-6 space-y-5">
       <p className="text-gray-400">
        Web dev (Every Friday) Devops (Every Friday) Machine Learning and AI
        (Every Saturday) Web3....
      </p>
      <p className="font-semibold text-2xl">₹5,999</p>
      <button className="rounded-2xl w-full bg-[#001959] text-white font-sans  py-3">
        View Details
      </button>
     </div>
    </div>
  );
}
