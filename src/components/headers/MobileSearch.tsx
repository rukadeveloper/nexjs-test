'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import MobileSearchWrapper from './MobileSearchWrapper';

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

export default function MobileSearch({ setSideMenu } : { setSideMenu : Dispatch<SetStateAction<boolean>>}) {

  const [mobileSearchOpen, setMobileSearchOpen] = useState<boolean>(false);

  const mobileSearchClick = () => {
    setSideMenu(false);
    setMobileSearchOpen(true);
  }

  const portalElement = document.querySelector('.root');

  return (
    <div className="mobile__search lg:hidden block">
      <MobileButton className="pl-8 relative hover:underline" onClick={mobileSearchClick}>검색하기</MobileButton>
      {portalElement && ReactDOM.createPortal(<MobileSearchWrapper mobileSearchOpen={mobileSearchOpen} setMobileSearchOpen={setMobileSearchOpen} />, portalElement)}
    </div>
  )
}
