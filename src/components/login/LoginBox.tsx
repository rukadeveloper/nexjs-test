'use client';

import React, { useState } from 'react';
import HomeLogo from '../home/HomeLogo'
import { Input } from '../ui/input'
import InputWrapper from './InputWrapper'

const LoginBox = () => {
  const [idTouched,setIdTouched] = useState<boolean>(false);
  const [passwordTouched,setPasswordTouched] = useState<boolean>(false);

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

  return (
    <div className="login__box w-[500px] h-[500px] bg-white shadow-md flex flex-col items-center p-8">
      <HomeLogo />
      <InputWrapper>
        <Input type="text" placeholder="아이디 입력" className={`w-full border border-solid border-gray-100 rounded-t1-[2px] rounded-tr-[2px] p-6 placeholder-slate-400 ${idTouched ? 'border-red-700 relative after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-red-700' : ''}`} onFocus={idFocus} onBlur={idBlur} />
        <Input type="password" placeholder="비밀번호 8자~20자" className={`w-full border border-solid border-gray-100 rounded-t1-[2px] rounded-tr-[2px] p-6 placeholder-slate-400 ${passwordTouched ? 'border-red-700 rounded-t1-[0px] rounded-tr-[0px]' : ''}`} style={{ marginTop: '-1px'}} onFocus={passwordFocus} onBlur={passwordBlur} />
      </InputWrapper>
    </div>
  )
}

export default LoginBox
