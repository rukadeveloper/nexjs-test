'use client'

import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import InputWrap from '../shared/layouts/Input/InputWrap'
import { Button } from '../ui/button';
import { validate, ValidationRule, validationRules , ValidationRules } from '@/util/validation';
import Alert from './Alert';

type State = {
    id: any,
    idValid: boolean,
    idValidation: boolean,
    idError: { [key:string]: string },
    idValidationError: string, 
    idValidationOpen: boolean,
    pw: any,
    pwCheck: string,
    nick: string,
    name: string,
    email: string,
    phone: string
}

type Action = {
    type: string,
    val?: string,
    result?: IdCheckResult
}

type IdCheckResult = {
    valid: boolean,
    message: string
}

const isValid = (value: string, rules: ValidationRule[]): boolean => {

    if (!Array.isArray(rules)) {
      console.error('Rules is not an array:', rules);
      return false;
    }

    for (const rule of rules) {
        if(!rule.test(value)) {
            return false;
        }
    }
    return true;
}

const idChecking = async (value: string) : Promise<IdCheckResult> => {
    const formData = new FormData();

    if (value) {
      formData.append('uid', value);
    }
    try {
        const response = await fetch('/api/idCheck',{
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    } catch(err) {
        return {
            valid: false,
            message: ''
        }
    }
}

const formRules: ValidationRules = {
    id: [validationRules.required('id')],
    pw: [validationRules.required('pw'), validationRules.minLength(8)],
  };

const formReducer: React.Reducer<State, Action> = (state, action) => {
    switch (action.type) {
      case 'UPDATE_ID':
         const newData = {...state, id: action.val }
         const isValids = isValid(action.val!, formRules.id)
         const errors = validate(newData, formRules);
         return {...newData, idValid: isValids, idError: errors}
      case 'ID_VALIDATION':
        return { ...state, idValidation: action.result!.valid, idValidationError: action.result!.message, idValidationOpen: true }
      case 'UPDATE_PW':
        return { ...state, pw: action.val };
      default:
        return state;
    }
  };

export default function Forms() {

  const [rootElement, setRootElement] = useState<Element | null>(null);

  const [inputState, dispatch] = useReducer(formReducer, {
    id: '',
    idValid: false,
    idValidation: false,
    idError: {},
    idValidationError: '',
    idValidationOpen: false,
    pw: '',
    pwCheck: '',
    nick: '',
    name: '',
    email: '',
    phone: ''
  });

  const idChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_ID', val: e.target.value });
  }

  const pwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_PW', val: e.target.value })
  }

  const idValidate = async (e: React.MouseEvent<HTMLButtonElement>) => {
     e.preventDefault();
     const result: IdCheckResult = await idChecking(inputState.id);
     dispatch({ type: 'ID_VALIDATION', result });
     document.body.classList.add('dimmed');
  }
  
  useEffect(() => {
    const element = document.querySelector('#root');
    if (element) setRootElement(element);
  },[])

  useEffect(()=>{
    console.log(inputState.idValidationError);
  },[inputState])

  return (
    <form className="w-[450px]">
      <InputWrap>
        <Button className="mt-4 py-6 rounded-[8px] bg-gradient-to-r from-red-400 to-orange-500 text-base text-white" disabled={!inputState.idValid} onClick={idValidate} >중복확인</Button>
        {!inputState.idValid && <p className="text-red-800 mt-4 text-center">{inputState.idError.ids}</p>}
        <Input type="text" id="uid" className="bg-white p-6 border-none" onChange={idChange} value={inputState.id} />
        <Label htmlFor="uid" className="text-base mb-2">아이디</Label>
        {rootElement && ReactDOM.createPortal(<Alert errorMessage={inputState.idValidationError} popupOpen={inputState.idValidationOpen} />,rootElement) }
      </InputWrap>
      <InputWrap>
        <Input type="password" id="upw" className="bg-white p-6 border-none" onChange={pwChange} value={inputState.pw} />
        <Label htmlFor="upw" className="text-base mb-2">비밀번호</Label>
      </InputWrap>
      <InputWrap>
        <Input type="password" id="upwCheck" className="bg-white p-6 border-none"  />
        <Label htmlFor="upwCheck" className="text-base mb-2">비밀번호 확인</Label>
      </InputWrap>
      <InputWrap>
        <Button className="mt-4 py-6 rounded-[8px] bg-gradient-to-r from-red-400 to-orange-500 text-base text-white">중복확인</Button>
        <Input type="text" id="unickname" className="bg-white p-6 border-none" />
        <Label htmlFor="unickname" className="text-base mb-2">닉네임</Label>
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
