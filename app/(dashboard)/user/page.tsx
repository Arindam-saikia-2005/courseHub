import { authOptions } from "@/lib/auth";
import { DbConnect } from "@/lib/db";
import { User } from "@/models/user";
import { getServerSession } from "next-auth";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

interface CourseType {
  title: string;
  shortDescription: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
  slug?: string;
  price: number;
  _id: string;
}

async function page() {
  await DbConnect();

  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="text-5xl text-center"> You are Not Authenticated </p>;
  }

  const user = await User.findById(session.user.id).populate("course");

  return (
    <div className="flex bg-gray-100 justify-center flex-wrap  sm:p-5 gap-5">
      {user.course.map((c: CourseType) => (
        <div key={c._id} className="max-w-md h-125 bg-white p-5 rounded-2xl">
      <img
        className="h-60 w-xl rounded-2xl"
        src={c.thumbnail}
        alt="course-image"
      />
      <p className="font-semibold text-xl mt-2">{c.title}</p>
      <div className="mt-6 space-y-5">
        <p className="text-gray-400">{c.shortDescription}</p>
        <p className="font-semibold text-2xl">{c.price}</p>
        <Link href={`/watchVideo/${c._id}`}>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="rounded-2xl w-full bg-[#001959] text-white font-sans  py-3">
              Watch Video
            </button>
          </div>
        </Link>
      </div>
    </div>
      ))}
    </div>
  );
}

export default page;
