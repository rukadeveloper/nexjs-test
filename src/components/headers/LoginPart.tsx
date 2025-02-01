import React, { Dispatch, SetStateAction } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import styled from 'styled-components';

import { Menu } from '@/app/api/menu/route';
import { Button } from '../ui/button';

import MobileSearch from './MobileSearch';
import MobileMenu from './MobileMenu';


const Login = styled.div`
  position: relative;
  > button:first-child {
    position: relative;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background-image: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png');
        background-repeat: no-repeat;
        background-size: 338px 313px;
        background-position: -110px -290px;
    }
  }  
  > button.close {
        position: absolute;
        right: 1rem;
        width: 40px;
        height: 40px;
        background-image: url('https://c.011st.com/img/common/sprites/sp_gnb_2x_20241128_151508.png');
        background-repeat: no-repeat;
        background-size: 338px 313px;
        background-position: -203px -38px;
    }
`;

export default function LoginPart({ setSideMenu, menu } : { setSideMenu : Dispatch<SetStateAction<boolean>>, menu: Menu[] }) {

  const { data: session, status } = useSession();

  const close = () => {
    setSideMenu(false);
    document.body.classList.remove('dimmed');
  }

  return (
    <Login className="login__part box-border p-5 pr-0 h-[150px] lg:h-[70px] flex flex-col gap-5 justify-center text-xl font-bold">
      { !session?.user ?
        <Button className="pl-8 flex items-center justify-start w-full hover:underline shadow-none text-xl text-left">로그인</Button>
        :
        <Button className="pl-8 py-0 flex justify-start items-center w-full hover:underline shadow-none text-xl font-bold">로그아웃</Button>
      }
      <button onClick={close} className="top-[.7rem] lg:top-auto close">
        <span className="sr-only">닫기 버튼</span>
      </button>
      <MobileSearch setSideMenu={setSideMenu} />
      <MobileMenu menu={menu} />
    </Login>
  )
}
