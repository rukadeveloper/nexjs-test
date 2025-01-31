import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export type User = {
    id: number,
    uid: string,
    upassword: string,
    unickname: string,
    uname: string,
    uemail: string,
    uphone: string,
    uprofile: string,
    isJoin: string,
    createdAt: Date,
    deletedAt: Date
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const id = formData.get('id') as string;
        const password = formData.get('password') as string;

        const existingData = await prisma.users.findFirst({
            where: {
                uid: id,
                upassword: password
            }
        });

        if(existingData) {
            return NextResponse.json({ message: '성공', data: existingData });
        } else {
           return NextResponse.json({ message: '일치하는 데이터가 없습니다.', data: null })
        }
    } catch(err: unknown) {
        console.error('서버 오류:', err);
        if (err instanceof Error) {
            console.error('Error message:', err.message);
            console.error('Error stack:', err.stack);
        }
        return NextResponse.json({ message: '서버 오류', data: null });
    } finally {
        await prisma.$disconnect();
    }
}