import { Schema, model, models } from "mongoose";
export type PaymentStatus = "PENDING" | "PAID" | "FAILED";

export interface IEnrollment {
    _id: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    courseId: Schema.Types.ObjectId;
    paymentStatus: PaymentStatus;
    paymentIntentId?: string;
    amountPaid?: number;
}

const enrollmentSchema = new Schema<IEnrollment>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ["PENDING", "PAID", "FAILED"],
        default: "PENDING",
    },
    paymentIntentId: {
        type: String,
    },

    amountPaid: {
        type: Number,
    },
}, {
    timestamps: true
})

export const Enrollement = models?.Enrollement || model<IEnrollment>("Enrollement", enrollmentSchema)