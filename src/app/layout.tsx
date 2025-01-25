import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Go shop',
  description: 'Welcome to GoShop',
};

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
  return (
    <html lang="ko" cz-shortcut-listen="true">
      <body className={`antialiased ${barlowFont.variable}`}>{children}</body>
    </html>
  );
}
