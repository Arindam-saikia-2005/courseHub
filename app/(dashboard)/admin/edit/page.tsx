
"use client";

import { useEffect, useState } from "react";

export default function CourseEditor() {
  const [courses, setCourses] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    fetch("/api/admin/courses")
      .then(res => res.json())
      .then(setCourses);
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

      <select
        onChange={(e) =>
          setSelected(courses.find(c => c._id === e.target.value))
        }
      >
        <option>Select course</option>
        {courses.map(c => (
          <option key={c._id} value={c._id}>{c.title}</option>
        ))}
      </select>

      {selected && (
        <div className="space-y-2">
          <input
            value={selected.title}
            onChange={e => setSelected({ ...selected, title: e.target.value })}
          />
          <input
            value={selected.price}
            type="number"
            onChange={e => setSelected({ ...selected, price: e.target.value })}
          />
          <textarea
            value={selected.description}
            onChange={e =>
              setSelected({ ...selected, description: e.target.value })
            }
          />

          <button onClick={updateCourse}>Save</button>
        </div>
      )}
    </div>
  );
}
