'use client';

import React, { useEffect, useReducer, useState } from 'react';
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

type Word = {
    wordName: string,
    wordViews: number,
    originalRanking: number,
    changedRanking: number,
    searchCategoryNum: number,
    createdAt: Date,
    deletedAt: Date
}

type Action = 
            | { type: "change_value", val: string }
            | { type: "change_views" }
            | { type: "change_ranking" }

const searchReducer : React.Reducer<Word, Action> = (state, action) => {
    switch(action.type) {
        case "change_value":
            return {...state, wordName: action.val }
        case "change_views": 
            return {...state, wordViews: state.wordViews + 1 }
        default:
            return state;
    }
}

export default function Search() {
    const [focus, setFocus] = useState<boolean>(false);
    const [allRank,setAllRank] = useState<wordArray[]>([]);

    const [searchInfo, dispatch] = useReducer(searchReducer,{
        wordName: '',
        wordViews: 0,
        originalRanking: 1,
        changedRanking: 1,
        searchCategoryNum: 1,
        createdAt: new Date(),
        deletedAt: new Date()
    })

    useEffect(()=>{
        const fetcha = async () => {
            const res = await fetch('/api/searchWord');
            const data = await res.json();
            if(data.length > 0) setAllRank(data);
        }

        fetcha();
    },[])

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'change_value', val: e.target.value })
    }

    const valueSubmit : React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({ type: 'change_views' });

        try {
            const formData = new FormData();
        
            if (searchInfo.wordName.trim().length > 0) {
                formData.append('wordName', searchInfo.wordName);
                formData.append('wordViews', searchInfo.wordViews.toString());
                formData.append('originalRanking', searchInfo.originalRanking.toString());
                formData.append('changedRanking', searchInfo.changedRanking.toString());
                formData.append('searchCategoryNum', searchInfo.searchCategoryNum.toString());
                formData.append('createdAt', searchInfo.createdAt.toString());
                formData.append('deletedAt', searchInfo.deletedAt.toString())
            } else {
                alert('검색어를 입력해주세요.');
            }
        
            const response = await fetch('/api/searchWord', {
                method: 'POST',
                body: formData
            });
       
            if (response.ok) {
                dispatch({ type: 'change_value' , val: '' })
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
        <form className="search w-2/5 h-12 bg-stone-100 ml-5 border border-solid border-zinc-300 rounded-3xl flex items-center relative hidden lg:flex" onSubmit={valueSubmit}>
            <SearchDrop />
            <InputWrapper>
                <Input type="text" placeholder="검색어를 입력해주세요." className="border-none bg-transparent placeholder:text-gray-500 shadow-none" onFocus={()=>{ setFocus(true); }} onBlur={() => { setFocus(false); }} onChange={changeValue} value={searchInfo.wordName} />
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