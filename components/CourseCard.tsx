import { ICourse } from "@/models/course";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  shortDescription: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
  slug?: string;
  price: number;
  _id: string;
}

export default function Page({
  title,
  shortDescription,
  description,
  videoUrl,
  price,
  thumbnail,
  _id,
}: CourseCardProps) {
  return (
    <div className="max-w-md h-125 bg-white p-5 rounded-2xl">
      <img
        className="h-60 w-xl rounded-2xl"
        src={thumbnail}
        alt="course-image"
      />
      <p className="font-semibold text-xl mt-2">{title}</p>
      <div className="mt-6 space-y-5">
        <p className="text-gray-400">{shortDescription}</p>
        <p className="font-semibold text-2xl">{price}</p>
        <Link href={`/courses/${_id}`}>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="rounded-2xl w-full bg-[#001959] text-white font-sans  py-3">
              View Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
