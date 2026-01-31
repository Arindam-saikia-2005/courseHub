import { getUploadAuthParams } from "@imagekit/next/server"

const IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;
const IMAGEKIT_PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

if (!IMAGEKIT_PRIVATE_KEY || !IMAGEKIT_PUBLIC_KEY) {
    throw new Error("please put imagekit private key and public key")
}

export async function GET() {
    try {
        console.log("ImageKit Auth - Public Key:", IMAGEKIT_PUBLIC_KEY?.substring(0, 10) + "...");
        console.log("ImageKit Auth - Private Key exists:", !!IMAGEKIT_PRIVATE_KEY);
        
        const authenticationParameters = getUploadAuthParams({
            privateKey: IMAGEKIT_PRIVATE_KEY as string,
            publicKey: IMAGEKIT_PUBLIC_KEY as string,
        })

        console.log("Auth params generated:", authenticationParameters);

        return Response.json({ authenticationParameters, publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY })
    } catch (error: any) {
        console.error("Authentication for Imagekit is failed", error.message)
        return Response.json({
            error: "Internal server error"
        }, {
            status: 500
        })
    }

}