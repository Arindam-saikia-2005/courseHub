import { authOptions } from "@/lib/auth";
import { DbConnect } from "@/lib/db";
import { User } from "@/models/user";
import { getServerSession } from "next-auth";


export async function GET() {
  await DbConnect();
  const session = await getServerSession(authOptions);

  if (!session ) {
    return new Response("Unauthorized", { status: 401 });
  }

  const users = await User.find().select("_id email role username");
  return Response.json(users);
}
