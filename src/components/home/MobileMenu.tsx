import React from 'react'
import MenuSide from './MenuSide'

export default function MobileMenu() {
  return (
    <div className="block lg:hidden">
        <button className="hover:underline pl-8">메뉴 보기</button>
        <MenuSide />
    </div>
  )
}
