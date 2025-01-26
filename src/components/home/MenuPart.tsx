import React from 'react';
import CategoryReal from './CategoryReal';

type Category = {
  id: number,
  firstCategory: string,
  imagePositionX: string,
  imageHoverPositionX: string,
  imagePositionY: string,
  imageHoverPositionY: string,
  category2: CategorySub | null
}

type CategorySub = {
  secondId: number,
  secondCategory: string,
  secondLink: string,
  secondTitle: string,
  categoryId: number
}

export default function MenuPart({ menuData } : { menuData : Category[] }) {
  return (
    <div className="menu__part__wrapper w-full bg-slate-100 relative" style={{ height: 'calc(100% - 70px)'}}>
      <CategoryReal menuData={menuData} />
    </div>
  )
}
