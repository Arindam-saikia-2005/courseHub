import { DbConnect } from "@/lib/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { userSchema } from "@/lib/types";


export async function POST(req: NextRequest) {

    const { username, email, password } = await userSchema.parseAsync(req.json())

    await DbConnect()
    try {
        const alreadyExist = await User.findOne({ email })

        if (alreadyExist) {
            return NextResponse.json({
                message: "User already Exist with this email"
            })
        }

        const salt = await bcrypt.genSalt(15)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            username,
            email,
            password: hashPassword
        })

        await newUser.save()

        return NextResponse.json({
            newUser
        })

    } catch (error: any) {
        console.error("Error while registering the user", error.message)
        return NextResponse.json({
            error: "Internal server error"
        }, {
            status: 500
        })
    }
}