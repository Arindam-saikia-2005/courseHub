import { Schema, model, models } from  "mongoose"

 export type Roles = "USER" | "ADMIN"

export interface User {
    username:string;
    email:string;
    password:string;
    profilePic?:string;
    role: Roles;
    course:[];
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
        enum: ["USER","ADMIN"],
        default:"USER"
    },
    course:[{
        type:Schema.Types.ObjectId,
        ref:"Course"
    }]
})

export const User = models?.User || model<User>("User",userSchema) 