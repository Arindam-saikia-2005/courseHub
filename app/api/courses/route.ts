import { authOptions } from "@/lib/auth";
import { DbConnect } from "@/lib/db";
import { Course, ICourse } from "@/models/course";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


// This route can only access by the admin 
export async function POST(req: NextRequest) {

    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({
            error: "UnAuthoeized"
        }, {
            status: 401
        })
    }

    try {
        await DbConnect()
        const body: ICourse = await req.json()

        if (!body.title || !body.description) {
            return NextResponse.json({
                error: "All fields are required"
            }, {
                status: 400
            })
        }

        const courseData = { ...body }

        const newCourse = await Course.create(courseData)

        return NextResponse.json({
            newCourse
        })
    } catch (error) {
        console.error("Error while creating the course")
        return NextResponse.json({
            error: "Internal server error"
        }, {
            status: 500
        })
    }
}


// this route can access by everyone
export async function GET(req:NextRequest) {
    try {
        await DbConnect()
        const courses = await Course.find({})
        return NextResponse.json({
            courses
        })
    } catch (error) {
        console.error("Error while getting all the videos");
        return NextResponse.json({
            message:"Internal server error"
        },{
            status:500
        })
    }
}

