import Link from 'next/link'
import React from 'react'

export default function Find() {
  return (
    <div className="mt-5">
      <ul className="flex items-center gap-5 text-sm">
        <li><Link href="/" className="hover:underline">아이디 찾기</Link></li>
        <li><Link href="/join" className="hover:underline">회원가입</Link></li>
        <li><Link href="/" className="hover:underline">비밀번호 찾기</Link></li>
      </ul>
    </div>
  )
}
