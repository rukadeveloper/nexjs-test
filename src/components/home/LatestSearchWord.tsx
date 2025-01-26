import React from 'react';

import { latestWordType } from '@/interface/searchMenu';
import styled from 'styled-components';

const Delete = styled.button`
    
`;

export default function LatestSearchWord({ latestWord } : { latestWord : latestWordType[] }) {
  return (
    <div className="latest__word py-6 px-4 w-2/5 border-r border-solid border-gray-100">
      <h2 className="font-bold">최근 검색어</h2>
      {
        !latestWord ?
      (
        <p className="mt-3">최근 검색어 내역이 없습니다.</p>
      ):
      (
        <div className="mt-3 text-sm text-gray-500 flex justify-between">
            {
                latestWord.map((lw) => (
                    <>
                        <p>{lw.word}</p>
                        <Delete><span className="sr-only">닫기 버튼</span></Delete>
                    </>
                ))
            }
        </div>
      )
      }
    </div>
  )
}
