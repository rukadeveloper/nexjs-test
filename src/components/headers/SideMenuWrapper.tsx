import React from 'react';

export default function SideMenuWrapper({ children, sideMenu } : { children : React.ReactNode, sideMenu: boolean }) {
  return (
    <div className={`side__menu__wrapper w-[300px] fixed top-0 bottom-0 left-0 z-10 bg-white ${sideMenu ? 'translate-x-0 transition-all' : '-translate-x-full'}` }>
      { children }
    </div>
  )
}
