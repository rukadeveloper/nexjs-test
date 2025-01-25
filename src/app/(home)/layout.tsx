import Header from '@/components/shared/layouts/header/header';
import React from 'react';

export default function HomeLayout({ children } : { children : React.ReactNode }) {
  return (
    <div className="root">
        <Header />
        <main>{children}</main>
        <footer>1111</footer>
    </div>
  );
};