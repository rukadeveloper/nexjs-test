"use client"

import React, { useState } from 'react';

import { prismaCategory } from '@/app/api/category/route';
import { Menu } from '@/app/api/menu/route';

import NavigationButton from '@/components/headers/NavigationButton';
import HomeLogo from '@/components/headers/HomeLogo';
import Search from '@/components/headers/Search';
import IconWrapper from '../../../headers/IconWrapper';
import MyPage from '@/components/headers/icons/MyPage';
import Delivery from '@/components/headers/icons/Delivery';
import Cart from '@/components/headers/icons/Cart';
import SideMenuWrapper from '@/components/headers/SideMenuWrapper';
import LoginPart from '@/components/headers/LoginPart';
import MenuPart from '@/components/headers/MenuPart';
import WordRankWrapper from '@/components/headers/WordRankWrapper';
import MenuNavigation from '@/components/headers/menu/MenuNavigation';
import SkeletonWrapper from '../loading/SkeletonWrapper';
import { useQuery } from '@tanstack/react-query';

const fetchCategory = async () : Promise<prismaCategory[]> => {
  const res = await fetch(`/api/category`);
  const data: prismaCategory[] = await res.json();
  return data;
}

const fetchMenu = async () : Promise<Menu[]> => {
  const res = await fetch(`/api/menu`);
  const data : Menu[] = await res.json();
  return data;
}

export default function Header() {

    const [sideMenu, setSideMenu] = useState<boolean>(false);
    
    const { data: category, isLoading: cateLoading, isError: isCateError, error: cateError } = useQuery({
      queryKey: ['categoryData'],
      queryFn: fetchCategory
    })

    const { data: menu, isLoading: menuLoading, isError: isMenuError, error: menuError } = useQuery({
      queryKey: ['menuData'],
      queryFn: fetchMenu
    });

    if(cateLoading && menuLoading) return <SkeletonWrapper />

    return (
      <header className="border-b border-solid border-stone-100">
        <div className="my-0 mx-auto py-8 flex justify-between lg:justify-start items-center " style={{ maxWidth: '1300px'}}>
          <NavigationButton setSideMenu={setSideMenu} />
          <HomeLogo isPrevent={false} />
          <Search />
          <WordRankWrapper />
          <IconWrapper>
            <MyPage />
            <Delivery />
            <Cart />
          </IconWrapper>
          <SideMenuWrapper sideMenu={sideMenu}>
            <LoginPart setSideMenu={setSideMenu} menu={menu!} />
            <MenuPart category={category!} />
          </SideMenuWrapper>
        </div>
        <div className="my-0 mx-auto max-w-[1300px]">
          <MenuNavigation menu={menu!} />
        </div>
      </header>
    );
}