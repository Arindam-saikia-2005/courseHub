import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RedirectPage() {
  const session = await getServerSession(authOptions);

  redirect(session?.user.role === "ADMIN" ? "/admin" : "/user");

  return <div></div>;
}
