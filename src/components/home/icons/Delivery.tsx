'use client';

import React from 'react';
import styled from 'styled-components';

const DeliveryButton = styled.button`
    width: 40px;
    height: 40px;
    background-image: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png'); 
    background-size: 350px 350px;
    background-position: -511px -154px;
    &:hover {
        background-position: -704px -209px;
    }
`;

export default function Delivery() {
  return (
    <div className="delivery__wrapper flex items-center">
      <DeliveryButton>
        <span className="sr-only">택배 버튼</span>
      </DeliveryButton>
    </div>
  )
}
