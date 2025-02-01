import React, { useState } from 'react';
import styled from 'styled-components';
import TwoDepthCategory from './TwoDepthCategory';

import { prismaCategory } from '@/app/api/category/route';

const Real = styled.div`
    ul {
      li {
        &.active .two__depth {
            display: block !important;
        }
        &.active {
          button {
            color: #fff;
            font-weight: bold;
            &::after {
              background-position-x: var(--hoverPositionX);
              background-position-y: var(--hoverPositionY);
            }
            &::before {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              z-index: -1;
              background-image: linear-gradient(to right,#ff1d36 0%,#ff0095 100%);
            }
          }
        }
        button {
          &::after {
            content: '';
            display: block;
            width: 24px;
            height: 24px;
            background: url('https://c.011st.com/img/common/sprites/sp_category_menu_2x_202292_101531.png') no-repeat;
            background-size: 140px 140px;
            background-position-x: var(--positionX);
            background-position-y: var(--positionY);
            position: absolute;
            left: 33px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
`;

export default function CategoryReal({ category } : { category : prismaCategory[] }) {
  const [hover,setHover] = useState<boolean>(false);

  const onLiHover = () => {
    setHover(true);
  }

  const onLiLeave = () => {
    setHover(false);
  }

  return (
    <Real className="cate__real w-full h-[765px] absolute bottom-0 bg-white">
      <h2 className="text-xl font-bold pb-4 pl-10 pt-4">카테고리</h2>
      <ul className="pl-10 relative z-30">
        {
          category?.map((md) => (
            <li key={md.id} className={`${hover && 'active'}`} onMouseEnter={onLiHover} onMouseLeave={onLiLeave}>
              <button className="pl-10 w-full py-4 text-left" style={{ '--positionX' : `${md.imagePositionX}`, '--positionY' : `${md.imagePositionY}`, '--hoverPositionX': `${md.imageHoverPositionX}`, '--hoverPositionY': `${md.imageHoverPositionY}` } as React.CSSProperties }>{md.firstCategory}</button>
              <TwoDepthCategory md={md} />
            </li>
          ))
        }
      </ul>
    </Real>
  );
}
