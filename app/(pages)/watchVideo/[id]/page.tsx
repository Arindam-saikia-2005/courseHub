"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function Page() {
  const { id } = useParams();

  const [courses, setCourses] = useState<CourseType | null>(null);

  async function fetchCourseById() {
    try {
      const res = await axios.get(`/api/courses/${id}`);
      setCourses(res.data.course);
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
    if(id) fetchCourseById()
  },[id])

  return (
    <div className="p-5 md:p-7 bg-gray-100">
      <iframe 
      height={400}
      width={700}
      className="mx-auto"
      src={courses?.videoUrl}
       allowFullScreen />
    </div>
  );
}
