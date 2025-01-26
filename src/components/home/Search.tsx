'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import SearchDrop from './SearchDrop';
import { Input } from '../ui/input';
import InputWrapper from './InputWrapper';
import ButtonWrapper from './ButtonWrapper';
import SearchWordWrapper from './SearchWordWrapper';
import LatestSearchWord from './LatestSearchWord';
import { latestWordType } from '@/interface/searchMenu';

const SearchBtn = styled.button`
    width: 100%;
    height: 100%;
    background: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png') no-repeat;
    background-size: 350px 330px;
    background-position: -162px -45px;
`;

const latestWord: latestWordType[] = [
    {
        word: '안녕하세요'
    }
]

export default function Search() {
    const [focus,setFocus] = useState<boolean>(false);

    return (
        <div className="search w-2/5 h-12 bg-stone-100 ml-5 border border-solid border-zinc-300 rounded-3xl flex items-center relative">
            <SearchDrop />
            <InputWrapper>
                <Input type="text" style={{ border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }} onFocus={()=>{ setFocus(true); }} onBlur={() => { setFocus(false); }} />
            </InputWrapper>
            <ButtonWrapper>
                <SearchBtn>
                    <span className="sr-only">검색</span>
                </SearchBtn>
            </ButtonWrapper>
            <SearchWordWrapper focus={focus}>
                <LatestSearchWord latestWord={latestWord} />
            </SearchWordWrapper>
        </div>
    );
}