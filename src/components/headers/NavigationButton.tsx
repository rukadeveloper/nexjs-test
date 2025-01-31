'use client';

import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 2px 1px 2px 2px rgba(0,0,0,0.05);
    position: relative;
    &::after {
        content: '';
        display: block;
        width: 36px;
        height: 36px;
        background: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png') no-repeat;
        background-size: 375px 283px;
        background-position: -333px -185px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`;


export default function NavigationButton({ setSideMenu } : { setSideMenu : Dispatch<SetStateAction<boolean>> }) {

    const sideMenuClick = () => {
        setSideMenu(true);
        document.body.classList.add('dimmed');
    }

    return (
        <div className="line__button flex items-center">
            <Buttons onClick={sideMenuClick}>
                <span className="sr-only">라인있는 내비게이션 버튼</span>
            </Buttons>
        </div>
    )
}