'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import InputWrap from '../shared/layouts/Input/InputWrap'
import { Button } from '../ui/button';
import { validate, ValidationRule, validationRules , ValidationRules } from '@/util/validation';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

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
    emailValid: boolean,
    emailError: string,
    phone: string,
    phoneValid: boolean,
    phoneError: string
}

type Action = 
  | { type: 'UPDATE_ID'; val: string }
  | { type: 'UPDATE_PW'; val: string }
  | { type: 'UPDATE_PWCHECK', val: string }
  | { type: 'UPDATE_NICK', val: string }
  | { type: 'UPDATE_NAME', val: string }
  | { type: 'UPDATE_EMAIL', val: string }
  | { type: 'UPDATE_PHONE', val: string }

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
  name: [validationRules.required('name'),validationRules.minLength(2)],
  email: [validationRules.required('email'), validationRules.email()],
  phone: [validationRules.required('email'), validationRules.phone()]
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
            nameValid: isValid(action.val, rules.name),
            nameError: validate(action.val, rules.name)
          }
        }
      case 'UPDATE_EMAIL':
        if(action.val !== undefined) {
          return {
            ...state,
            email: action.val,
            emailValid: isValid(action.val, rules.email),
            emailError: validate(action.val, rules.email)
          }
        }
      case "UPDATE_PHONE":
        if(action.val !== undefined) {
          return {
            ...state,
            phone: action.val,
            phoneValid: isValid(action.val, rules.phone),
            phoneError: validate(action.val, rules.phone)
          }
        }
      default:
        return state;
    }
  }

export default function Forms() {
  const fileRef = useRef<HTMLInputElement>(null);

  const go = useRouter();

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
    emailValid: false,
    emailError: '',
    phone: '',
    phoneValid: false,
    phoneError: ''
  });

  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>('https://11stbucket.s3.ap-northeast-2.amazonaws.com/profile_basic.webp');

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

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_EMAIL', val: e.target.value })
  }

  const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_PHONE', val: e.target.value })
  }

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  const avatarClick = async (e:React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    fileRef.current?.click();

    if(!file) return;

    try {
      const response = await fetch(`/api/upload`,{
        method: 'POST',
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type
        })
      })
      
      const data = await response.json();
      setUrl(data.url);

    } catch(error) {
      console.error('실패');
    }
  }

  const submitAble = inputState.idValid && inputState.pwValid && inputState.pwCheckValid && inputState.nickValid && inputState.nameValid && inputState.emailValid && inputState.phoneValid

  const signSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(submitAble) {
      const formData = new FormData();

      formData.append('uid',inputState.id);
      formData.append('upw',inputState.pw);
      formData.append('unick',inputState.nick);
      formData.append('uname',inputState.name);
      formData.append('uemail',inputState.email);
      formData.append('uphone',inputState.phone);

      try {
        const response = await fetch(`/api/signup`,{
          method: 'POST',
          body: formData
        })

        const data = await response.json();

        if(data.message === "회원가입 성공") {
          alert('회원가입 성공');
          go.push('/')
        } else {
          alert('회원가입 실패!');
        }

      } catch(err) {
        console.log('err' + err);
        alert('서버 오류!');
      }
    }
  }


  return (
    <form className="w-[450px]" onSubmit={signSubmit}>
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
        {!inputState.emailValid && <p className="text-red-800 mt-4 text-center">{inputState.emailError}</p>}
        <Input type="text" id="uemail" className="bg-white p-6 border-none" onChange={emailChange} value={inputState.email} />
        <Label htmlFor="uemail" className="text-base mb-2">이메일</Label>
      </InputWrap>
      <InputWrap>
        {!inputState.phoneValid && <p className="text-red-800 mt-4 text-center">{inputState.phoneError}</p>}
        <Input type="text" id="uphone" className="bg-white p-6 border-none" onChange={phoneChange} value={inputState.phone} />
        <Label htmlFor="uphone" className="text-base mb-2">휴대전화</Label>
      </InputWrap>
      <InputWrap>
        <Avatar className="mt-4" onClick={avatarClick}>
          <AvatarImage src={url} alt="profile__images"/>
          <AvatarFallback>프로필 사진</AvatarFallback>
        </Avatar>
        <Input type="file" id="uprofile" className="hidden" ref={fileRef} onChange={fileChange} />
        <Label className="text-base mb-2">프로필 사진 업로드하기</Label>
      </InputWrap>
      <Button type="submit" className='w-full mt-5 mb-5 py-6 bg-gradient-to-r from-red-400 to-orange-500 text-base text-white font-bold disabled:opacity-45' disabled={!submitAble}>회원가입하기</Button>
    </form>
  )
}
