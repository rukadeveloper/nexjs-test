'use client';

import React, { useContext, useEffect, useState } from 'react';
import HomeLogo from '../headers/HomeLogo'
import { Input } from '../ui/input';
import { Button } from "@/components/ui/button";
import InputWrapper from './InputWrapper'
import CheckboxWrap from '../shared/layouts/checkbox/CheckboxWrap';
import { User } from '@/app/api/login/route';
import { useRouter } from 'next/navigation';
import { AuthContext, AuthType } from '@/contexts/AuthContext';

type rData = {
  message: string,
  data: User | null
}


const LoginBox = () => {
  const [idTouched,setIdTouched] = useState<boolean>(false);
  const [passwordTouched,setPasswordTouched] = useState<boolean>(false);
  const [idVal, setIdVal] = useState<string>('');
  const [idValid, setIdValid] = useState<boolean>(false);
  const [passwordVal, setPasswordVal] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [rData,setRData] = useState<rData | null>(null);
  const [errMsg,setErrMsg] = useState<string | undefined>("");

  const go = useRouter();


  const idFocus = () => {
    setIdTouched(true);
    setPasswordTouched(false);
  }

  const idBlur = () => {
    setIdTouched(false);
    setPasswordTouched(false);
  }

  const passwordFocus = () => {
    setIdTouched(false);
    setPasswordTouched(true);
  }

  const passwordBlur = () => {
    setIdTouched(false);
    setPasswordTouched(false);
  }

  const idChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setIdVal(e.target.value);
  }

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value);
  }

  const AuthContexts = useContext(AuthContext);

  const {setIsAuth } = AuthContexts;

  const loginSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(idValid && passwordValid && idVal && passwordVal) {
        const formData = new FormData();

        formData.append('id',idVal);
        formData.append('password',passwordVal);

        try {
          const response = await fetch('/api/login',{
            method: 'POST',
            body: formData
          });
          const data = await response.json();
          setRData(data);
          
        } catch(err) {
          console.error('err: ' + err);
        }
    }
  }

  useEffect(()=>{
    if(idVal.trim() !== '') {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  },[idVal]);

  useEffect(()=>{
    if(passwordVal.trim() !== '') {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  },[passwordVal]);

  useEffect(()=>{
    if(rData?.message === '성공') {
      go.push('/');
      setIsAuth(true);
    } else {  
      setErrMsg(rData?.message);
      setIsAuth(false);
    }
  },[rData])

  return (
    <form className="login__box w-[500px] h-[500px] bg-white shadow-md flex flex-col justify-center items-center p-8" onSubmit={loginSubmit}>
      <HomeLogo isPrevent />
      <InputWrapper>
        <Input type="text" placeholder="아이디 입력" className={`w-full border border-solid border-gray-100 rounded-t1-[2px] rounded-tr-[2px] p-6 placeholder-slate-400 ${idTouched ? 'border-red-700 relative after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-red-700' : ''}`} onFocus={idFocus} onBlur={idBlur} onChange={idChange} value={idVal} />
        <Input type="password" placeholder="비밀번호 8자~20자" className={`w-full border border-solid border-gray-100 rounded-t1-[2px] rounded-tr-[2px] p-6 placeholder-slate-400 ${passwordTouched ? 'border-red-700 rounded-t1-[0px] rounded-tr-[0px]' : ''}`} style={{ marginTop: '-1px'}} onFocus={passwordFocus} onBlur={passwordBlur} onChange={passwordChange} value={passwordVal} />
      </InputWrapper>
      {(!idValid) || (!passwordValid) && <p className="text-rose-800 mt-5">아이디 혹은 패스워드가 올바르지 않은 형태입니다.</p>}
      {errMsg && <p className="text-rose-800 mt-5">{errMsg}</p> }
      <Button type="submit" className='w-[300px] mt-5 py-6 bg-gradient-to-r from-red-400 to-orange-500 text-base text-white font-bold disabled:opacity-45' disabled={!(idValid && passwordValid)}>로그인</Button>
      <CheckboxWrap id="keepLogin" con="로그인을 유지합니다." />
    </form>
  )
}

export default LoginBox
