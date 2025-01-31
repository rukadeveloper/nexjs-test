import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {

    const formData = await req.formData();

    const uid = formData.get('uid') as string;
    const upw = formData.get('upw') as string;
    const unick = formData.get('unick') as string;
    const uname = formData.get('uname') as string;
    const uemail = formData.get('uemail') as string;
    const uphone = formData.get('uphone') as string;

    try {
        const insertUser = await prisma.users.create({
            data: {
                uid: uid,
                upassword: upw,
                unickname: unick,
                uname: uname,
                uemail: uemail,
                uphone: uphone,
                uprofile: 'test.jpg',
                isJoin: 'Y',
                createdAt: new Date().toISOString(),
                DeletedAt: new Date().toISOString()
            }
        })

        return NextResponse.json({ message: "회원가입 성공", status: '200', error: null });
    } catch(err) {
        return NextResponse.json({ message : '서버 오류 ', status: '500', error: err });
    }
}