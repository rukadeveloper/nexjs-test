import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Category = {
    id: number,
    firstCategory: string,
    imagePositionX: string,
    imageHoverPositionX: string,
    imagePositionY: string,
    imageHoverPositionY: string,
    category2: CategorySub | null
}

type CategorySub = {
    secondId: number,
    secondCategory: string,
    secondLink: string,
    secondTitle: string,
    categoryId: number
}

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            include: {
                category2: true
            }
        });

        const formattedCategories = categories.map((c: Category) => ({
            id: c.id,
            firstCategory: c.firstCategory,
            imagePositionX: c.imagePositionX,
            imageHoverPositionX: c.imageHoverPositionX,
            imagePositionY: c.imagePositionX,
            imageHoverPositionY: c.imageHoverPositionY,
            category2: c.category2 ? [c.category2] : []
        }))

        return NextResponse.json(formattedCategories);
    } catch(error) {
        return NextResponse.json({ error: '카테고리 항목이 없습니다.', status: 500 });
    }
}