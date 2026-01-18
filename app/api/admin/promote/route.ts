import { authOptions } from "@/lib/auth";
import { DbConnect } from "@/lib/db";
import { User } from "@/models/user";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({
            message: "UnAuthorized"
        }, {
            status: 401
        })
    }
    try {
        await DbConnect()
        const { userId } = await req.json()

        if (!userId) {
            return NextResponse.json({
                error: "UserId Required"
            }, {
                status: 400
            })
        }

        await User.findByIdAndUpdate(userId, {
            role: "ADMIN"
        })

        return NextResponse.json({
            msg: "User promoted to ADMIN"
        }, {
            status: 200
        })
    } catch (error) {

    }
}