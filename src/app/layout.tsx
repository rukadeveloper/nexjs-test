'use client';

import { Barlow } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


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

  return (
    <html lang="ko" cz-shortcut-listen="true">
      <body className={`antialiased ${barlowFont.variable}`}>
        <QueryClientProvider client={queryClient}>
          { children }
        </QueryClientProvider>
      </body>
    </html>
  );
}
