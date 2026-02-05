"use client";

import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import axios from "axios";
interface CourseType {
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  price: number;
  videoUrl: string;
  _id: string;
}

export default function CourseEditor() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [selected, setSelected] = useState<any>(null);

  async function fetchAllCourses() {
    try {
      const res = await axios.get("/api/courses");
      setCourses(res.data.courses);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  async function updateCourse() {
    await fetch(`/api/courses/${selected._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selected),
    });

    alert("Course updated");
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">Edit Courses</h2>

      {courses.map((course) => (
        <CourseCard
          key={course._id}
          title={course.title}
          shortDescription={course.shortDescription}
          price={course.price}
          _id={course._id}
          description={course.description}
          thumbnail={course.thumbnail}
        />
      ))}

      <select
        onChange={(e) =>
          setSelected(courses.find((c) => c._id === e.target.value))
        }
      >
        <option>Select course</option>
        {courses.map((c) => (
          <option key={c._id} value={c._id}>
            {c.title}
          </option>
        ))}
      </select>

      {selected && (
        <div className="space-y-2">
          <div className="flex flex-col">
            <label className="text-black font-semibold text-xl">Title</label>
            <input
              className="border border-gray-300 rounded-xl py-2"
              value={selected.title}
              onChange={(e) =>
                setSelected({ ...selected, title: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black font-semibold text-xl">Price</label>
            <input
              className="border border-gray-300 rounded-xl py-2 px-2"
              value={selected.price}
              type="number"
              onChange={(e) =>
                setSelected({ ...selected, price: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-semibold text-xl">
              Short Description
            </label>
            <input
              className="border text-black border-gray-300 rounded-xl py-2 px-2"
              value={selected.shortDescription}
              type="text"
              onChange={(e) =>
                setSelected({ ...selected, shortDescription: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black font-semibold text-xl">
              Description
            </label>
            <textarea
              className="border border-gray-300 py-2 px-2 rounded-xl"
              value={selected.description}
              onChange={(e) =>
                setSelected({ ...selected, description: e.target.value })
              }
            />
          </div>

          <button
            className="rounded-2xl w-full bg-[#001959] text-white font-sans  py-3"
            onClick={updateCourse}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
