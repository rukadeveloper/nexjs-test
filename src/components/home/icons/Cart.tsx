'use client';

import React from 'react';
import styled from 'styled-components';

const CartButton = styled.button`
    width: 40px;
    height: 40px;
    background-image: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png'); 
    background-size: 350px 350px;
    background-position: -403px -154px;
    &:hover {
        background-position: -455px -154px;
    }
`;

export default function Cart() {
  return (
    <div className="cart__wrapper flex items-center">
      <CartButton>
        <span className="sr-only">카트 추가 버튼</span>
      </CartButton>
    </div>
  )
}
