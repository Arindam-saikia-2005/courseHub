import { authOptions } from "@/lib/auth";
import { DbConnect } from "@/lib/db";
import { Course} from "@/models/course";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


// This route can only access by the admin 
export async function POST(req: NextRequest) {
  await DbConnect()

  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const {
      title,
      description,
      videoUrl,
      price,
      thumbnail,
      shortDescription
    } = await req.json()

    if (!title || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const newCourse = await Course.create({
      title,
      description,
      videoUrl,
      price,
      thumbnail,
      shortDescription,
      createdAtBy: session.user.id
    })

    console.log("CREATED COURSE:", newCourse.toObject())

    return NextResponse.json({ newCourse })
  } catch (error) {
    console.error("Error while creating the course", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}



// this route can access by everyone
export async function GET(req: NextRequest) {
    try {
        await DbConnect()
        const courses = await Course.find({})
        return NextResponse.json({
            courses
        })
    } catch (error) {
        console.error("Error while getting all the videos");
        return NextResponse.json({
            message: "Internal server error"
        }, {
            status: 500
        })
    }
}

