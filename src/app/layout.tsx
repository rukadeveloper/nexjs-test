'use client';

import { Barlow } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContext } from '@/contexts/AuthContext';


const barlowFont = Barlow({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-barlow',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1
      }
    }
  }));

  const [isAuth,setIsAuth] = useState<boolean>(false);

  const value = {
    isAuth: isAuth,
    setIsAuth: setIsAuth
  }

  return (
    <html lang="ko" cz-shortcut-listen="true">
      <body className={`antialiased ${barlowFont.variable}`}>
        <AuthContext.Provider value={value}>
          <QueryClientProvider client={queryClient}>
            { children }
          </QueryClientProvider>
        </AuthContext.Provider>
      </body>
    </html>
  );
}
