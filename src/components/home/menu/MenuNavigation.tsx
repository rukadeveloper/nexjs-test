import Link from 'next/link'
import React from 'react'

export default function MenuNavigation() {
  return (
    <ul className="flex items-center" style={{ fontWeight: '800', fontSize: '1.1rem' }}> 
      <li><Link href="/" className="block py-4 px-4">베스트</Link></li>
      <li><Link href="/" className="block py-4 px-4">쇼킹딜</Link></li>
      <li><Link href="/" className="block py-4 px-4">슈팅 배송</Link></li>
      <li><Link href="/" className="block py-4 px-4 relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-[50%] after:w-[1px] after:h-[16px] after:bg-slate-400">폰 기획전</Link></li>
      <li><Link href="/" className="block py-4 px-4">신선 식품</Link></li>
      <li><Link href="/" className="block py-4 px-4">9900원 샵</Link></li>
      <li><Link href="/" className="block py-4 px-4">리퍼블리</Link></li>
      <li><Link href="/" className="block py-4 px-4">T공식대리점</Link></li>
    </ul>
  )
}
