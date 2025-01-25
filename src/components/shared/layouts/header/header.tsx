import React from 'react';

import NavigationButton from '@/components/home/NavigationButton';
import HomeLogo from '@/components/home/HomeLogo';

export default function Header() {
    return (
      <header className="max-w-4xl my-0 mx-auto py-5 flex items-center">
        <NavigationButton />
        <HomeLogo />
      </header>
    );
}