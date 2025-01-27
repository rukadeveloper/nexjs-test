import React from 'react';

import styled from 'styled-components';

const MobileButton = styled.button`
    &::after {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-image: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png');
        background-repeat: no-repeat;
        background-size: 338px 313px;
        background-position: -138px -289px; 
    }
    
`;

export default function MobileSearch() {
  return (
    <div className="mobile__search lg:hidden block">
      <MobileButton className="pl-8 relative hover:underline">검색하기</MobileButton>
    </div>
  )
}
