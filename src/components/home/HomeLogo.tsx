'use client';

import Link from 'next/link';
import React from 'react';

import styled from 'styled-components';

const HLogo = styled.h1`
    width: 100px;
    height: 44px;
    background: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png') no-repeat;
    background-position: -183px 3px;
    background-size: 395px 333px;
    margin-left: 1.8rem;
`;

export default function HomeLogo() {
    return (
        <HLogo className="logo cursor-pointer">
            <Link href="/">
                <span className="sr-only">Home Logo</span>
            </Link>
        </HLogo>
    );
}