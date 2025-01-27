import React from 'react';

import styled from 'styled-components';

import { wordArray } from '@/app/api/searchWord/route';

const Delete = styled.button`
    
`;

export default function LatestSearchWord({ allRank } : { allRank: wordArray[] }) {
  return (
    <div className="latest__word py-6 px-4 w-2/5 border-r border-solid border-gray-100">
      <h2 className="font-bold">최근 검색어</h2>
      {
        !allRank ?
      (
        <p className="mt-3">최근 검색어 내역이 없습니다.</p>
      ):
      (<div className="overflow-y-scroll h-[250px]">
          <div className="mt-3 text-sm text-gray-500">
              {
                  allRank.map((lw) => (
                      <div key={lw.wordId} className="flex justify-between mb-4">
                          <p>{lw.wordName}</p>
                          <Delete><span className="sr-only">닫기 버튼</span></Delete>
                      </div>
                  ))
              }
          </div>
        </div>
      )
      }
    </div>
  )
}
