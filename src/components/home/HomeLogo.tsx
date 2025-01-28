'use client';

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

import styled from 'styled-components';

const HLogo = styled.h1`
    width: 90px;
    height: 44px;
    background: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png') no-repeat;
    background-position: -163px 4px;
    background-size: 355px 313px;
`;

export default function HomeLogo({ isPrevent } : { isPrevent : boolean }) {
    const router = useRouter();

    const goHome = () => {
        router.push('/')
    }
    

    return (
        <HLogo className={`logo cursor-pointer ml-0 ${!isPrevent ? 'lg:ml-6' : 'mt-8'}`} onClick={goHome}>
            <Link href="/">
                <span className="sr-only">Home Logo</span>
            </Link>
        </HLogo>
    );
}