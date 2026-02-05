import { authOptions } from "@/lib/auth";
import { DbConnect } from "@/lib/db";
import { createRazorpay } from "@/lib/razorpay";
import { Course } from "@/models/course";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

    console.log(process.env.RAZORPAY_KEY_SECRET);

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

        const { courseId } = await req.json()

        // Validate courseId format
        if (!courseId || typeof courseId !== 'string') {
            return NextResponse.json({
                error: "Invalid courseId"
            }, {
                status: 400
            })
        }

        const course = await Course.findById(courseId)

        if (!course) {
            return NextResponse.json({
                error: "Course not found!"
            }, {
                status: 404
            })
        }



        const razorpay = createRazorpay()

        const order = await razorpay.orders.create({
            amount: Math.round(course.price * 100),
            currency: "INR",
            receipt: `course_${Date.now()}`
        })

        if (!order || !order.id) {
            return NextResponse.json({
                error: "Failed to create Razorpay order"
            }, {
                status: 500
            })
        }

        return NextResponse.json({
            id: order.id,
            amount: order.amount
        })
    } catch (error: any) {
        console.error("Error while creating a razorpay order", error)
        return NextResponse.json({
            error: error?.message || "Internal server error"
        }, {
            status: 500
        })
    }
}