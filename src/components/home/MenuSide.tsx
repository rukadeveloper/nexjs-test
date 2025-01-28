import { Menu } from '@/app/api/menu/route'
import Link from 'next/link'
import React from 'react'

export default function MenuSide({ menu, mobileMenu } : { menu: Menu[], mobileMenu: boolean }) {
  return (
    <div className={`fixed top-0 bottom-0 left-[300px] z-40 w-[200px] bg-white border-l border-solid border-gray-300 ${!mobileMenu ? 'hidden' : ''}`}>
      <ul>
        {
          menu?.map((m: Menu) => (<li key={m.menuId}><Link href={m.menuLink} className={`pl-10 py-6 block hover:bg-gradient-to-r hover:from-red-400 hover:to-rose-500 hover:text-white`}>{m.menuName}</Link></li>))
        }
      </ul>
    </div>
  )
}
