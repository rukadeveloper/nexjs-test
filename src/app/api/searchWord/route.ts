import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'error' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' }
    ]
});

// 쿼리 이벤트 리스너 추가
prisma.$on('query', (e) => {
    console.log('Query: ' + e.query);
    console.log('Params: ' + e.params);
    console.log('Duration: ' + e.duration + 'ms');
});

export type wordArray = {
    wordId: number,
    wordName: string,
    wordSeeNumber: string
}

export async function GET() {
    try {
        const wordArray = await prisma.searchWord.findMany();

        return NextResponse.json(wordArray);
    } catch(err) {
        return NextResponse.json({ error: '검색어 항목이 없습니다.', status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const wordName = formData.get('wordName') as string;
        const wordSeeNumber = formData.get('wordSeeNumber') as string;

        const seeNumber = parseInt(wordSeeNumber);

        const existingWord = await prisma.searchWord.findFirst({
            where : {
                wordName: wordName
            }
        });

        if(!existingWord) {
            const newWord = await prisma.searchWord.create({
                data: {
                    wordName: wordName,
                    wordSeeNumber: seeNumber
                }
            });

            return NextResponse.json(newWord);

        } else {
            const updatedWord = await prisma.searchWord.update({
                where: {
                    wordName: wordName
                }, 
                data: {
                    wordSeeNumber: seeNumber
                }
            });

            return NextResponse.json(updatedWord);

        }

    } catch(err) {
        return NextResponse.json({ error: '생성 실패' })
    }
}