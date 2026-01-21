import { DbConnect } from "@/lib/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { userSchema } from "@/lib/types";


export async function POST(req: NextRequest) {

    try {
        const body = await req.json()
        const {username,email,password} = userSchema.parse(body)
    
        await DbConnect()
        const alreadyExist = await User.findOne({ email })

        if (alreadyExist) {
            return NextResponse.json({
                message: "User already Exist with this email"
            },{
                status:409
            })
        }

        const salt = await bcrypt.genSalt(15)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            username,
            email,
            password: hashPassword
        })

        return NextResponse.json({
            id:newUser._id,
            username:newUser.username,
            email:newUser.email
        },{
            status:201
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