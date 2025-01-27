'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import SearchDrop from './SearchDrop';
import { Input } from '../ui/input';
import InputWrapper from './InputWrapper';
import ButtonWrapper from './ButtonWrapper';
import SearchWordWrapper from './SearchWordWrapper';
import LatestSearchWord from './LatestSearchWord';
import { wordArray } from '@/app/api/searchWord/route';

const SearchBtn = styled.button`
    width: 100%;
    height: 100%;
    background: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png') no-repeat;
    background-size: 350px 330px;
    background-position: -162px -45px;
`;

export default function Search() {
    const [focus,setFocus] = useState<boolean>(false);
    const [searchValue,setSearchValue] = useState<string>('');
    const [wordSeeNumber, setWordSeeNumber] = useState<number>(1);
    const [allRank,setAllRank] = useState<wordArray[]>([]);

    useEffect(()=>{
        const fetcha = async () => {
            const res = await fetch('/api/searchWord');
            const data = await res.json();
            setAllRank(data);
        }

        fetcha();
    },[])

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const valueSubmit : React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setWordSeeNumber(prev => prev + 1);

        try {
            const formData = new FormData();
        
            formData.append('wordName', searchValue);
            formData.append('wordSeeNumber', wordSeeNumber.toString());
        
            const response = await fetch('/api/searchWord', {
                method: 'POST',
                body: formData
            });
        
            if (response.ok) {
                setSearchValue(''); // 성공적으로 응답을 받은 경우 입력 필드 초기화
            } else {
                // 응답이 실패한 경우 에러 처리
                const errorData = await response.json();
                console.error('Error:', errorData.error);
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Fetch error:', error); // 에러 로그 출력
        }
    }

    return (
        <form className="search w-2/5 h-12 bg-stone-100 ml-5 border border-solid border-zinc-300 rounded-3xl flex items-center relative" onSubmit={valueSubmit}>
            <SearchDrop />
            <InputWrapper>
                <Input type="text" style={{ border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }} onFocus={()=>{ setFocus(true); }} onBlur={() => { setFocus(false); }} onChange={changeValue} value={searchValue} />
            </InputWrapper>
            <ButtonWrapper>
                <SearchBtn type="submit">
                    <span className="sr-only">검색</span>
                </SearchBtn>
            </ButtonWrapper>
            <SearchWordWrapper focus={focus}>
                <LatestSearchWord allRank={allRank} />
            </SearchWordWrapper>
        </form>
    );
}