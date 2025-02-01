"use client";

import Header from '@/components/shared/layouts/header/header';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export default function HomeLayout({ children } : { children : React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="root relative">
          <Header />
          <main>{children}</main>
          <footer>1111</footer>
      </div>
    </SessionProvider>
  );
};