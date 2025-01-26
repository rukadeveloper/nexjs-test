import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Login = styled.div`
  position: relative;
  a {
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
  button {
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

export default function LoginPart({ setSideMenu } : { setSideMenu : Dispatch<SetStateAction<boolean>> }) {

  const close = () => {
    setSideMenu(false);
    document.body.classList.remove('dimmed');
  }

  return (
    <Login className="login__part box-border p-5 h-[70px] flex items-center text-xl font-bold">
      <Link href="/login" className="pl-8">로그인</Link>
      <button onClick={close}>
        <span className="sr-only">닫기 버튼</span>
      </button>
    </Login>
  )
}
