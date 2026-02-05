import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {

const session =  await getServerSession(authOptions) 

if(!session || session.user.role !== "ADMIN") {
  redirect("/unauthorized")
}

  return (
    <div className="bg-gray-50 min-h-screen">
      <p>Admin DashBoard Page</p>
    </div>
  );
}
