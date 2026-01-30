import CourseCard from "@/components/CourseCard"

export default function Page() {
  return (
    <div className="flex bg-gray-100 justify-center flex-wrap gap-4 sm:p-5 gap-5 ">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  )
}