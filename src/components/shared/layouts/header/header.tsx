'use client';

import React, { useState, useEffect } from 'react';

import NavigationButton from '@/components/home/NavigationButton';
import HomeLogo from '@/components/home/HomeLogo';
import Search from '@/components/home/Search';
import IconWrapper from '../../../home/IconWrapper';
import MyPage from '@/components/home/icons/MyPage';
import Delivery from '@/components/home/icons/Delivery';
import Cart from '@/components/home/icons/Cart';
import SideMenuWrapper from '@/components/home/SideMenuWrapper';
import LoginPart from '@/components/home/LoginPart';
import MenuPart from '@/components/home/MenuPart';
import WordRankWrapper from '@/components/home/WordRankWrapper';

type Category = {
  id: number,
  firstCategory: string,
  imagePositionX: string,
  imageHoverPositionX: string,
  imagePositionY: string,
  imageHoverPositionY: string,
  category2: CategorySub | null
}

type CategorySub = {
  secondId: number,
  secondCategory: string,
  secondLink: string,
  secondTitle: string,
  categoryId: number
}

export default function Header() {
    const [menuData,setMenuData] = useState<Category[]>([]);
    const [sideMenu, setSideMenu] = useState<boolean>(false);

    useEffect(()=>{
      const fetchMenuData = async () => {
        const response = await fetch('/api/category');
        const data = await response.json();
        setMenuData(data);
      }

      fetchMenuData();

    },[])

    return (
      <header className="border-b border-solid border-stone-100">
        <div className="my-0 mx-auto py-5 flex items-center justify-evenly" style={{ maxWidth: '1300px'}}>
          <NavigationButton setSideMenu={setSideMenu} />
          <HomeLogo />
          <Search />
          <WordRankWrapper />
          <IconWrapper>
            <MyPage />
            <Delivery />
            <Cart />
          </IconWrapper>
          <SideMenuWrapper sideMenu={sideMenu}>
            <LoginPart setSideMenu={setSideMenu} />
            <MenuPart menuData={menuData} />
          </SideMenuWrapper>
        </div>
      </header>
    );
}