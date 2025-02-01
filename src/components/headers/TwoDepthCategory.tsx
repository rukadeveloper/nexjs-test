import Link from 'next/link';
import React from 'react';

import { prismaCategory, CategorySub, Category3 } from '@/app/api/category/route';

export default function TwoDepthCategory({ md } : { md : prismaCategory }) {
  return (
    <div className="two__depth overflow-y-auto fixed left-[300px] w-[200px] bg-white top-0 bottom-0 border-l border-solid border-gray-100" style={{ display: 'none' }}>
      {
        md.category2?.map((c2: CategorySub) => (
            <div key={c2.secondId} className={`two__depth__title__${c2.secondId} border-b border-solid border-gray-100 py-8 `}>
                <h2 className="text-gray-500 font-bold pl-6 pb-2">{c2.secondTitle}</h2>
                <ul>
                    {
                        c2.category3?.map((c3: Category3) => (
                            <li key={c3.thirdId}><Link href={`${c3.thirdLink}`} className="font-medium hover:bg-rose-100 hover:text-red-600 pl-6 py-3 block">{c3.thirdName}</Link></li>
                        ))
                    }
                </ul>
            </div>
        ))
      }
    </div>
  )
}
