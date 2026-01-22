import mongoose from "mongoose"
import bcrypt from "bcrypt"
import { User } from "@/models/user"


const url = process.env.MONGODB_URI!
const pass = process.env.INITIAL_ADMIN_PASSWORD!
const email = process.env.INITIAL_ADMIN_EMAIL!

if(!url) {
    throw new Error('MongoDb URL missing')
}

async function seedAdmin() {
  try {
    await mongoose.connect(url)
    const adminExist =  await User.findOne({role:"ADMIN"});

    if(adminExist) {
        console.log("Admin Already exists.Abort");
        process.exit(0)
    }

    const passwordHash = await bcrypt.hash(pass,15)

    await User.create({
        username:"eTErnalBEing",
        email:email,
        password:passwordHash,
        role:"ADMIN"
    })
    console.log("Admin successfully created.")
    process.exit(0)
  } catch (error:any) {
     console.error("Error while creating the Admin",error.message);
  }
}
seedAdmin()