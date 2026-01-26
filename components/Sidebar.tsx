import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";

import { LiaEditSolid } from "react-icons/lia";

export default function Page() {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <Link
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg"
          href="/admin/create"
        >
          <p>
            <IoAddCircleOutline size={25} />
          </p>
          <p className="hidden md:block">create course</p>
        </Link>
        <Link
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg"
          href="/admin/edit"
        >
          <p>
            <LiaEditSolid size={25} />
          </p>
          <p className="hidden md:block">Edit Course</p>
        </Link>
        <Link
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg"
          href="/admin/promote"
        >
          <p></p>
          <p className="hidden md:block">Promote User</p>
        </Link>
      </div>
    </div>
  );
}
