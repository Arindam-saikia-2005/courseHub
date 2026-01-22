import { authOptions } from "@/lib/auth";
import { DbConnect } from "@/lib/db";
import { razorpay } from "@/lib/razorpay";
import { Course } from "@/models/course";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({
            error: "UnAuthorized"
        }, {
            status: 401
        })
    }

    try {

        await DbConnect()
         
        const {courseId} = await req.json()
        const course = await Course.findById(courseId)

        if(!course) {
            return NextResponse.json({
                error:"Course not found!"
            },{
                status:404
            })
        }

        const order = await razorpay.orders.create({
            amount : course.price * 100,
            currency:"INR",
            receipt:`course_${courseId}_${session.user.id}`
        })

        return NextResponse.json({
            order
        })
    } catch (error: any) {
        console.error("Error while creating a razorpay order", error.message)
        return NextResponse.json({
            message: "Internal server error"
        }, {
            status: 500
        })
    }
}