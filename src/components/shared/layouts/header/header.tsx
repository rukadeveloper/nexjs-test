'use client';

import React from 'react';

import NavigationButton from '@/components/home/NavigationButton';
import HomeLogo from '@/components/home/HomeLogo';
import Search from '@/components/home/Search';
import IconWrapper from '../../../home/IconWrapper';
import MyPage from '@/components/home/icons/MyPage';

export default function Header() {
    return (
      <header className="my-0 mx-auto py-5 flex items-center" style={{ maxWidth: '1300px'}}>
        <NavigationButton />
        <HomeLogo />
        <Search />
        <IconWrapper>
          <MyPage />
        </IconWrapper>
      </header>
    );
}