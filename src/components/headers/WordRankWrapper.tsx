import React, { useState, useEffect } from 'react';

import { wordArray } from '@/app/api/searchWord/route'
import WordRank from './WordRank';

export default function WordRankWrapper() {
  const [wordData,setWordData] = useState<wordArray[]>([]);

  const [height,setHeight] = useState<number>(0);

  useEffect(()=> {
      const timer = setInterval(() => {
          if(wordData.length > 0) setHeight( prev => (prev + 24) );
      },2000);

      if(height === 24 * (wordData?.length)) {
        setHeight(0);
      }

      console.log(wordData.length);

      return () =>  clearInterval(timer);
  },[wordData, height])
  
  useEffect(()=>{
    const fetchWord = async () => {
        const response = await fetch('/api/searchWord');
        const data = await response.json();
        setWordData(data);
        console.log(data);
    }

    fetchWord();
  },[])

  return (
    <div className="word__rank__wrapper h-[24px] w-[240px] lg:flex hidden overflow-hidden ml-4 items-center">
      <div className="move" style={{ marginTop: `-${height}px`, transition: 'all .4s' }}>
      {
        wordData.length > 0 ? 
        (
          wordData?.map((wd: wordArray) => (<WordRank key={wd.wordId} wd={wd} />))
        ) :
        (
          <div className="text-sm text-red-700">Loading...</div>
        )
      }
      </div>
    </div>
  )
}
