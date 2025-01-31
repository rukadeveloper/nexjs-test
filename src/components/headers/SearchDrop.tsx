'use client';

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { searchMenuType } from '@/interface/searchMenu';
import DropWrapper from './DropWrapper';
import DropAll from './DropAll';

const SearchButton = styled.button`
    position: relative;
    width: 100%;
    text-align: left;
    &:hover {
        text-decoration: underline;
    }
    &.clicked {
        background-color: #fff;
        margin-top: -1px;
        padding-bottom: -1px;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 1.3rem 1.3rem 0 0;
    }
    &.clicked::after {
        clip-path: polygon(100% 100%,50% 0,0 100%);
    }
    &::after {
        content: '';
        display: block;
        width: 8px;
        height: 6px;
        clip-path: polygon(100% 0,50% 100%,0 0);
        background-color: #000;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.9rem;
    }
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 1px;
        height: 20px;
        background-color: rgba(0,0,0,.15);
        top: 50%;
        transform: translateY(-50%);
        right: 0;
    }
`

const menu: searchMenuType[] = [
    {
        label: '통합검색',
        id: 'u1'
    },
    {
        label: '쇼킹딜',
        id: 'u2'
    },
    {
        label: '가격비교',
        id: 'u3'
    },
    {
        label: '아마존',
        id: 'u4'
    },
]

export default function SearchDrop() {
    const dropRef = useRef<HTMLDivElement>(null);

    const [searchOn, setSearchOn] = useState<boolean>(false);
    const [text,setText] = useState<string>('통합검색')
    const searchClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setSearchOn(prev => !prev);
    }

    useEffect(()=>{
        const handleOutSideClick = (e: Event) => {
            if(dropRef.current && !dropRef.current.contains(e.target as Node)) {
                setSearchOn(false);
            }
        }
        document.addEventListener('click', handleOutSideClick);
    },[])

    return (
        <div className="search__drop w-2/6 text-[0.95rem] relative h-full">
            <DropAll ref={dropRef}>
                <SearchButton onClick={searchClick} className={`${searchOn ? 'clicked' : ''} pl-5 h-full`} >{text}</SearchButton>
                <DropWrapper menu={menu} searchOn={searchOn} setText={setText} text={text} setSearchOn={setSearchOn} />
            </DropAll>
        </div> 
    );
}