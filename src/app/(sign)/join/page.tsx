import HomeLogo from '@/components/headers/HomeLogo'
import Forms from '@/components/join/Forms'
import React from 'react'

export default function JoinPage() {
  return (
    <div className="w-[500px] h-[700px] bg-[#f5f6f8] shadow-md overflow-y-auto">
      <div className="flex flex-col items-center" >
        <HomeLogo isPrevent />
        <h2 className="text-center font-bold text-2xl mt-6 mb-6">회원가입</h2>
        <Forms />
      </div>
    </div>
  )
}
