import { NextResponse, NextRequest } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3 from "../../../lib/s3";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { fileName, fileType } = body;

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: fileName,
            ContentType: fileType,
            ACL: 'public-read'
        });

        await s3.send(command);
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 }); 

        return NextResponse.json({ message: "File uploaded successfully!", url }) 
    } catch(error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
    }
}