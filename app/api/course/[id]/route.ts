import { authOptions } from "@/lib/auth";
import { DbConnect } from "@/lib/db";
import { Course } from "@/models/course";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// GetCourseById :this route can access by everyOne
export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        await DbConnect();
        const courseId = await context.params
        const course = await Course.findById(courseId)

        if (!course) {
            return NextResponse.json({
                error: "There is no course with this courseId"
            }, {
                status: 404
            })
        }

        return NextResponse.json({
            course
        })
    } catch (error) {
        console.error("Error while getting a course byId");
        return NextResponse.json({
            error: "Internal server error"
        }, {
            status: 500
        })
    }
}

// DeleteCourseByID : this route is only access by the admin 
export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {

    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({
            error: "UnAuthorized"
        }, {
            status: 401
        })
    }

    try {
        await DbConnect()
        const courseId = await context.params

        const course = await Course.findByIdAndDelete(courseId)

        if (!course) {
            return NextResponse.json({
                message: "there is course with this courseId"
            })
        }

        return NextResponse.json({
            message: "Course deletes successfully"
        }, {
            status: 200
        })
    } catch (error) {

    }
}


// UpdateCourseById : This route only can access by admin
export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {

    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({
            message: "UnAuthorized"
        }, {
            status: 401
        })
    }

    try {
        await DbConnect();
        const courseId = await context.params
        if (!courseId) throw new Error("CourseId not found!")
        const { title, description, price } = await req.json()
        const updateCourse = await Course.findByIdAndUpdate(courseId, {
            title, description, price
        }, {
            new: true
        })

        if (!updateCourse) {
            return NextResponse.json({
                error: "Course not found"
            }, { status: 404 })
        }

        return NextResponse.json({
            updateCourse
        })

    } catch (error: any) {
        console.error("Error while Changing something in the course", error.message)
        return NextResponse.json({
            error: "Internal server error"
        }, {
            status: 500
        })
    }
}