import * as z from "zod";

export const userSchema = z.object({
    username:z.string().min(5).max(15),
    email:z.email().lowercase(),
    password:z.string().regex(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/).min(8)
})