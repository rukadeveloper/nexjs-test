'use client';


import React from 'react';
import { Menu } from '@/app/api/menu/route';
import MenuEach from './MenuEach';

export default function MenuNavigation({ menu } : { menu : Menu[] }) {
  return (
    <ul className="hidden lg:flex items-center gap-10" style={{ fontWeight: '800', fontSize: '1.1rem' }}> 
      {
        menu?.map((m: Menu) => (<MenuEach key={m.menuId} m={m} />))
      }
    </ul>
  )
}
  
