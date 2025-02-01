import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { parseISO } from "date-fns";


export type wordArray = {
    wordId: number,
    wordName: string,
    wordViews: number,
    originalRanking: number,
    changedRanking: number,
    searchCategoryNum: number,
    createdAt: Date,
    deletedAt: Date
}

export async function GET() {
    try {
        const wordArray = await prisma.searchWord?.findMany();

        return NextResponse.json(wordArray);
    } catch(err) {
        return NextResponse.json({ error: '검색어 항목이 없습니다.', status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const wordName = formData.get('wordName') as string;
        const wordViews = formData.get('wordViews') as string;
        const originalRanking = formData.get('originalRanking') as string;
        const changedRanking = formData.get('changedRanking') as string;
        const searchCategoryNum = formData.get('searchCategoryNum') as string;
        const createdAt = formData.get('createdAt') as string;
        const deletedAt = formData.get('deletedAt') as string;

        const existingWord = await prisma.searchWord.findFirst({
            where : {
                wordName: wordName
            }
        });

        if(!existingWord) {
            const newWord = await prisma.searchWord.create({
                data: {
                    wordName: wordName,
                    wordViews: parseInt(wordViews),
                    originalRanking: parseInt(originalRanking),
                    changedRanking: parseInt(changedRanking),
                    searchCategoryNum: parseInt(searchCategoryNum),
                    createdAt: parseISO(createdAt),
                    deletedAt: parseISO(deletedAt)
                }
            });

            return NextResponse.json(newWord);

        } else {
            const updatedWord = await prisma.searchWord.update({
                where: {
                    wordName: wordName
                }, 
                data: {
                    wordViews: parseInt(wordViews)
                }
            });

            return NextResponse.json(updatedWord);

        }

    } catch(err) {
        return NextResponse.json({ error: '생성 실패' })
    }
}