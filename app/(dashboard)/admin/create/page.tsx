"use client";

import { FileUpload } from "@/components/FileUpload";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [price, setPrice] = useState("");
  const [form, setForm] = useState({
    videoUrl: "",
    thumbnail: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          price,
          videoUrl: form.videoUrl,
          shortDescription,
          thumbnail:form.thumbnail
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong");
      } else {
        toast.success("course created successfully");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex text-black items-start bg-gray-50 flex-col  min-h-screen w-full gap-3">
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <p className="mb-2">Title</p>
          <input
            className="w-full  max-w-125 px-3 py-2 rounded-md border-2 border-gray-300 bg-white"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="type here"
            required
          />
        </div>

        <div className="w-full">
          <p className="mb-2">Long Description</p>
          <textarea
            className="w-full max-w-125 px-3 py-2 rounded-md border-2 border-gray-300 bg-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="write content here"
            required
          />
        </div>
        <div className="w-full">
          <p className="mb-2">Short Description</p>
          <textarea
            className="w-full max-w-125 px-3 py-2 rounded-md border-2 border-gray-300 bg-white"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            placeholder="write content here"
            required
          />
        </div>

        <div>
          <p>Course price</p>
          <input
            className="w-full px-3 py-2 sm:w-30 rounded-md border-2 border-gray-300 bg-white"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="2000"
          />
        </div>

        <div className="w-full space-y-3 mt-3">
          <p>Upload Video and Image</p>
          <FileUpload
            fileType="video"
            onSuccess={(res) => {
              setForm((prev) => ({
                ...prev,
                videoUrl: res.videoUrl,
                thumbnail: res.thumbnail,
              }));
            }}
            onProgress={(progress) => {
              console.log(`Upload progress : ${progress}`);
            }}
          />
        </div>

        <button type="submit" className="bg-black px-3 py-2 text-sm text-white rounded-lg mt-3">Create Now</button>
      </form>
    </div>
  );
}
