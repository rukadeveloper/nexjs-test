import React from 'react';

import { Menu } from '@/app/api/menu/route';
import Link from 'next/link';

export default function MenuEach({ m } : { m : Menu }) {
  
  return (
    <li key={m.menuId} className={`relative ${m.Important ? 'after:content-[""] after:absolute after:w-[5px] after:h-[5px] after:bg-red-400 after:rounded-full after:top-[1.2rem] after:-right-2' : ''}`}><Link href={m.menuLink} className={`block py-4 relative hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[3px] hover:after:bg-red-600 hover:after:bottom-0 hover:after:left-0 ${m.menuId === 4  || m.menuId === 9 ? 'before:content-[""] before:absolute before:w-[2px] before:h-[16px] before:bg-gray-300 before:-right-[1.25rem] before:top-1/2 before:-translate-y-[50%]' : ''}`}>{m.menuName}</Link></li>
  )
}
