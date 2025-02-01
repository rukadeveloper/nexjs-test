import { Barlow } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

export const metadata:  Metadata = {
  title: "11st Clone",
  description: "Clone 11Street Homepage.",
}

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
      <body className={`antialiased ${barlowFont.variable}`}>
        { children }
      </body>
    </html>
  );
}
