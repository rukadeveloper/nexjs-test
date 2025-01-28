'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link'
import React from 'react';
import { Menu } from '@/app/api/menu/route';
import MenuEach from './MenuEach';

const fetchMenu = async () => {
  const response = await fetch('/api/menu');
  const data = await response.json();
  return data;
}

export default function MenuNavigation() {
  const { data: menu, isLoading: menuLoading, isError: isMenuError, error: menuError } = useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenu
  })

  return (
    <ul className="hidden lg:flex items-center gap-10" style={{ fontWeight: '800', fontSize: '1.1rem' }}> 
      {
        menu?.map((m: Menu) => (<MenuEach key={m.menuId} m={m} />))
      }
    </ul>
  )
}
