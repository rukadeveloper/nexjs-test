import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { UNSTABLE_REVALIDATE_RENAME_ERROR } from 'next/dist/lib/constants';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: "아이디", type: "text", placeholder: "아이디를 입력해주세요." },
                password: { label: "패스워드", type: "password" }
            },
            async authorize(credentials, req) {
                const user = { id: "1", uid: "1111", upassword: "1234"}

                if(user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ]
}

export default NextAuth(authOptions);