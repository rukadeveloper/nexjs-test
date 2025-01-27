import React,{ useState, useEffect } from 'react';
import Link from 'next/link';

import { wordArray } from '@/app/api/searchWord/route';


export default function WordRank({wd} : { wd : wordArray }) {

  return (
    <div className="word__rank__each w-full">
      <Link href="/" className="w-full block">
        <span className="font-bold flex items-center"><b className="mr-3 italic bg-gradient-to-r from-red-700 to-rose-600 bg-clip-text text-transparent font-bold">{wd.wordId}</b>{wd.wordName}</span>
      </Link>
    </div>
  )
}
