import React, { Dispatch, SetStateAction } from 'react'
import { Input } from '../ui/input';
import { Button } from "@/components/ui/button";

export default function MobileSearchWrapper({ mobileSearchOpen, setMobileSearchOpen } : { mobileSearchOpen: boolean, setMobileSearchOpen : Dispatch<SetStateAction<boolean>> }) {

  const inputClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMobileSearchOpen(false);
    document.body.classList.remove('dimmed');
  }

  return (
    <form className={`mobile__search__wrapper fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[500px] h-[50px] bg-white shadow-md z-30 ${!mobileSearchOpen ? 'hidden' : ''}`}>
        <Input type="text" placeholder="검색어를 입력하세요." className="block h-full border-none" />
        <div className="absolute right-[1rem] top-1/2 -translate-y-[50%] flex gap-5">
            <Button type="submit" className="hover:bg-black hover:text-white hover:border-none transition-all">검색</Button>
            <Button className="hover:bg-black hover:text-white hover:border-none transition-all" onClick={inputClose}>닫기</Button> 
        </div>
    </form>
  )
}
