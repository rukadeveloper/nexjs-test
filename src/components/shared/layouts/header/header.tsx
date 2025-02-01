"use client"

import React, { useState, useEffect } from 'react';

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
import SkeletonWrapper from '../Skeleton/SkeletonWrapper';

export default function Header() {

    const [sideMenu, setSideMenu] = useState<boolean>(false);
    const [category,setCategory] = useState<prismaCategory[]>([]);
    const [menu,setMenu] = useState<Menu[]>([]);

    useEffect(()=>{
      const fetchCategory = async () : Promise<void> => {
        const res = await fetch('/api/category');
        const data = await res.json();
        console.log(data);
        setCategory(data);
      }

      fetchCategory();
    },[])

    useEffect(()=>{
      const fetchMenu = async () : Promise<void> => {
        const res = await fetch('/api/menu');
        const data = await res.json();
        console.log(data);
        setMenu(data);
      }

      fetchMenu();
    },[])

    if(menu.length === 0 && category.length === 0) {
      return <SkeletonWrapper />
    }

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
            <LoginPart setSideMenu={setSideMenu} menu={menu} />
            <MenuPart category={category} />
          </SideMenuWrapper>
        </div>
        <div className="my-0 mx-auto max-w-[1300px]">
          <MenuNavigation menu={menu} />
        </div>
      </header>
    );
}