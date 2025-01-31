import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { searchMenuType } from '@/interface/searchMenu';

const Btn = styled.button`
    &.active {
        color: #ff0038;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            left: 8px;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 4px;
            background-color: #ff0038;
        }
    }  
`;

export default function DropWrapper({ menu, searchOn, setSearchOn, setText, text } : { menu : searchMenuType[], searchOn: boolean, setSearchOn: Dispatch<SetStateAction<boolean>>, setText: Dispatch<SetStateAction<string>>, text: string }) {
  return (
    <ul className={`bg-white relative z-10 ${!searchOn ? 'hidden' : '' }`} style={{ borderRadius: '0 0 1.3rem 1.3rem', border: '1px solid rgba(0,0,0,.15)', borderTop: 'none' }}>
      { menu.map((m) => (<li key={m.id}><Btn className={`py-1 pl-5 w-full text-left ${m.label === text ? 'active' : ''}`} onClick={(e:React.MouseEvent)=>{ e.preventDefault(); setText(m.label); setSearchOn(false); }}>{m.label}</Btn></li>))}
    </ul>
  )
}
