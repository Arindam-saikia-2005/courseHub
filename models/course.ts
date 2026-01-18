import { Schema, model, models } from "mongoose";

export interface ICourse {
    title: string;
    description: string;
    videoUrl?: string;
    slug?: string;
    price: number;
    createdAtBy?: Schema.Types.ObjectId;
}

const courseSchema = new Schema<ICourse>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String
    },
    slug: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    createdAtBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const Course = models?.Course || model<ICourse>("Course", courseSchema)