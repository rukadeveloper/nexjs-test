'use client';

import React from 'react';
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
        background-size: 444px 359px;
        background-position: -398px -240px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`

export default function NavigationButton() {
    return (
        <div className="line__button flex items-center">
            <Buttons>
                <span className="sr-only">라인있는 내비게이션 버튼</span>
            </Buttons>
        </div>
    )
}