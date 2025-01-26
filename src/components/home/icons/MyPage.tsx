import React from 'react'

import styled from 'styled-components';
import MyPageDrop from './MyPageDrop';

const Div = styled.div`
  &:hover .my__page__dropdown {
    display: block !important;
  }
`;

const MypageButton = styled.button`
 width: 30px;
 height: 30px;
 background-image: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png'); 
 background-size: 300px 300px;
 background-position: -568px -2px;
 &:hover {
        background-position: -568px -42px;
 }
`;

export default function MyPage() {
  return (
    <Div className="my__page__wrapper flex items-center relative">
        <MypageButton>
            <span className="sr-only">마이 페이지 아이콘</span>
        </MypageButton>
        <MyPageDrop />
    </Div>
  )
}
