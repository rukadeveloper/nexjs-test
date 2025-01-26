import React from 'react';
import styled from 'styled-components';

type Category = {
  id: number,
  firstCategory: string,
  imagePositionX: string,
  imageHoverPositionX: string,
  imagePositionY: string,
  imageHoverPositionY: string,
  category2: CategorySub | null
}

type CategorySub = {
  secondId: number,
  secondCategory: string,
  secondLink: string,
  secondTitle: string,
  categoryId: number
}

const Real = styled.div`
    ul {
      li {
        button {
          position: relative;
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
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
`;

export default function CategoryReal({ menuData } : { menuData : Category[] }) {
  return (
    <Real className="cate__real w-full h-[765px] absolute bottom-0 p-8 bg-white">
      <h2 className="text-xl font-bold pb-4">카테고리</h2>
      <ul>
        {
          menuData.map((md) => (
            <li key={md.id}><button className="pl-12" style={{ '--positionX' : `${md.imagePositionX}`, '--positionY' : `${md.imageHoverPositionY}` } as React.CSSProperties }>{md.firstCategory}</button></li>
          ))
        }
      </ul>
    </Real>
  );
}
