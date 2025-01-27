import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type prismaCategory = {
    id: number,
    firstCategory: string,
    imagePositionX: string,
    imageHoverPositionX: string,
    imagePositionY: string,
    imageHoverPositionY: string,
    category2: CategorySub[]
}

export type CategorySub = {
    secondId: number,
    secondTitle: string,
    categoryId: number
    category3: Category3[]
}

export type Category3 = {
    thirdId: number,
    thirdName: String,
    thirdLink: String,
    category2Id: number
}

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            include: {
                category2: {
                    include: {
                        category3: true
                    }
                }
            }
        });

        const formattedCategories = categories.map((category) => ({
            id: category.id,
            firstCategory: category.firstCategory,
            imagePositionX: category.imagePositionX,
            imageHoverPositionX: category.imageHoverPositionX,
            imagePositionY: category.imagePositionY,
            imageHoverPositionY: category.imageHoverPositionY,
            category2: category.category2.map(c2 => ({
                secondId: c2.secondId,
                secondTitle: c2.secondTitle,
                categoryId: c2.categoryId,
                category3: c2.category3.map(c3 => ({
                    thirdId: c3.thirdId,
                    thirdName: c3.thirdName,
                    thirdLink: c3.thirdLink,
                    category2Id: c3.category2Id
                }))
            }))
        }));

        return NextResponse.json(formattedCategories);
    } catch(error) {
        return NextResponse.json({ error: '카테고리 항목이 없습니다.', status: 500 });
    }
}