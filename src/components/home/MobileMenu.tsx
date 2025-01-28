import React, { useState } from 'react'
import MenuSide from './MenuSide'
import { Menu } from '@/app/api/menu/route'

export default function MobileMenu({ menu } : { menu : Menu[] }) {
  const [mobileMenu,setMobileMenu] = useState<boolean>(false);

  return (
    <div className="block lg:hidden" onMouseOver={ ()=>{setMobileMenu(true); }} onMouseLeave = { () => {setMobileMenu(false)} }>
        <button className={`${mobileMenu ? 'underline' : ''} pl-8`}>메뉴 보기</button>
        <MenuSide menu={menu} mobileMenu={mobileMenu} />
    </div>
  )
}
