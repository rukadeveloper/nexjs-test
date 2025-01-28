import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Menu  = {
    menuId: number,
    menuName: string,
    menuLink: string,
    Important: string
}

export async function GET() {
    try {
        const menus = await prisma.menu.findMany();
        return NextResponse.json(menus);
    } catch(err) {
        return NextResponse.json({ error: err })
    }
}