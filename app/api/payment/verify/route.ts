import crypto from "crypto";
import { getServerSession } from "next-auth";
import { DbConnect } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await DbConnect();
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response("Unauthorized", { status: 401 });
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
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
            .update(body)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return new Response("Invalid signature", { status: 400 });
        }

        // Grant access
        await User.findByIdAndUpdate(session.user.id, {
            $addToSet: { courses: courseId },
        });

        return new Response("Payment verified");
    } catch (err: any) {
        console.error("Error while verifing payment through razorpay", err.message)
        return NextResponse.json({
            err: "Internal server error"
        }, {
            status: 500
        })

    }
}

