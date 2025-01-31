import Link from 'next/link';
import React from 'react';

export default function MyPageDrop() {
  return (
    <div className="my__page__dropdown absolute w-[150px] top-full bg-white border border-solid border-gray-100 rounded-sm text-sm pt-2" style={{ display: 'none', boxShadow: '0px 1px 1px 0px rgba(0,0,0,.15)' }}>
      <ul>
        <li><Link href="/myPage/myCoupon" className="block px-2 py-2">나의 쿠폰</Link></li>
        <li><Link href="/myPage/myCoupon" className="block px-2 py-2">주문/배송 조회</Link></li>
        <li><Link href="/myPage/myCoupon" className="block px-2 py-2">취소/반품 교환</Link></li>
        <li><Link href="/myPage/myCoupon" className="block px-2 py-2">고객센터</Link></li>
      </ul>
    </div>
  )
}
