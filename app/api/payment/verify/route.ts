import crypto from "crypto";
import { getServerSession } from "next-auth";
import { DbConnect } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET


if (!RAZORPAY_KEY_SECRET) {
    console.log("Razorpay secret key is not found")
}

export async function POST(req: Request) {

    console.log("RAZORPAY KEY:", process.env.RAZORPAY_KEY_SECRET);

    await DbConnect();
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response("Unauthorized", { status: 401 });
    }

    if (!RAZORPAY_KEY_SECRET) {
        return NextResponse.json({
            error: "Authentication key was missing during initialization"
        }, {
            status: 500
        })
    }

    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            courseId,
        } = await req.json();

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", RAZORPAY_KEY_SECRET)
            .update(body)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return new Response("Invalid signature", { status: 400 });
        }

        console.log("SESSION USER ID:", session.user.id);
        console.log("COURSE ID:", courseId);
        // Grant access
        await User.findByIdAndUpdate(session.user.id, {
            $addToSet: { course: courseId },
        });



        return new Response("Payment verified");
    } catch (err: any) {
        console.error("Error while verifing payment through razorpay", err.message)
        return NextResponse.json({
            error: "Internal server error"
        }, {
            status: 500
        })

    }
}

