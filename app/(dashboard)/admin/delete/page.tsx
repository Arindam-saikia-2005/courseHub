"use client";

import axios from "axios";
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
  const [course,setCourse] = useState<CourseType[]>([]);

  async function fetchAllCourses() {
    try {
      const res = await axios.get("/api/courses");
      console.log(res?.data.courses)
      setCourse(res?.data.courses)
    } catch (err) {
        console.log(err)
    }
  }

  async function RemoveCourse (id : string) {
    try {
      await axios.delete(`/api/courses/${id}`)        
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchAllCourses()
  },[])

  return <div>
    <p className="mb-2">All Course List</p>
      <div className="flex flex-col gap-2">
        {/* ---------List Table Title-------- */}

        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>price</b>
          <b className="text-center">Action</b>
        </div>
        {/* -----------course List----------*/}
        {course.map((course, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img className="w-12" src={course.thumbnail} alt="" />
            <p>{course.title}</p>
            <p>{course.shortDescription}</p>
            <p>
              {course.price}
            </p>
            <p onClick={()=>RemoveCourse(course._id)} className="text-right md:text-center cursor-pointer text-lg ">
              X
            </p>
          </div>
        ))}
      </div>
  </div>;
}
