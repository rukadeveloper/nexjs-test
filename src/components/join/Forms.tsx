'use client'

import React, { useEffect, useReducer, useState } from 'react';
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import InputWrap from '../shared/layouts/Input/InputWrap'
import { Button } from '../ui/button';
import { validate, ValidationRule, validationRules , ValidationRules } from '@/util/validation';

type States = {
    id: string,
    idValid: boolean
    idError: string,
    pw: string,
    pwValid: boolean,
    pwError: string,
    pwCheck: string,
    pwCheckValid: boolean,
    pwCheckError: string,
    nick: string,
    nickValid: boolean,
    nickError: string,
    name: string,
    nameValid: boolean,
    nameError: string,
    email: string,
    phone: string
}

type Action = 
  | { type: 'UPDATE_ID'; val: string }
  | { type: 'UPDATE_PW'; val: string }
  | { type: 'UPDATE_PWCHECK', val: string }
  | { type: 'UPDATE_NICK', val: string }
  | { type: 'UPDATE_NAME', val: string }

const isValid = (value: string, rules: ValidationRule[]): boolean => {

    for (const rule of rules) {
        if(!rule.test(value)) {
            return false;
        }
    }
    return true;
  }

const formRules = (password: string): ValidationRules => ({
  id: [validationRules.required('id'), validationRules.id()],
  pw: [validationRules.required('pw'), validationRules.minLength(8), validationRules.maxLength(20)],
  pwCheck: [validationRules.required('pwCheck'), validationRules.pwCheck(password)],
  nick: [validationRules.required('nick')],
  name: [validationRules.required('name'),validationRules.minLength(2)]
});


const formReducer: React.Reducer<States, Action> = (state, action) => {
    const rules = formRules(state.pw);

    switch (action.type) {
      case 'UPDATE_ID':
         if(action.val !== undefined) {
            return { ...state, id: action.val, idValid: isValid(action.val, rules.id), idError: validate(action.val, rules.id) }
         }
      case 'UPDATE_PW':
        if(action.val !== undefined) {
          return {
            ...state, 
            pw: action.val, 
            pwValid: isValid(action.val, rules.pw), 
            pwError: validate(action.val, rules.pw),
          }
        }
      case 'UPDATE_PWCHECK':
        if(action.val !== undefined) {
          return {
            ...state, 
            pwCheck: action.val, 
            pwCheckValid: isValid(action.val, rules.pwCheck), 
            pwCheckError: validate(action.val, rules.pwCheck)
          }
        }
      case 'UPDATE_NICK':
        if(action.val !== undefined) {
          return {
            ...state,
            nick: action.val,
            nickValid: isValid(action.val,rules.nick),
            nickError: validate(action.val, rules.nick)
          }
        }
      case 'UPDATE_NAME':
        if(action.val !== undefined) {
          return {
            ...state,
            name: action.val,
            nickValid: isValid(action.val, rules.name),
            nickError: validate(action.val, rules.name)
          }
        }
      default:
        return state;
    }
  }

export default function Forms() {

  const [rootElement, setRootElement] = useState<Element | null>(null);

  const [inputState, dispatch] = useReducer(formReducer, {
    id: '',
    idValid: false,
    idError: '',
    pw: '',
    pwValid: false,
    pwError: '',
    pwCheck: '',
    pwCheckValid: false,
    pwCheckError: '',
    nick: '',
    nickValid: false,
    nickError: '',
    name: '',
    nameValid: false,
    nameError: '',
    email: '',
    phone: ''
  });

  const idChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_ID', val: e.target.value });
  }
  
  const pwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_PW', val: e.target.value })
  }

  const pwCheckChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_PWCHECK', val: e.target.value })
  }

  const nickChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_NICK', val: e.target.value })
  }

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_NAME', val: e.target.value })
  }
  
  useEffect(() => {
    const element = document.querySelector('#root');
    if (element) setRootElement(element);
  },[])

  return (
    <form className="w-[450px]">
      <InputWrap>
        {!inputState.idValid && <p className="text-red-800 mt-4 text-center">{inputState.idError}</p>}
        <Input type="text" id="uid" className="bg-white p-6 border-none" onChange={idChange} value={inputState.id} />
        <Label htmlFor="uid" className="text-base mb-2">아이디</Label>
      </InputWrap>
      <InputWrap>
        {!inputState.pwValid && <p className="text-red-800 mt-4 text-center">{inputState.pwError}</p>}
        <Input type="password" id="upw" className="bg-white p-6 border-none" onChange={pwChange} value={inputState.pw} />
        <Label htmlFor="upw" className="text-base mb-2">비밀번호</Label>
      </InputWrap>
      <InputWrap>
        {!inputState.pwCheckValid && <p className="text-red-800 mt-4 text-center">{inputState.pwCheckError}</p>}
        <Input type="password" id="upwCheck" className="bg-white p-6 border-none" onChange={pwCheckChange} value={inputState.pwCheck} />
        <Label htmlFor="upwCheck" className="text-base mb-2">비밀번호 확인</Label>
      </InputWrap>
      <InputWrap>
        {!inputState.nickValid && <p className="text-red-800 mt-4 text-center">{inputState.nickError}</p>}
        <Input type="text" id="unickname" className="bg-white p-6 border-none" onChange={nickChange} value={inputState.nick} />
        <Label htmlFor="unickname" className="text-base mb-2">닉네임</Label>
      </InputWrap>
      <InputWrap>
        {!inputState.nameValid && <p className="text-red-800 mt-4 text-center">{inputState.nameError}</p>}
        <Input type="text" id="uname" className="bg-white p-6 border-none" onChange={nameChange} value={inputState.name} />
        <Label htmlFor="uname" className="text-base mb-2">이름</Label>
      </InputWrap>
      <InputWrap>
        <Input type="text" id="uemail" className="bg-white p-6 border-none" />
        <Label htmlFor="uemail" className="text-base mb-2">이메일</Label>
      </InputWrap>
      <InputWrap>
        <Input type="text" id="uphone" className="bg-white p-6 border-none" />
        <Label htmlFor="uphone" className="text-base mb-2">휴대전화</Label>
      </InputWrap>
      <Button type="submit" className='w-full mt-5 mb-5 py-6 bg-gradient-to-r from-red-400 to-orange-500 text-base text-white font-bold disabled:opacity-45'>회원가입하기</Button>
    </form>
  )
}
