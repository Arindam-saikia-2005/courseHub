"use client"


import CourseCard from "@/components/CourseCard"
import axios from "axios"
import { useEffect, useState } from "react"

interface CourseType {
    title: string;
    shortDescription:string;
    description: string;
    videoUrl?: string;
    thumbnail?:string;
    slug?: string;
    price: number;
    _id:string
}

export default function Page() {

  const [courses,setCourses] = useState<CourseType[]>([])

  async function fetchCourses () {
   try {
     const res = await axios.get("/api/courses")
     setCourses(res?.data.courses)
   } catch (error) {
    console.log(error)
   }
 }
 
 useEffect(()=>{
   fetchCourses()
 },[])


  return (
    <div className="flex bg-gray-100 justify-center flex-wrap  sm:p-5 gap-5 ">
      {
        courses.map((course)=> (
          <CourseCard title={course.title} description={course.description} shortDescription={course.shortDescription} 
           videoUrl={course.videoUrl} thumbnail={course.thumbnail} _id={course._id} price={course.price} />
        ))
      }
    </div>
  )
}