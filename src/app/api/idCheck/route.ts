import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    const formData = await req.json();

    const uid = formData.get('uid');

    try {
        const existingId = await prisma.user.findFirst({
            where: {
                uid: uid
            }
        });

        if(existingId) {
            return  {
                valid: false,
                error: '이미 있는 아이디입니다.'
            }
        } else {
            return {
                valid: true,
                error: '가능한 아이디입니다.'
            }
        }
    } catch(err) {
            return {
                valid: false,
                error: '서버 에러입니다.'
            }
    }
}