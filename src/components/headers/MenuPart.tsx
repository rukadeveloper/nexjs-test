import React from 'react';
import CategoryReal from './CategoryReal';

import { prismaCategory } from '@/app/api/category/route';

export default function MenuPart({ category } : { category : prismaCategory[] }) {
  return (
    <div className="menu__part__wrapper w-full bg-slate-100 relative" style={{ height: 'calc(100% - 70px)'}}>
      <CategoryReal category={category} />
    </div>
  )
}
