"use client"

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

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
import MenuNavigation from '@/components/home/menu/MenuNavigation';
import SkeletonHeader from '../loading/SkeletonHeader';


import { prismaCategory, CategorySub, Category3 } from '@/app/api/category/route';



export default function Header() {
    const [sideMenu, setSideMenu] = useState<boolean>(false);

    const fetchMenuData = async () => {
      const res = await fetch('/api/category');
      const data = await res.json();

      return data.map((category: prismaCategory) => ({
        id: category.id,
        firstCategory: category.firstCategory,
        imagePositionX: category.imagePositionX,
        imageHoverPositionX: category.imageHoverPositionX,
        imagePositionY: category.imagePositionY,
        imageHoverPositionY: category.imageHoverPositionY,
        category2: category.category2 && category.category2.map((sub: CategorySub) => ({
          secondId: sub.secondId,
          secondTitle: sub.secondTitle,
          categoryId: sub.categoryId,
          category3: sub.category3 && (sub.category3.map((s3: Category3) => ({
              thirdId: s3.thirdId,
              thirdLink: s3.thirdLink,
              thirdName: s3.thirdName,
              category2Id: s3.category2Id
          })))
        }))
      }));
    }
    const { data : menuData , isLoading, isError, error } = useQuery({
      queryKey: ['categoryData'],
      queryFn: fetchMenuData,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5  // 5분
    });

    const fetchMenu = async () => {
      const response = await fetch('/api/menu');
      const data = await response.json();
      return data;
    }

    const { data: menu, isLoading: menuLoading, isError: isMenuError, error: menuError } = useQuery({
      queryKey: ['menu'],
      queryFn: fetchMenu
    });

    // 로딩/에러 상태 처리
    if (isLoading || menuLoading) 
      return (
        <div>
          <SkeletonHeader />
          <div>로딩중...</div>
        </div>
      )
    if (isError) return <div>에러 발생: {error.message}</div>;

    return (
      <header className="border-b border-solid border-stone-100">
        <div className="my-0 mx-auto py-5 flex justify-between lg:justify-start items-center " style={{ maxWidth: '1300px'}}>
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
            <MenuPart menuData={menuData} />
          </SideMenuWrapper>
        </div>
        <div className="my-0 mx-auto max-w-[1300px]">
          <MenuNavigation menu={menu} />
        </div>
      </header>
    );
}