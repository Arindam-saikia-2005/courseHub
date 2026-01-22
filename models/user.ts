import { Schema, Types, model, models } from  "mongoose"

 type Roles = "USER" | "ADMIN"

export interface User {
    username:string;
    email:string;
    password:string;
    profilePic?:string;
    role: Roles;
    course:Types.ObjectId[];
}

const userSchema = new Schema<User>({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role : {
        type:String,
        enum: ["USER","ADMIN"],
        default:"USER"
    },
    course:[{
        type:Schema.Types.ObjectId,
        ref:"Course"
    }]
})

export const User = models?.User || model<User>("User",userSchema) 