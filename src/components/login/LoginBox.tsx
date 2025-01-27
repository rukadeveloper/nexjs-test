import React from 'react'
import HomeLogo from '../home/HomeLogo'
import { Input } from '../ui/input'
import InputWrapper from './InputWrapper'

const LoginBox = () => {
  return (
    <div className="login__box w-[500px] h-[500px] bg-white shadow-md flex flex-col items-center p-8">
      <HomeLogo />
      <InputWrapper>
        <Input type="text" placeholder="아이디 입력" className="w-full border border-solid border-gray-100 rounded-t1-[2px] rounded-tr-[2px] p-6 placeholder-slate-400"/>
        <Input type="password" placeholder="비밀번호 8자~20자" className="w-full border border-solid border-gray-100 rounded-t1-[2px] rounded-tr-[2px] p-6 placeholder-slate-400" style={{ marginTop: '-1px'}} />
      </InputWrapper>
    </div>
  )
}

export default LoginBox
